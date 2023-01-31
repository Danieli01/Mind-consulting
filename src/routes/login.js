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


router.get('/', (req, res) => {
    res.render('login');
  });

  

  module.exports = router;