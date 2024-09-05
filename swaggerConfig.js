const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const path = require('path');
const fs = require('fs');

// Swagger configuration
const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'API Documentation',
            version: '1.0.0',
            description: 'API documentation for Category, SubCategory, and Product management',
        },
        components: {
            schemas: {

            },
        },
    },
    apis: [],
};

// Step 3: Load Swagger Docs from Each Module
const loadSwaggerDocs = () => {
    const modulesDir = path.join(__dirname, 'src/modules');
    const swaggerDocsFiles = [];

    fs.readdirSync(modulesDir).forEach((moduleDir) => {
        const swaggerDocsDir = path.join(modulesDir, moduleDir, 'swagger-docs');
        if (fs.existsSync(swaggerDocsDir)) {
            fs.readdirSync(swaggerDocsDir).forEach((file) => {
                if (file.endsWith('.js')) {
                    swaggerDocsFiles.push(path.join(swaggerDocsDir, file));
                }
            });
        }
    });

    return swaggerDocsFiles;
};

// Step 4: Dynamically Include Swagger Files from All Modules
swaggerOptions.apis = loadSwaggerDocs();

// Initialize Swagger with the dynamically loaded options
const swaggerDocs = swaggerJsDoc(swaggerOptions);

const setupSwagger = (app) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
};

module.exports = {
    setupSwagger,
    swaggerDocs,
};
