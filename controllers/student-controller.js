//const student = require("../models/student-personal.json");
const Student = require('../models/student-model');

async function getStudents(req, res) {
  let student = await Student.find();
  res.render('student/student-list', { student: student });
}

async function getStudent(req, res) {
  const { id } = req.params;
  try {
    let newStudent = await Student.findOne({ _id: id });
    if (newStudent) {
      res.render('student/student', { student: newStudent });
    } else {
      res.send('student does not exsists');
    }
  } catch (error) {
    console.log('err is: ' + error.message);
  }
}

//Get request
async function createStudentView(req, res) {
  res.render('student/student-create');
}

async function createStudent(req, res) {
  const { name, surname, middlename, gender, birthday, mobile, email } = req.body;
  await Student.create({ name, surname, middlename, gender, birthday, mobile, email });
  let students = await Student.find();
  res.render('student/student-list', { student: students });
}

async function editStudentView(req, res) {
  const { id } = req.params;
  let student = await Student.findOne({ _id: id });
  res.render('student/student-edit', { student: student });
}

async function editStudent(req, res) {
  const { name, surname, middlename, gender, birthday, mobile, email } = req.body;
  await Student.findOneAndUpdate(id, { name, surname, middlename, gender, birthday, mobile, email });
  const students = await Student.find();
  res.render('student/student-list', { student: students });
}

async function deleteStudent(req, res) {
  const { id } = req.params;
  await Student.deleteOne({ _id: id });
  let newStudent = await Student.find();
  res.render('student/student-list', { student: newStudent });
}

module.exports = {
  getStudents,
  getStudent,
  createStudent,
  createStudentView,
  editStudentView,
  editStudent,
  deleteStudent,
};
