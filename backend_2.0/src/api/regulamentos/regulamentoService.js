const Regulamento = require('./regulamentoModel')

Regulamento.methods(['get', 'post', 'put', 'delete'])
Regulamento.updateOptions({ new: true, runValidators: true })

module.exports = Regulamento