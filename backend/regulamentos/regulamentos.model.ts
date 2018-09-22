import * as mongoose from 'mongoose'

export interface Regulamentos extends mongoose.Document {
    titulo: string,
    caminho: string,
    mais_informacoes: string
}

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

export const Regulamentos = mongoose.model<Regulamentos>('Horario_permanencia', regulamentoSchema)