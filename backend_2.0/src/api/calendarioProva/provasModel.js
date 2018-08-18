const restful = require('node-restful')
const mongoose = restful.mongoose

const provasSchema = new mongoose.Schema({
    curso: {
        type: String,
        required: true,
        minlength: 3
    },
    semestre:{
        type: String,
        required: true
    },
    data: {
        type: Date,
        required: true
    },
    disciplina: {
        type: String,
        required: true
    }
})

module.exports = restful.model('Prova', provasSchema)