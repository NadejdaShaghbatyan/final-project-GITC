const express = require('express');
const router = express.Router();

const {
  getFaculty,
  getFaculties,
  createFacultyView,
  createFaculty,
  editFacultyView,
  deleteFaculty,
  editFaculty,
} = require('../controllers/faculty-controller');

router.get('/create', createFacultyView);
router.get('/', getFaculties);
router.get('/:id', getFaculty);
router.get('/edit/:id', editFacultyView);
router.post('/', createFaculty);
router.post('/edit', editFaculty);
router.get('/delete/:id', deleteFaculty);

module.exports = router;
