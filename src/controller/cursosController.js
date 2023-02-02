const { cursos } = require('../models/CursosModel');
const CursosModel = require('../models/CursosModel');

module.exports = {
    
    indexAdmin: (req, res) => {
        const cursos = CursosModel.cursos();
        res.render('admin',{cursos});
    }, 

    adminCursos: (req, res) => {
        const cursos = CursosModel.cursos();
        res.render('admin', {cursos});
    }, 

    addCursos: (req, res) => {
        res.render('adicionar-curso', {curso: null});
    },

    createCursos: (req, res) => {
        CursosModel.cursosCreate(req.body);
        
        return res.redirect('/admin');
    }, 


    deleteCursos: (req, res) => {
        const {id}= req.params;
        CursosModel.deleteCursos(id);
        return res.redirect('/admin');
    }, 
    
    updateCursos: (req, res) => {
        const { id } = req.params;
        let curso = null;

        if(id) {
            curso = CursosModel.findCursos(id);
        }
        return res.render('adicionar-curso', {curso})
    },

    update: (req, res) => {
        const {id} = req.params;

        CursosModel.updateCursos(id, req.body);
        return res.redirect('/admin');
    }
}