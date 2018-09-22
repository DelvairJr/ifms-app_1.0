import * as mongoose from 'mongoose'

export interface Editais extends mongoose.Document {
  titulo: string,
  arquivos: string[],
  informacoes: string
}

const editalSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    arquivos: {
        type: [String],
        required: true

    },
    informacoes: {
        type: String,
        required: true
    }
})

export const Editais = mongoose.model<Editais>('Notice', editalSchema)