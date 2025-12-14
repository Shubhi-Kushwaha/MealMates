import express from 'express';
import { query } from '../models/db.js';

const router = express.Router();

// Admin login
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    const admins = await query(
      'SELECT * FROM admin WHERE username = ? AND password = ?',
      [username, password]
    );

    if (admins.length > 0) {
      res.json({ success: true });
    } else {
      res.status(401).json({
        success: false,
        message: 'Invalid credentials'
      });
    }

  } catch (error) {
    console.error('Admin login error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get all users
router.get('/users', async (req, res) => {
  try {
    const users = await query('SELECT * FROM users');
    res.json(users);
  } catch (error) {
    console.error('Fetch users error:', error);
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

// Get all orders
router.get('/orders', async (req, res) => {
  try {
    const orders = await query('SELECT * FROM orders');
    res.json(orders);
  } catch (error) {
    console.error('Fetch orders error:', error);
    res.status(500).json({ error: 'Failed to fetch orders' });
  }
});

// ✅ Mark container as returned (for discount)
router.patch('/mark-container-returned', async (req, res) => {
  try {
    const { phone } = req.body;

    if (!phone) {
      return res.status(400).json({
        success: false,
        message: 'Phone number is required'
      });
    }

    await query(
      'UPDATE users SET returned_container = true WHERE phone = ?',
      [phone]
    );

    res.json({
      success: true,
      message: 'Marked container as returned'
    });

  } catch (error) {
    console.error('Update container status error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update container status'
    });
  }
});

export default router;
