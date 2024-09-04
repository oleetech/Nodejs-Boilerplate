const express = require('express');
const setupDocs = require('olee-redoc-api-doc'); // Adjust to your library's name

const app = express();

// Set up API documentation with advanced configuration
setupDocs(app, {
  title: 'Advanced API Documentation',
  version: '2.0.0',
  description: 'Detailed API documentation with advanced configuration',
  serverUrl: 'http://localhost:3000',
  apis: ['./src/routes/*.js'], // Adjust to your actual route file location
  swaggerDocsPath: '/docs', // Path to access Swagger UI
  redocPath: '/redoc', // Path to access Redoc
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
