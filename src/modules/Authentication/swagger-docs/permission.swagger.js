// swagger/permission.swagger.js

/**
 * @swagger
 * tags:
 *   name: Permissions
 *   description: API for managing permissions
 */

/**
 * @swagger
 * /permissions:
 *   get:
 *     summary: Get all permissions
 *     tags: [Permissions]
 *     responses:
 *       200:
 *         description: A list of permissions
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   name:
 *                     type: string
 *                     example: 'read'
 *                   model:
 *                     type: string
 *                     example: 'User'
 *                   action:
 *                     type: string
 *                     example: 'view'
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                     example: '2024-09-05T12:34:56Z'
 *                   updatedAt:
 *                     type: string
 *                     format: date-time
 *                     example: '2024-09-05T12:34:56Z'
 *   post:
 *     summary: Create a new permission
 *     tags: [Permissions]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: 'write'
 *               model:
 *                 type: string
 *                 example: 'User'
 *               action:
 *                 type: string
 *                 example: 'edit'
 *     responses:
 *       201:
 *         description: Permission created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 2
 *                 name:
 *                   type: string
 *                   example: 'write'
 *                 model:
 *                   type: string
 *                   example: 'User'
 *                 action:
 *                   type: string
 *                   example: 'edit'
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   example: '2024-09-05T12:34:56Z'
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *                   example: '2024-09-05T12:34:56Z'
 */

/**
 * @swagger
 * /permissions/{id}:
 *   get:
 *     summary: Get permission by ID
 *     tags: [Permissions]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the permission
 *     responses:
 *       200:
 *         description: A single permission
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 name:
 *                   type: string
 *                   example: 'read'
 *                 model:
 *                   type: string
 *                   example: 'User'
 *                 action:
 *                   type: string
 *                   example: 'view'
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   example: '2024-09-05T12:34:56Z'
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *                   example: '2024-09-05T12:34:56Z'
 *       404:
 *         description: Permission not found
 *   put:
 *     summary: Update a permission by ID
 *     tags: [Permissions]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the permission
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: 'write'
 *               model:
 *                 type: string
 *                 example: 'User'
 *               action:
 *                 type: string
 *                 example: 'edit'
 *     responses:
 *       200:
 *         description: Permission updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 name:
 *                   type: string
 *                   example: 'write'
 *                 model:
 *                   type: string
 *                   example: 'User'
 *                 action:
 *                   type: string
 *                   example: 'edit'
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   example: '2024-09-05T12:34:56Z'
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *                   example: '2024-09-05T12:34:56Z'
 *       404:
 *         description: Permission not found
 *   delete:
 *     summary: Delete a permission by ID
 *     tags: [Permissions]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the permission
 *     responses:
 *       204:
 *         description: Permission deleted successfully
 *       404:
 *         description: Permission not found
 */
