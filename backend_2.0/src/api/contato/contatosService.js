const Contato = require('./contatosModel')

Contato.methods(['get', 'post', 'put', 'delete'])
Contato.updateOptions({ new: true, runValidators: true })

module.exports = Contato