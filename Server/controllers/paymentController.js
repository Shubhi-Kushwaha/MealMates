// server/controllers/paymentController.js

// ✂️ REMOVE this:
// import Razorpay from 'razorpay';

import razorpay from '../lib/razorpayClient.js';

export async function createPaymentIntent(req, res) {
  const { amount } = req.body;

  // validation…
  if (amount == null) {
    return res.status(400).json({
      error:   'validation_error',
      message: '`amount` is required in paise.'
    });
  }
  if (typeof amount !== 'number' || amount <= 0) {
    return res.status(400).json({
      error:   'validation_error',
      message: '`amount` must be a positive number (in paise).'
    });
  }

  // use the single shared razorpay client
  try {
    const order = await razorpay.orders.create({
      amount,
      currency: 'INR',
      receipt:  `receipt_${Date.now()}`
    });
    return res.status(200).json(order);
  } catch (err) {
    console.error('Razorpay error:', err);
    return res.status(502).json({
      error:   'gateway_error',
      message: 'Failed to create a payment intent with Razorpay.'
    });
  }
}
