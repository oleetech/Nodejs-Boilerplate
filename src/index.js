// src/index.js

require('dotenv').config(); // Load environment variables
require('reflect-metadata'); // Required by TypeORM for decorators

const express = require('express');
const { DataSource } = require('typeorm');
const ormConfig = require('./config/ormconfig');

// Initialize Express app
const app = express();

// Configure middlewares
app.use(express.json());

// Initialize TypeORM DataSource
const AppDataSource = new DataSource(ormConfig);

AppDataSource.initialize()
  .then(() => {
    console.log('Database connected successfully!');

    // Start the server
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error initializing DataSource:', error);
  });

// Export the AppDataSource for TypeORM CLI usage
module.exports = AppDataSource;
