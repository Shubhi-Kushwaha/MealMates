// server/lib/razorpayClient.js
import Razorpay from 'razorpay';
 // make sure your .env is loaded

// instantiate once
const razorpay = new Razorpay({
  key_id:     process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_SECRET,
});

export default razorpay;
