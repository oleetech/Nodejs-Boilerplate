const { AppDataSource } = require('../../../index'); // Ensure the path is correct
const Student = require('../entities/student.entity');


/**
 * @function formatStudentResponse
 * @description Formats the student data to ensure consistent field names across all responses.
 * @param {object} student - The student object to format.
 * @returns {object} - The formatted student object.
 */
const formatStudentResponse = (student) => {
    if (!student) return null;

    return {
        id: student.id,
        name: student.name,
        age: student.age,
        grade: student.grade,
        createdAt: student.createdAt,
        updatedAt: student.updatedAt
    };
};


const createStudent = async (data) => {
    const entityManager = AppDataSource.getRepository(Student);
    const student = entityManager.create(data);
    const savedStudent = await entityManager.save(student);
    return formatStudentResponse(savedStudent); // Format the response
};

const findStudentById = async (id) => {
    const entityManager = AppDataSource.getRepository(Student);
    const student = await entityManager.findOneBy({ id });
    return formatStudentResponse(student); // Format the response
};

const updateStudent = async (id, data) => {
    const entityManager = AppDataSource.getRepository(Student);
    const student = await findStudentById(id);
    if (!student) return null;

    Object.assign(student, data);
    const updatedStudent = await entityManager.save(student);
    return formatStudentResponse(updatedStudent); // Format the response
};

const deleteStudent = async (id) => {
    const entityManager = AppDataSource.getRepository(Student);
    const result = await entityManager.delete(id);
    return result.affected;
};

const getAllStudents = async () => {
    const entityManager = AppDataSource.getRepository(Student);
    const students = await entityManager.find();
    return students.map(formatStudentResponse); // Format each student in the array
};


// Exporting the service functions to be used in controllers
module.exports = {
    createStudent,
    findStudentById,
    updateStudent,
    deleteStudent,
    getAllStudents,
};
