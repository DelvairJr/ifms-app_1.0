const restful = require('node-restful')
const mongoose = restful.mongoose

const regulamentoSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    caminho: {
        type: String,

    },
    mais_informacoes: {
        type: String,
        required: true
    }
})

module.exports = restful.model('Regulation', regulamentoSchema)