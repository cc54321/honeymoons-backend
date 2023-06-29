const express = require('express');
const router = express.Router();

// Import other route files
const usersRouter = require('./users');
const loginRouter = require('./login');

// Define routes
router.use('/users', usersRouter);
router.use('/login', loginRouter);

// Additional routes or middleware can be added here

module.exports = router;










