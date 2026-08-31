import mongoose from 'mongoose';

const leadSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true, trim: true, lowercase: true },
  source: { type: String, default: 'Website Newsletter' },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Lead', leadSchema);