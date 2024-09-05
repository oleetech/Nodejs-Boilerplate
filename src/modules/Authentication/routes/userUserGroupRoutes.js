const express = require('express');
const router = express.Router();
const userUserGroupController = require('../controllers/userUserGroup.controller');

// Routes for userUserGroup CRUD operations
router.post('/user-user-groups', userUserGroupController.createUserUserGroup);
router.get('/user-user-groups/:userId/:usergroupId', userUserGroupController.getUserUserGroupById);
router.put('/user-user-groups/:userId/:usergroupId', userUserGroupController.updateUserUserGroup);
router.delete('/user-user-groups/:userId/:usergroupId', userUserGroupController.deleteUserUserGroup);
router.get('/user-user-groups', userUserGroupController.getAllUserUserGroups);

module.exports = router;
