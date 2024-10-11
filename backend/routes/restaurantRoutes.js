const express = require('express');
const Restaurant = require('../models/restaurant'); // Import the User model

const router = express.Router();

// Route to get all users
router.get('/', async (req, res) => {
  try {
    const restaurants = await Restaurant.find(); // Fetch all users from the DB
    res.json(restaurants);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

// Route to create a new user
/*router.post('/', async (req, res) => {
  try {
    const newRestaurant = new Restaurant(req.body);
    await newRestaurant.save();
    res.status(201).json(newRestaurant);
  } catch (err) {
    res.status(400).json({ error: 'Failed to create user' });
  }
});*/

module.exports = router;  // Export the router to use in server.js
