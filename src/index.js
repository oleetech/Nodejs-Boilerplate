require('dotenv').config(); // Load environment variables
require('reflect-metadata'); // Required by TypeORM for decorators

const express = require('express');
const { DataSource } = require('typeorm');
const ormConfig = require('./config/ormconfig');

// Initialize the DataSource with ORM configuration
const AppDataSource = new DataSource(ormConfig);

const initializeApp = async () => {
  try {
    // Check if the DataSource is already initialized
    if (!AppDataSource.isInitialized) {
      // Initialize the DataSource
      await AppDataSource.initialize();
      console.log('Database connected successfully!');

      
    }

    // Create an instance of the Express application
    const app = express();
    app.use(express.json()); // Middleware to parse JSON request bodies

    const { setupSwagger, swaggerDocs } = require('../swaggerConfig'); // Import Swagger setup

// Setup Swagger documentation
setupSwagger(app);


// Serve swaggerConfig.json directly
// Serve swaggerConfig.json
app.get('/swaggerConfig.json', (req, res) => {
    res.json(swaggerDocs); // Serve the swagger JSON directly
});


// Serve ReDoc at /redoc
app.get('/redoc', (req, res) => {
    res.sendFile(path.join(__dirname, 'redoc.html'));
});

    // Import and use routes
    const roleRoutes = require('./modules/Authentication/routes/role.routes'); // Fixed file name
    app.use('/api', roleRoutes);


    const userGroupRoutes = require('./modules/Authentication/routes/userGroup.routes');
    app.use('/api', userGroupRoutes);


    const permissionRoutes = require('./modules/Authentication/routes/permission.routes');
    app.use('/api', permissionRoutes);
    
    const { studentRoutes } = require('./modules/student/studentModule'); // Make sure `studentModule` exports `studentRoutes`
    app.use('/api/students', studentRoutes);

    // Define the port and start the server
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Error initializing app:', error);
  }
};

// Call the function to initialize the application
initializeApp();

// Export the AppDataSource for use in other modules
module.exports = { AppDataSource };
