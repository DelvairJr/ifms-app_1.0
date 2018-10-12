import * as mongoose from 'mongoose'

export interface Cursos extends mongoose.Document {
  nome: string,
  abreviado: string,
  disciplinas: string[]
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
    },
    disciplinas:{
        type: [String],
        required: true
    }
})

export const Cursos = mongoose.model<Cursos>('Cursos', cursoSchema)