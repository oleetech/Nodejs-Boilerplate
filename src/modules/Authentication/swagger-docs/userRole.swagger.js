// swagger/userRole.swagger.js

/**
 * @swagger
 * tags:
 *   name: UserRoles
 *   description: API for managing user roles
 */

/**
 * @swagger
 * /user-roles:
 *   get:
 *     summary: Get all user roles
 *     tags: [UserRoles]
 *     responses:
 *       200:
 *         description: A list of user roles
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   userId:
 *                     type: integer
 *                     example: 1
 *                   roleId:
 *                     type: integer
 *                     example: 2
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /user-roles:
 *   post:
 *     summary: Create a new user role
 *     tags: [UserRoles]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: integer
 *                 example: 1
 *               roleId:
 *                 type: integer
 *                 example: 2
 *     responses:
 *       201:
 *         description: User role created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 userId:
 *                   type: integer
 *                   example: 1
 *                 roleId:
 *                   type: integer
 *                   example: 2
 *       400:
 *         description: Bad request (e.g., missing required fields)
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /user-roles/{userId}/{roleId}:
 *   get:
 *     summary: Get a user role by userId and roleId
 *     tags: [UserRoles]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *       - in: path
 *         name: roleId
 *         required: true
 *         schema:
 *           type: integer
 *           example: 2
 *     responses:
 *       200:
 *         description: User role found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 userId:
 *                   type: integer
 *                   example: 1
 *                 roleId:
 *                   type: integer
 *                   example: 2
 *       404:
 *         description: User role not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /user-roles/{userId}/{roleId}:
 *   put:
 *     summary: Update a user role by userId and roleId
 *     tags: [UserRoles]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *       - in: path
 *         name: roleId
 *         required: true
 *         schema:
 *           type: integer
 *           example: 2
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: integer
 *                 example: 1
 *               roleId:
 *                 type: integer
 *                 example: 2
 *     responses:
 *       200:
 *         description: User role updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 userId:
 *                   type: integer
 *                   example: 1
 *                 roleId:
 *                   type: integer
 *                   example: 2
 *       400:
 *         description: Bad request (e.g., missing required fields)
 *       404:
 *         description: User role not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /user-roles/{userId}/{roleId}:
 *   delete:
 *     summary: Delete a user role by userId and roleId
 *     tags: [UserRoles]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *       - in: path
 *         name: roleId
 *         required: true
 *         schema:
 *           type: integer
 *           example: 2
 *     responses:
 *       200:
 *         description: User role deleted successfully
 *       404:
 *         description: User role not found
 *       500:
 *         description: Internal server error
 */
