const restful = require('node-restful')
const mongoose = restful.mongoose

const cursoSchema = new mongoose.Schema({
    nome:{
        type: String,
        required: true,
        maxlength: 100,
        minlength: 5
    },
    abreviado:{
        type: String,
        required: false,
        maxlength: 20
    }
})

module.exports = restful.model('Curso', cursoSchema)