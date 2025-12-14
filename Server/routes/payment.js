// routes/payment.js
import express from 'express';
import razorpay from '../lib/razorpayClient.js';       // ← your single shared client
import { createPaymentIntent } from '../controllers/paymentController.js';

const router = express.Router();

// 1) Create‑Payment‑Intent endpoint
router.post('/create-payment-intent', createPaymentIntent);

// 2) Create‑Order endpoint (if you still want it here)
router.post('/create-order', async (req, res) => {
  const { amount } = req.body;
  if (typeof amount !== 'number' || amount <= 0) {
    return res.status(400).json({ error: 'Invalid amount' });
  }
  try {
    const order = await razorpay.orders.create({
      amount,
      currency: 'INR',
      receipt: `receipt_order_${Date.now()}`
    });
    res.json(order);
  } catch (err) {
    console.error('Error creating Razorpay order:', err);
    res.status(502).json({ error: 'Failed to create order' });
  }
});

export default router;

