const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const path = require('path');
const cursosList = path.join(__dirname, '../database/cursos.json')

module.exports = {
    cursos: function () {
        return JSON.parse(fs.readFileSync(cursosList));
    }, 

    saveCursos: function (cursos) {
      fs.writeFileSync(cursosList, JSON.stringify(cursos, null, 4));
    },

    cursosCreate: function ({nome,professorResponsavel,categoria,descricao,imagem}) {
        if (!nome || !professorResponsavel, !categoria || !descricao || !imagem )
         return 

        const curso = this.cursos();

        curso.push({id: uuidv4(), nome, professorResponsavel, categoria, descricao, imagem});
        this.saveCursos(curso);
    }, 

    findCursos: function (id) {
        return this.cursos().find(curso => curso.id == id);
      }, 
  
      deleteCursos: function (id) {
        if(!id) return
  
        const curso = this.cursos();
        const newCurso = curso.filter(cursos => cursos.id != id);
  
        this.saveCursos(newCurso);
  
      }, 
  
      updateCursos: function (id, {nome, professorResponsavel,categoria, descricao, imagem}) {
        if(!id) return 
  
        if (!nome || !professorResponsavel, !categoria || !descricao || !imagem) return
  
        const cursos = this.cursos();
        const newcurso = cursos.find(curso => curso.id == id);
  
        newcurso.nome = nome;
        newcurso.professorResponsavel = professorResponsavel;
        newcurso.categoria = categoria;
        newcurso.descricao = descricao;
        newcurso.imagem = imagem;
        
  
        this.saveCursos(cursos);
      }

}
