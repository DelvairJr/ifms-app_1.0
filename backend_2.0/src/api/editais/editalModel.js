const restful = require('node-restful')
const mongoose = restful.mongoose

const editalSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    arquivos: {
        type: String,

    },
    informacoes: {
        type: String,
        required: true
    }
})

module.exports = restful.model('Edital', editalSchema)