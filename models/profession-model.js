
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfessionSchema = new Schema({
    profession: String,
    faculty: String,
    pay: String,
    study_year: String,
});

const ProfessiontModel = mongoose.model('Profession', ProfessionSchema);
module.exports = ProfessiontModel