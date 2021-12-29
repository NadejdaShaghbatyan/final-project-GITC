const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TeacherSchema = new Schema({
    name: String,
    surname: String,
    middlename: String,
    gender: String,
    age: String,
    birthday: String,
    mobile: String,
    email: String,
});

const TeacherModel = mongoose.model('Teacher', TeacherSchema);
module.exports = TeacherModel
