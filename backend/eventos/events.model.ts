import * as mongoose from 'mongoose'

export interface Eventos extends mongoose.Document {
  nome: string,
  data: string,
  descricao: string
}

const eventosSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
        minlength: 3
    },
    data: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: false
    }
})

export const Eventos = mongoose.model<Eventos>('Event', eventosSchema)