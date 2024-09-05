const express = require('express');
const router = express.Router();
const rolePermissionController = require('../controllers/rolePermission.controller');

// Routes for rolePermission CRUD operations
router.post('/role-permissions', rolePermissionController.createRolePermission);
router.get('/role-permissions/:roleId/:permissionId', rolePermissionController.getRolePermissionById);
router.put('/role-permissions/:roleId/:permissionId', rolePermissionController.updateRolePermission);
router.delete('/role-permissions/:roleId/:permissionId', rolePermissionController.deleteRolePermission);
router.get('/role-permissions', rolePermissionController.getAllRolePermissions);

module.exports = router;
