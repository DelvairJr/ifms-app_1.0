import * as mongoose from 'mongoose'

export interface Cursos extends mongoose.Document {
  nome: string,
  abreviado: string
}

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

export const Cursos = mongoose.model<Cursos>('Cursos', cursoSchema)