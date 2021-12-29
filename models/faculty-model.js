const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FacultySchema = new Schema({
  faculty: String,
  fee: String,
  year: String,
});

const FacultyModel = mongoose.model('Faculty', FacultySchema);
module.exports = FacultyModel;
