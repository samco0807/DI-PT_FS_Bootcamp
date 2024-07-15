const express = require('express');
const router = express.Router();

// Import route files
const exerciseRoutes = require('./exercises');
const workoutRoutes = require('./workouts');
const userRoutes = require('./users');


// Use imported routes
router.use('/exercises', exerciseRoutes);
router.use('/workouts', workoutRoutes);
router.use('/users', userRoutes);

module.exports = router;