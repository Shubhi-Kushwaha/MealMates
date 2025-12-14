import express from 'express';
import { query } from '../models/db.js';

const router = express.Router();

// Update user name and location
router.post('/update', async (req, res) => {
  try {
    const { phone, name, location } = req.body;

    if (!phone) {
      return res.status(400).json({ error: 'Phone is required' });
    }

    await query(
      'UPDATE users SET name = ?, location = ? WHERE phone = ?',
      [name, location, phone]
    );

    res.json({ success: true });
  } catch (error) {
    console.error('Update user error:', error);
    res.status(500).json({ error: 'Failed to update user' });
  }
});

// Get user by phone
router.get('/:phone', async (req, res) => {
  try {
    const users = await query(
      'SELECT * FROM users WHERE phone = ?',
      [req.params.phone]
    );

    res.json(users[0] || null);
  } catch (error) {
    console.error('Fetch user error:', error);
    res.status(500).json({ error: 'Failed to fetch user' });
  }
});

// Save user location
router.post('/save-location', async (req, res) => {
  try {
    const { phone, location } = req.body;

    if (!phone || !location) {
      return res.status(400).json({
        success: false,
        message: 'Phone and location are required'
      });
    }

    await query(
      'INSERT INTO user_locations (phone, location) VALUES (?, ?)',
      [phone, location]
    );

    res.json({
      success: true,
      message: 'Location saved successfully'
    });

  } catch (error) {
    console.error('Save location error:', error);
    res.status(500).json({
      success: false,
      message: 'Database error'
    });
  }
});

export default router;
