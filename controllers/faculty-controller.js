const Faculty = require('../models/faculty-model');

async function getFaculties(req, res) {
  let faculty = await Faculty.find();
  res.render('faculty/faculty-list', { faculty: faculty });
}

async function getFaculty(req, res) {
  try {
    const { id } = req.params;
    const newFaculty = await Faculty.findOne({ id });
    res.render('faculty/faculty', { faculty: newFaculty });
  } catch (error) {
    console.log(error.message);
    res.send('try again');
  }
}

async function createFacultyView(req, res) {
  res.render('faculty/faculty-create');
}

async function createFaculty(req, res) {
  const { faculty, fee, year } = req.body;
  await Faculty.create({ faculty, fee, year });
  let faculties = await Faculty.find();
  res.render('faculty/faculty-list', { faculty: faculties });
}

async function editFacultyView(req, res) {
  const { id } = req.params;
  console.log(id);
  let faculty = await Faculty.findById(id);
  console.log(faculty);
  res.render('faculty/faculty-edit', { faculty: faculty });
}

async function deleteFaculty(req, res) {
  const { id } = req.params;
  await Faculty.findByIdAndDelete(id);
  let newFaculty = await Faculty.find();
  res.render('faculty/faculty-list', { faculty: newFaculty });
}

async function editFaculty(req, res) {
  const { id, faculty, fee, year } = req.body;

  console.log(req.body)
  await Faculty.findOneAndUpdate(id, { faculty }, { new: false });
  res.redirect('faculties');
}

module.exports = {
  getFaculties,
  getFaculty,
  createFacultyView,
  createFaculty,
  editFacultyView,
  deleteFaculty,
  editFaculty,
};
