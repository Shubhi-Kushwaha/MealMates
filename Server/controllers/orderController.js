const axios = require('axios');
const db = require('../db');

const FASTAPI_URL = process.env.FASTAPI_URL || 'http://localhost:8000';
const FASTAPI_TOKEN = process.env.FASTAPI_SERVICE_TOKEN || '';

exports.updateOrderStatus = async (req, res, next) => {
  try {
    const orderId = req.params.orderId;
    const { status } = req.body;

    // Try FastAPI microservice first
    try {
      const headers = FASTAPI_TOKEN ? { Authorization: `Bearer ${FASTAPI_TOKEN}` } : {};
      const resp = await axios.post(
        `${FASTAPI_URL}/order/update-status`,
        { orderId: Number(orderId), status },
        { headers, timeout: 5000 }
      );
      if (resp?.data?.success) {
        return res.json({ success: true, via: 'fastapi' });
      }
    } catch (fastErr) {
      console.warn('FastAPI update failed, falling back to DB update:', fastErr?.message || fastErr);
    }

    // Fallback: update DB directly
    const result = await db.query('UPDATE orders SET status = ? WHERE id = ?', [status, orderId]);
    return res.json({ success: true, via: 'db', affectedRows: result.affectedRows || 1 });
  } catch (err) {
    next(err);
  }
};