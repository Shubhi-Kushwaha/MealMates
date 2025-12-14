import express from 'express';
import { query } from '../models/db.js';

const router = express.Router();

// In-memory OTP store (demo/testing only)
let otpStore = {};

// POST /send-otp
router.post('/send-otp', async (req, res) => {
  const { phone } = req.body;

  if (!phone) {
    return res.status(400).json({
      success: false,
      message: 'Phone number is required'
    });
  }

  // Generate 6-digit OTP
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  otpStore[phone] = otp;

  console.log(` Simulated OTP sent to ${phone}: ${otp}`);

  res.json({
    success: true,
    message: 'OTP sent successfully'
  });
});

// POST /verify-otp
router.post('/verify-otp', async (req, res) => {
  try {
    const { phone, otp } = req.body;

    if (!phone || !otp) {
      return res.status(400).json({
        success: false,
        message: 'Phone and OTP required'
      });
    }

    if (otpStore[phone] !== otp) {
      return res.status(401).json({
        success: false,
        message: 'Invalid OTP'
      });
    }

    // Clear OTP after verification
    delete otpStore[phone];

    // Check if user exists
    const users = await query(
      'SELECT * FROM users WHERE phone = ?',
      [phone]
    );

    if (users.length === 0) {
      // Create user
      await query(
        'INSERT INTO users (phone) VALUES (?)',
        [phone]
      );

      return res.json({
        success: true,
        message: 'User created and OTP verified'
      });
    }

    return res.json({
      success: true,
      message: 'OTP verified. User exists'
    });

  } catch (error) {
    console.error('OTP verification error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

export default router;
