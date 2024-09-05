/**
 * @swagger
 * tags:
 *   name: RolePermissions
 *   description: API for managing role-permission relationships
 */

/**
 * @swagger
 * /role-permissions:
 *   get:
 *     summary: Get all role-permission relationships
 *     tags: [RolePermissions]
 *     responses:
 *       200:
 *         description: List of role-permission relationships
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   roleId:
 *                     type: integer
 *                     description: The ID of the role.
 *                   permissionId:
 *                     type: integer
 *                     description: The ID of the permission.
 */

/**
 * @swagger
 * /role-permissions/{roleId}/{permissionId}:
 *   get:
 *     summary: Get a role-permission relationship by roleId and permissionId
 *     tags: [RolePermissions]
 *     parameters:
 *       - in: path
 *         name: roleId
 *         schema:
 *           type: integer
 *         required: true
 *         description: The ID of the role.
 *       - in: path
 *         name: permissionId
 *         schema:
 *           type: integer
 *         required: true
 *         description: The ID of the permission.
 *     responses:
 *       200:
 *         description: Role-permission relationship details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 roleId:
 *                   type: integer
 *                 permissionId:
 *                   type: integer
 *       404:
 *         description: Role-permission relationship not found
 */

/**
 * @swagger
 * /role-permissions:
 *   post:
 *     summary: Create a new role-permission relationship
 *     tags: [RolePermissions]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               roleId:
 *                 type: integer
 *               permissionId:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Role-permission relationship created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 roleId:
 *                   type: integer
 *                 permissionId:
 *                   type: integer
 *       500:
 *         description: Error creating role-permission relationship
 */

/**
 * @swagger
 * /role-permissions/{roleId}/{permissionId}:
 *   put:
 *     summary: Update an existing role-permission relationship
 *     tags: [RolePermissions]
 *     parameters:
 *       - in: path
 *         name: roleId
 *         schema:
 *           type: integer
 *         required: true
 *         description: The ID of the role.
 *       - in: path
 *         name: permissionId
 *         schema:
 *           type: integer
 *         required: true
 *         description: The ID of the permission.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               roleId:
 *                 type: integer
 *               permissionId:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Role-permission relationship updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 roleId:
 *                   type: integer
 *                 permissionId:
 *                   type: integer
 *       404:
 *         description: Role-permission relationship not found
 *       500:
 *         description: Error updating role-permission relationship
 */

/**
 * @swagger
 * /role-permissions/{roleId}/{permissionId}:
 *   delete:
 *     summary: Delete a role-permission relationship
 *     tags: [RolePermissions]
 *     parameters:
 *       - in: path
 *         name: roleId
 *         schema:
 *           type: integer
 *         required: true
 *         description: The ID of the role.
 *       - in: path
 *         name: permissionId
 *         schema:
 *           type: integer
 *         required: true
 *         description: The ID of the permission.
 *     responses:
 *       200:
 *         description: Role-permission relationship deleted successfully
 *       404:
 *         description: Role-permission relationship not found
 *       500:
 *         description: Error deleting role-permission relationship
 */
