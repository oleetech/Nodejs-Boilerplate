// routes/userGroup.routes.js
const express = require('express');
const router = express.Router();
const userGroupController = require('../controllers/userGroup.controller');

// Define routes with corresponding controller methods
router.get('/user-groups', userGroupController.getAllUserGroups);
router.post('/user-groups', userGroupController.createUserGroup); // Create a new user group
router.get('/user-groups/:id', userGroupController.getUserGroupById); // Get user group by ID
router.put('/user-groups/:id', userGroupController.updateUserGroup); // Update user group by ID
router.delete('/user-groups/:id', userGroupController.deleteUserGroup); // Delete user group by ID

module.exports = router;
