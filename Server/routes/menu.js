import express from 'express';
import { query } from '../models/db.js';

const router = express.Router();

// Get all items by vendor
router.get('/:vendor', async (req, res) => {
  try {
    const { vendor } = req.params;

    const items = await query(
      'SELECT * FROM menu WHERE vendor = ?',
      [vendor]
    );

    res.json(items);
  } catch (error) {
    console.error('Fetch menu error:', error);
    res.status(500).json({ error: 'Failed to fetch menu' });
  }
});

// Admin - Add item
router.post('/add', async (req, res) => {
  try {
    const { vendor, name, price } = req.body;

    if (!vendor || !name || price == null) {
      return res.status(400).json({
        error: 'Vendor, name and price are required'
      });
    }

    await query(
      'INSERT INTO menu (vendor, name, price) VALUES (?, ?, ?)',
      [vendor, name, price]
    );

    res.json({ success: true });
  } catch (error) {
    console.error('Add menu item error:', error);
    res.status(500).json({ error: 'Failed to add item' });
  }
});

// Admin - Delete item
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    await query(
      'DELETE FROM menu WHERE id = ?',
      [id]
    );

    res.json({ success: true });
  } catch (error) {
    console.error('Delete menu item error:', error);
    res.status(500).json({ error: 'Failed to delete item' });
  }
});

export default router;

