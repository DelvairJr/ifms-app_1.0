const Prova = require('./provasModel')

Prova.methods(['get', 'post', 'put', 'delete'])
Prova.updateOptions({new: true, runValidators: true})

module.exports = Prova