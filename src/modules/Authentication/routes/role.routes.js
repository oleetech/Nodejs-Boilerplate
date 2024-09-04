const express = require('express');
const router = express.Router();
const roleController = require('../controllers/role.controller');

// Define routes with corresponding controller methods
router.get('/roles', roleController.getRoles);
router.post('/roles', roleController.createRole); // Create a new role
router.get('/roles/:id', roleController.getRoleById); // Get role by ID
router.put('/roles/:id', roleController.updateRole); // Update role by ID
router.delete('/roles/:id', roleController.deleteRole); // Delete role by ID

// Route for creating default roles
router.post('/roles/default', roleController.createDefaultRoles);

module.exports = router;
