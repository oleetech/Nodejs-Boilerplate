// routes/userRole.routes.js
const express = require('express');
const router = express.Router();
const userRoleController = require('../controllers/userRole.controller');

// Routes for userRole CRUD operations
router.post('/user-roles', userRoleController.createUserRole);
router.get('/user-roles/:userId/:roleId', userRoleController.getUserRoleById);
router.put('/user-roles/:userId/:roleId', userRoleController.updateUserRole);
router.delete('/user-roles/:userId/:roleId', userRoleController.deleteUserRole);
router.get('/user-roles', userRoleController.getAllUserRoles);

module.exports = router;
