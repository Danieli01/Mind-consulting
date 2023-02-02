const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const cursosController = require('../controller/cursosController');

const cursosPath = path.resolve(__dirname, '../database/cursos.json');

const getCursos = () => {
  return JSON.parse(fs.readFileSync(cursosPath));
}

function saveCursos (cursos) {
  fs.writeFileSync(livrosPath, JSON.stringify(cursos, null, 4));
}

router.get('/', cursosController.indexAdmin);
router.get('/adicionar-curso', cursosController.addCursos);

router.get('/admin', cursosController.addCursos);
router.post('/create', cursosController.createCursos);


router.delete('/delete/:id', cursosController.deleteCursos);

router.get('/update/:id', cursosController.updateCursos);
router.put('/update/:id', cursosController.update)


  module.exports = router;