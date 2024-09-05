/**
 * @swagger
 * tags:
 *   name: UserGroups
 *   description: User group management
 */

/**
 * @swagger
 * /user-groups:
 *   get:
 *     summary: Get all user groups
 *     tags: [UserGroups]
 *     responses:
 *       200:
 *         description: A list of user groups.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/UserGroup'
 *       204:
 *         description: No user groups found.
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: 'Failed to retrieve user groups'
 *                 error:
 *                   type: string
 *                   example: 'Detailed error message'
 */

/**
 * @swagger
 * /user-groups:
 *   post:
 *     summary: Create a new user group
 *     tags: [UserGroups]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: User group name
 *                 example: 'Admins'
 *     responses:
 *       201:
 *         description: User group created successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserGroup'
 *       400:
 *         description: Invalid request payload.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: 'Invalid input data'
 *       409:
 *         description: Conflict, e.g., user group already exists.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: 'User group already exists'
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: 'Failed to create user group'
 *                 error:
 *                   type: string
 *                   example: 'Detailed error message'
 */

/**
 * @swagger
 * /user-groups/{id}:
 *   get:
 *     summary: Get a user group by ID
 *     tags: [UserGroups]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The user group ID
 *     responses:
 *       200:
 *         description: User group found.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserGroup'
 *       404:
 *         description: User group not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: 'User group not found'
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: 'Failed to retrieve user group'
 *                 error:
 *                   type: string
 *                   example: 'Detailed error message'
 */

/**
 * @swagger
 * /user-groups/{id}:
 *   put:
 *     summary: Update a user group by ID
 *     tags: [UserGroups]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The user group ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: User group name
 *                 example: 'Admins'
 *     responses:
 *       200:
 *         description: User group updated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserGroup'
 *       400:
 *         description: Invalid request payload.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: 'Invalid input data'
 *       404:
 *         description: User group not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: 'User group not found'
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: 'Failed to update user group'
 *                 error:
 *                   type: string
 *                   example: 'Detailed error message'
 */

/**
 * @swagger
 * /user-groups/{id}:
 *   delete:
 *     summary: Delete a user group by ID
 *     tags: [UserGroups]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The user group ID
 *     responses:
 *       204:
 *         description: User group deleted successfully.
 *       404:
 *         description: User group not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: 'User group not found'
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: 'Failed to delete user group'
 *                 error:
 *                   type: string
 *                   example: 'Detailed error message'
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     UserGroup:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: User group ID
 *           example: 12345
 *         name:
 *           type: string
 *           description: User group name
 *           example: 'Admins'
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the user group was created
 *           example: '2024-01-01T00:00:00Z'
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the user group was last updated
 *           example: '2024-01-01T00:00:00Z'
 */
