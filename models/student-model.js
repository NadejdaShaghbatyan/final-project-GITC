const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    name: String,
    surname: String,
    middlename: String,
    gender: String,
    age: String,
    birthday: String,
    mobile: String,
    email: String,
});

const StudentModel = mongoose.model('Student', StudentSchema);
module.exports = StudentModel