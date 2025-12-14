const express = require('express');
const { param, body, validationResult } = require('express-validator');
const auth = require('../middleware/auth');
const db = require('../db');

const router = express.Router();

router.get(
  '/:orderId',
  auth,
  param('orderId').trim().isInt().withMessage('orderId must be an integer'),
  async (req, res, next) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

      const orderId = req.params.orderId;
      const rows = await db.query('SELECT * FROM orders WHERE id = ?', [orderId]);

      if (!rows || rows.length === 0) return res.status(404).json({ error: 'Order not found.' });
      res.json(rows[0]);
    } catch (err) {
      next(err);
    }
  }
);

router.post(
  '/:orderId/status',
  auth,
  [
    param('orderId').trim().isInt().withMessage('orderId must be an integer'),
    body('status').trim().isString().notEmpty().withMessage('status is required'),
  ],
  async (req, res, next) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

      const { status } = req.body;
      const orderId = req.params.orderId;

      const result = await db.query('UPDATE orders SET status = ? WHERE id = ?', [status, orderId]);
      res.json({ success: true, affectedRows: result.affectedRows || 1 });
    } catch (err) {
      next(err);
    }
  }
);

module.exports = router;