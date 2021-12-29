const Teacher = require('../models/teacher-model');

async function getTeachers(req, res) {
  let teacher = await Teacher.find();
  res.render('teacher/teacher-list', { teacher: teacher });
}

async function getTeacher(req, res) {
  const { id } = req.params;
  let newTeacher = await Teacher.findOne({ _id: id });
  res.render('teacher/teacher', { teacher: newTeacher });
}

async function createTeacherView(req, res) {
  res.render('teacher/teacher-create');
}

async function createTeacher(req, res) {
  const { name, surname, middlename, gende, age, birthday, mobile, email } = req.body;
  await Teacher.create({ name, surname, middlename, gende, age, birthday, mobile, email });
  let teachers = await Teacher.find();
  res.render('teacher/teacher-list', { teacher: teachers });
}

async function editTeacherView(req, res) {
  const { id } = req.params;
  let teacher = await Teacher.findOne({ _id: id });
  res.render('teacher/teacher-edit', { teacher: teacher });
}

async function editTeacher(req, res) {
  const { name, surname, middlename, gende, age, birthday, mobile, email } = req.body;
  await Teacher.findOneAndUpdate(id, { name, surname, middlename, gende, age, birthday, mobile, email });
  const teachers = await Teacher.find();
  res.render('teacher/teacher-list', { teacher: teachers })
}

module.exports = {
  getTeachers,
  getTeacher,
  createTeacher,
  createTeacherView,
  editTeacherView,
  editTeacher,
};
