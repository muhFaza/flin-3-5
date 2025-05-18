const express = require('express');
const router = express.Router();
const { Lead } = require('../models');

// POST /leads
router.post('/', async (req, res) => {
  const { name, phone, email, loan_type } = req.body;

  try {
    await Lead.create({ name, phone, email, loan_type });
    res.status(201).send('Lead saved');
  } catch (err) {
    res.status(500).json({ error: 'Failed to create lead' });
  }
});

// GET /leads (protected)
router.get('/', async (req, res) => {
  try {
    const leads = await Lead.findAll();
    res.json(leads);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch leads' });
  }
});

module.exports = router;
