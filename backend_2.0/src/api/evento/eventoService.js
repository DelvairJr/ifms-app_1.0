const Evento = require('./eventoModel')

Evento.methods(['get', 'post', 'put', 'delete'])
Evento.updateOptions({new: true, runValidators: true})

module.exports = Evento