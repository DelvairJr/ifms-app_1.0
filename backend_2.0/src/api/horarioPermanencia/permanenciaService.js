const Permanencia = require('./permanenciaModel')

Permanencia.methods(['get', 'post', 'put', 'delete'])
Permanencia.updateOptions({new: true, runValidators: true})

module.exports = Permanencia