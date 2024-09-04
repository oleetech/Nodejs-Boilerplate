// routes/permission.routes.js
const express = require('express');
const router = express.Router();
const permissionController = require('../controllers/permission.controller');

// Define routes with corresponding controller methods
router.get('/permissions', permissionController.getAllPermissions);
router.post('/permissions', permissionController.createPermission); // Create a new permission
router.get('/permissions/:id', permissionController.getPermissionById); // Get permission by ID
router.put('/permissions/:id', permissionController.updatePermission); // Update permission by ID
router.delete('/permissions/:id', permissionController.deletePermission); // Delete permission by ID

module.exports = router;
