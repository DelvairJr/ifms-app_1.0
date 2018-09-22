import * as mongoose from 'mongoose'

export interface Provas extends mongoose.Document {
    curso: string,
    semestre: string,
    dataProva: string,
    disciplina: string
}

const provasSchema = new mongoose.Schema({
    curso: {
        type: String,
        required: true,
        minlength: 3
    },
    semestre: {
        type: String,
        required: true
    },
    dataProva: {
        type: String,
        required: true
    },
    disciplina: {
        type: String,
        required: true
    }
})


export const Provas = mongoose.model<Provas>('Test', provasSchema)