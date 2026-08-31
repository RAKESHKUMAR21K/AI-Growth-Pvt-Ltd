import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import nodemailer from 'nodemailer';
import Razorpay from 'razorpay';

dotenv.config();
const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: { origin: process.env.FRONTEND_URL || "http://localhost:5173", methods: ["GET", "POST"] }
});

// Database Schemas
const leadSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  createdAt: { type: Date, default: Date.now }
});
const Lead = mongoose.model('Lead', leadSchema);

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, lowercase: true },
  selectedPlan: { type: String, default: 'General Consultation' },
  createdAt: { type: Date, default: Date.now }
});
const Contact = mongoose.model('Contact', contactSchema);

// In-Memory OTP Store
const otpStore = new Map();

// Express Configuration
app.use(cors({ origin: process.env.FRONTEND_URL || "http://localhost:5173" }));
app.use(express.json());

// MongoDB Link Configuration
mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/ai_growth_agency')
  .then(() => console.log('📡 Database Engine Link Connected.'))
  .catch(err => console.error('❌ Database Connection Error:', err));

// --- API ROUTES ---

// 1. Dashboard Metrics Endpoint
app.get('/api/v1/agency/telemetry', async (req, res) => {
  try {
    const dbLeads = await Lead.countDocuments();
    const dbContacts = await Contact.countDocuments();
    res.status(200).json({
      success: true,
      telemetry: {
        totalLeads: 12540 + dbLeads,
        revenue: "₹18,75,000",
        conversions: 8765 + dbContacts,
        hoursSaved: 320
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// 2. Newsletter Subscription with Automatic Email Verification Trigger
app.use('/api/v1/agency/subscribe', async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) return res.status(400).json({ success: false, message: 'Email placeholder can\'t be blank.' });

    const exists = await Lead.findOne({ email });
    if (exists) return res.status(400).json({ success: false, message: 'Identity vector already subscribed.' });

    const targetOTP = Math.floor(100000 + Math.random() * 900000).toString();
    otpStore.set(email, { otp: targetOTP, expires: Date.now() + 5 * 60 * 1000 });

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user: process.env.SYSTEM_MAIL_USER, pass: process.env.SYSTEM_MAIL_PASS }
    });

    await transporter.sendMail({
      from: '"AI Growth Systems" <no-reply@aigrowth.com>',
      to: email,
      subject: 'Security Verification Core Code',
      text: `Your requested authentication OTP token is: ${targetOTP}`
    });

    res.status(200).json({ success: true, otpRequired: true, message: 'OTP token routed to inbox.' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// 3. Confirm OTP and Finalize Registration Flow
app.post('/api/v1/agency/verify-otp', async (req, res) => {
  try {
    const { email, otp } = req.body;
    const cached = otpStore.get(email);

    if (!cached || cached.expires < Date.now()) {
      return res.status(400).json({ success: false, message: 'OTP expired or not requested.' });
    }
    if (cached.otp !== otp) {
      return res.status(400).json({ success: false, message: 'Invalid verification token.' });
    }

    otpStore.delete(email);
    const newLead = await Lead.create({ email });
    res.status(201).json({ success: true, message: 'Identity mapped successfully!', data: newLead });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// 4. Consultation Booking Request Endpoint
app.post('/api/v1/agency/consultation', async (req, res) => {
  try {
    const { name, email, selectedPlan } = req.body;
    if (!name || !email) return res.status(400).json({ success: false, message: 'Missing parameters.' });

    const responseData = await Contact.create({ name, email, selectedPlan });
    res.status(201).json({ success: true, message: 'Consultation array loaded into CRM successfully.', responseData });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// 5. Razorpay Transaction Order Genesis Engine
app.post('/api/v1/agency/payments/create-order', async (req, res) => {
  try {
    const { amount, planName } = req.body;
    const razorpayInstance = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID || 'rzp_test_placeholder',
      key_secret: process.env.RAZORPAY_SECRET || 'secret_placeholder'
    });

    const orderData = await razorpayInstance.orders.create({
      amount: Number(amount) * 100, // format to subunits
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
      notes: { item: planName }
    });

    res.status(201).json({ success: true, order: orderData });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// 6. AI Agent System Triage Chatbot Logic Endpoint
app.post('/api/v1/agency/ai-agent', (req, res) => {
  const { message } = req.body;
  let reply = "I've logged your architectural requirements. Let's look over your layout requirements during our upcoming live strategy evaluation call.";
  const clean = message.toLowerCase();

  if (clean.includes('pricing') || clean.includes('cost')) {
    reply = "Our systems deploy in predictable tiers: Starter Website (₹15,000), AI Automation (₹25,000), and Monthly Retainers (₹20,000/mo).";
  } else if (clean.includes('automation') || clean.includes('bot')) {
    reply = "We craft live WhatsApp integrations, fully automated dashboard telemetry pipelines, and customized MERN platforms.";
  }
  res.status(200).json({ success: true, response: reply });
});
// UPDATED: Integrated Digital & Email Marketing Telemetry Core Node
app.get('/api/v1/agency/telemetry', async (req, res) => {
  try {
    const dbLeads = await Lead.countDocuments();
    const dbContacts = await Contact.countDocuments();
    
    // Calculate simulated baseline growth metrics fueled by active DB collections
    const liveCampaignsCount = Math.min(12, Math.max(4, Math.floor(dbLeads / 3)));
    
    res.status(200).json({
      success: true,
      telemetry: {
        totalLeads: 12540 + dbLeads,
        revenue: "₹18,75,000",
        conversions: 8765 + dbContacts,
        hoursSaved: 320,
        // NEW: Email Marketing Telemetry Scalars
        emailMetrics: {
          deliveryRate: "99.4%",
          avgOpenRate: "42.8%",
          clickThroughRate: "11.6%",
          activeSequences: liveCampaignsCount + 8
        }
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// --- Web Socket Channel Layer Logic ---
io.on('connection', (socket) => {
  console.log(`🔗 Channel socket linked: ${socket.id}`);
  socket.on('transmit_location_coordinates', (coords) => {
    io.emit('receive_live_telemetry_stream', coords);
  });
  socket.on('disconnect', () => console.log('❌ Channel link decoupled.'));
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`⚡ Production Mesh running on port ${PORT}`));