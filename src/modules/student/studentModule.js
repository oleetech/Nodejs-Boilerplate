const studentRoutes = require('./routes/student.routes');
const studentService = require('./services/student.service');
const studentController = require('./controllers/student.controller');

// Exporting the components of the Student module
module.exports = {
  studentRoutes,
  studentService,
  studentController,
};
