# AI Growth Pvt Ltd

AI Growth Pvt Ltd is a modern agency website and lead-generation platform built with React on the frontend and Express + MongoDB on the backend. The project showcases services, pricing, testimonials, analytics, chat flow, and lead capture workflows for a digital marketing and AI automation agency.

## Tech Stack

- Frontend: React + Vite
- Backend: Node.js + Express
- Database: MongoDB + Mongoose
- Real-time features: Socket.IO
- Payments: Razorpay
- Email: Nodemailer

## Project Structure

- `frontend/` — Vite React app for the marketing website
- `backend/` — Express API and MongoDB models
- `package.json` — root scripts to run backend/frontend quickly

## Features

- Agency landing page with sections for services, pricing, workflow, portfolio, testimonials, and CTA
- Lead subscription and OTP verification flow
- Consultation booking requests
- Analytics and telemetry endpoints
- AI chat assistant endpoint
- Real-time socket communication
- Razorpay order creation for paid plans

## Prerequisites

Before running the project, make sure you have:

- Node.js 18 or newer
- npm
- MongoDB running locally or a MongoDB Atlas connection string
- Gmail app password or SMTP credentials for email sending
- Razorpay credentials if you want payment flow enabled

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/RAKESHKUMAR21K/AI-Growth-Pvt-Ltd.git
   cd AI-Growth-Pvt-Ltd
   ```

2. Install backend dependencies:

   ```bash
   cd backend
   npm install
   ```

3. Install frontend dependencies:

   ```bash
   cd ../frontend
   npm install
   ```

## Environment Variables

Create a `.env` file inside the `backend` folder with the following variables:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/ai_growth_agency
FRONTEND_URL=http://localhost:5173
SYSTEM_MAIL_USER=your-email@gmail.com
SYSTEM_MAIL_PASS=your-app-password
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_SECRET=your_razorpay_secret_key
```

## Running the Project

From the root folder:

```bash
npm run backend
```

In a second terminal:

```bash
npm run frontend
```

Then open:

```bash
http://localhost:5173
```

## Backend API Overview

Common API routes include:

- `GET /api/v1/agency/telemetry`
- `POST /api/v1/agency/subscribe`
- `POST /api/v1/agency/verify-otp`
- `POST /api/v1/agency/consultation`
- `POST /api/v1/agency/payments/create-order`
- `POST /api/v1/agency/ai-agent`

## Notes

- The project is configured for local development by default.
- For production, update `FRONTEND_URL`, database configuration, and email/payment credentials.
- It is recommended to add `.env` and `node_modules` to `.gitignore` before production deployment.

## License

This project is for educational and business use as part of the AI Growth Pvt Ltd website and backend platform.
