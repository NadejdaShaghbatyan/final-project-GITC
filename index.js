require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

const studentRouter = require('./routers/student-router');
const professionRouter = require('./routers/profession-router');
const facultyRouter = require('./routers/faculty-router');
const teachersRouter = require('./routers/teacher-router');

app.use(bodyParser.json());

const port = process.env.port;

const mongoDb = require('./libs/db');
mongoDb.connect();

//Middlewares
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname + '/views'));

app.use(express.urlencoded({ extended: true }));

app.use('/students', studentRouter);
app.use('/professions', professionRouter);
app.use('/faculties', facultyRouter);
app.use('/teachers', teachersRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
