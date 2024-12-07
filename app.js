const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const connectToDatabase = require('./config/dbConfig');  // Import the DB connection function
const productRouter = require('./api/routers/productRouter');
// const authRouter = require('./api/routers/authRouter');
// const adminRouter = require('./api/routers/adminRouter');

const app = express();

// Connect to MongoDB
connectToDatabase();

// Middleware
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Use the routers
app.use('/products', productRouter);
// app.use('/auth', authRouter);
// app.use('/admin', adminRouter);

// Error handling for unmatched routes
app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

// General error handler
app.use((error, req, res, next) => {
  res.status(error.status || 500).json({
    error: {
      message: error.message,
    },
  });
});

module.exports = app;
