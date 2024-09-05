/**
 * @swagger
 * tags:
 *   name: UserUserGroups
 *   description: API for managing user-user groups
 */

/**
 * @swagger
 * /user-user-groups:
 *   get:
 *     summary: Get all user-user groups
 *     tags: [UserUserGroups]
 *     responses:
 *       200:
 *         description: List of user-user groups
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   userId:
 *                     type: integer
 *                     description: The ID of the user.
 *                   usergroupId:
 *                     type: integer
 *                     description: The ID of the user group.
 */

/**
 * @swagger
 * /user-user-groups/{userId}/{usergroupId}:
 *   get:
 *     summary: Get a user-user group by userId and usergroupId
 *     tags: [UserUserGroups]
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: integer
 *         required: true
 *         description: The ID of the user.
 *       - in: path
 *         name: usergroupId
 *         schema:
 *           type: integer
 *         required: true
 *         description: The ID of the user group.
 *     responses:
 *       200:
 *         description: User-user group details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 userId:
 *                   type: integer
 *                 usergroupId:
 *                   type: integer
 *       404:
 *         description: User-user group not found
 */

/**
 * @swagger
 * /user-user-groups:
 *   post:
 *     summary: Create a new user-user group
 *     tags: [UserUserGroups]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: integer
 *               usergroupId:
 *                 type: integer
 *     responses:
 *       201:
 *         description: User-user group created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 userId:
 *                   type: integer
 *                 usergroupId:
 *                   type: integer
 *       500:
 *         description: Error creating user-user group
 */

/**
 * @swagger
 * /user-user-groups/{userId}/{usergroupId}:
 *   put:
 *     summary: Update an existing user-user group
 *     tags: [UserUserGroups]
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: integer
 *         required: true
 *         description: The ID of the user.
 *       - in: path
 *         name: usergroupId
 *         schema:
 *           type: integer
 *         required: true
 *         description: The ID of the user group.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: integer
 *               usergroupId:
 *                 type: integer
 *     responses:
 *       200:
 *         description: User-user group updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 userId:
 *                   type: integer
 *                 usergroupId:
 *                   type: integer
 *       404:
 *         description: User-user group not found
 *       500:
 *         description: Error updating user-user group
 */

/**
 * @swagger
 * /user-user-groups/{userId}/{usergroupId}:
 *   delete:
 *     summary: Delete a user-user group
 *     tags: [UserUserGroups]
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: integer
 *         required: true
 *         description: The ID of the user.
 *       - in: path
 *         name: usergroupId
 *         schema:
 *           type: integer
 *         required: true
 *         description: The ID of the user group.
 *     responses:
 *       200:
 *         description: User-user group deleted successfully
 *       404:
 *         description: User-user group not found
 *       500:
 *         description: Error deleting user-user group
 */
