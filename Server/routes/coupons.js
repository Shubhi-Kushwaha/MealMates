import express from 'express';
import { query } from '../models/db.js';

const router = express.Router();

router.post('/apply', async (req, res) => {
  try {
    const { code } = req.body;

    if (!code) {
      return res.status(400).json({
        success: false,
        error: 'Coupon code is required'
      });
    }

    const coupons = await query(
      `SELECT * 
       FROM coupons 
       WHERE code = ? 
         AND is_active = 1 
         AND valid_until >= CURDATE()`,
      [code]
    );

    if (coupons.length === 0) {
      return res.status(400).json({
        success: false,
        error: 'Invalid or expired code'
      });
    }

    res.json({
      success: true,
      discount: coupons[0].discount_percent
    });

  } catch (error) {
    console.error('Coupon apply error:', error);
    res.status(500).json({
      success: false,
      error: 'DB error'
    });
  }
});

export default router;
