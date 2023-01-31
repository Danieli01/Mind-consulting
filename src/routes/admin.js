const express = require('express');
const router = express.Router();

const cursosController = require('../controller/cursosController');

router.get('/', cursosController.indexAdmin);
router.get('/adicionar-curso', cursosController.addCursos);

router.get('/admin', cursosController.addCursos);
router.post('/create', cursosController.createCursos);


router.delete('/delete/:id', cursosController.deleteCursos);

router.get('/update/:id', cursosController.updateCursos);
router.put('/update/:id', cursosController.update)


  module.exports = router;