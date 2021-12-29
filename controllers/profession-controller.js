const Profession = require('../models/profession-model.js');

async function getProfessions(req, res) {
  const profession = await Profession.find();
  res.render('profession/profession-list', { profession: profession });
}

async function getProfession(req, res) {
  const { id } = req.params;
  const profession = await Profession.findOne({ id });
  res.render('profession/profession', { profession: profession });
}

async function createProfessionView(req, res) {
  res.render('profession/profession-create');
}

async function editProfessionView(req, res) {
  const { id } = req.params;
  let profession = await Profession.find({ id });
  res.render('profession/profession-edit', { profession: profession });
}

async function createProfession(req, res) {
  const { profession, faculty, pay, study_year } = req.body;
  await Profession.create({ profession, faculty, pay, study_year });
  let professions = await Profession.find();
  res.render('profession/profession-list', { profession: professions });
}



async function editProfession(req, res) {
  const { id, profession, faculty, pay, study_year } = req.body;
  await Profession.findOneAndUpdate(id, { profession, faculty, pay, study_year });
  const professions = await Profession.find();
  res.render('profession/profession-list', { profession: professions });
}
async function deleteProfession(req, res) {
  const { id } = req.params;
  await Profession.deleteOne({ id });
  let newProfession = await Profession.find();
  res.render('profession/profession-list', { profession: newProfession });
}
module.exports = {
  getProfessions,
  getProfession,
  createProfessionView,
  createProfession,
  editProfessionView,
  editProfession,
  deleteProfession,
};
