const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const path = require('path');
const express = require('express');
require('dotenv').config();

function setupDocs(app) {
  const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
      title: process.env.API_TITLE || 'API Documentation',
      version: process.env.API_VERSION || '1.0.0',
      description: process.env.API_DESCRIPTION || 'API documentation for the Express app',
    },
    servers: [
      {
        url: process.env.SERVER_URL || 'http://localhost:3000',
      },
    ],
  };

  const options = {
    swaggerDefinition,
    apis: [process.env.APIS_PATH || './routes/*.js'], // Ensure this points to your route files
  };

  const swaggerSpec = swaggerJsdoc(options);

  // Serve Swagger UI
  app.use(process.env.SWAGGER_DOCS_PATH || '/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  // Serve Redoc documentation
  app.get(process.env.REDOC_PATH || '/redoc', (req, res) => {
    res.sendFile(path.join(__dirname, 'redoc.html')); // Ensure correct path to redoc.html
  });

  // Serve the swagger.json file that Redoc will use
  app.get('/swagger.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });
}

module.exports = setupDocs;
