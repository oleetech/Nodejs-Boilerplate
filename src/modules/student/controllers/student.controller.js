const studentService = require('../services/student.service');

/**
 * @function createStudent
 * @description Creates a new student.
 * @param {object} req - Request object.
 * @param {object} res - Response object.
 */
const createStudent = async (req, res) => {
    try {
        const student = await studentService.createStudent(req.body);
        res.status(201).json(student);
    } catch (error) {
        res.status(500).json({ message: 'Failed to create student', error: error.message });
    }
};

/**
 * @function getStudentById
 * @description Retrieves a student by ID.
 * @param {object} req - Request object.
 * @param {object} res - Response object.
 */
const getStudentById = async (req, res) => {
    try {
        const student = await studentService.findStudentById(req.params.id);
        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }
        res.status(200).json(student);
    } catch (error) {
        res.status(500).json({ message: 'Failed to retrieve student', error: error.message });
    }
};

/**
 * @function updateStudent
 * @description Updates a student by ID.
 * @param {object} req - Request object.
 * @param {object} res - Response object.
 */
const updateStudent = async (req, res) => {
    try {
        const student = await studentService.updateStudent(req.params.id, req.body);
        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }
        res.status(200).json(student);
    } catch (error) {
        res.status(500).json({ message: 'Failed to update student', error: error.message });
    }
};

/**
 * @function deleteStudent
 * @description Deletes a student by ID.
 * @param {object} req - Request object.
 * @param {object} res - Response object.
 */
const deleteStudent = async (req, res) => {
    try {
        const result = await studentService.deleteStudent(req.params.id);
        if (result === 0) {
            return res.status(404).json({ message: 'Student not found' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete student', error: error.message });
    }
};

/**
 * @function getAllStudents
 * @description Controller function to handle the request for retrieving all students.
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 * @returns {Promise<void>}
 */
const getAllStudents = async (req, res) => {
    try {
        const students = await studentService.getAllStudents();
        if (!students) {
            return res.status(404).json({ message: 'No students found' });
        }
        res.status(200).json(students);
    } catch (error) {
        console.error('Error details:', error); // Log error details
        res.status(500).json({ 
            message: 'Internal server error',
            error: error.message || 'An unexpected error occurred' // Include error message
        });
    }
};


module.exports = {
    createStudent,
    getStudentById,
    updateStudent,
    deleteStudent,
    getAllStudents,
};
