# olee-redoc-api-doc

`olee-redoc-api-doc` is a library for setting up automatic API documentation in Express.js applications using Swagger and Redoc.

## Installation

```bash
npm install olee-redoc-api-doc
```

## Basic Usage

```js
const express = require('express');
const setupDocs = require('olee-redoc-api-doc');
require('dotenv').config();

const app = express();

setupDocs(app);

app.get('/users', (req, res) => {
  res.json([{ id: 1, name: 'John Doe' }]);
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

```

## Example Routes
```javascript
/**
 * @swagger
 * /users:
 *   get:
 *     summary: Retrieve a list of users
 *     responses:
 *       200:
 *         description: A list of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */
app.get('/users', (req, res) => {
    res.json([{ id: 1, name: 'John Doe' }]);
  });

```

## Advance Configuration
```javascript
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
```


  