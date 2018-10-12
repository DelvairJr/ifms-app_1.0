const Edital = require('./editalModel')

Edital.methods(['get', 'post', 'put', 'delete'])
Edital.updateOptions({ new: true, runValidators: true })

module.exports = Edital