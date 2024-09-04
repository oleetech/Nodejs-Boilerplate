const express = require('express');
const router = express.Router();
const studentController = require('../controllers/student.controller');

// Define routes with corresponding controller methods
router.get('/students', studentController.getAllStudents);
router.post('/students', studentController.createStudent); // Create a new student
router.get('/students/:id', studentController.getStudentById); // Get student by ID
router.put('/students/:id', studentController.updateStudent); // Update student by ID
router.delete('/students/:id', studentController.deleteStudent); // Delete student by ID

module.exports = router;
