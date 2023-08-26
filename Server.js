

const express = require('express');
const cors = require('cors');
const logger = require('morgan');
require('dotenv').config();
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(logger('dev'))
// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
    // Start the server
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => console.error('MongoDB connection error:', error));

// API routes
app.use('/api/users', require('./routes/users'));
app.use('/api/login', require('./routes/login'));

// Default route
app.get('/', (req, res) => {
  res.send('Welcome to the Honeymoons Backend');
});
