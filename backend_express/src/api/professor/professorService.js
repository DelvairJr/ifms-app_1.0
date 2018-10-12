const Professor = require('./professorModel')

Professor.methods(['get', 'post', 'put', 'delete'])
Professor.updateOptions({ new: true, runValidators: true })

module.exports = Professor