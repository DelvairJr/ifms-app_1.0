const Curso = require('./cursosModel')

Curso.methods(['get', 'post', 'put', 'delete'])
Curso.updateOptions({new: true, runValidators: true})

module.exports = Curso