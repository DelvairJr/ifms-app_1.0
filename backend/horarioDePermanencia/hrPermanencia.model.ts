import * as mongoose from 'mongoose'

export interface HrPermanencia extends mongoose.Document {
    dia_semana: string,
    hrs_inicio: string,
    hrs_final: string,
    local: string,
    professor: string
}

const hrPermanenciaSchema = new mongoose.Schema({
    dia_semana: {
        type: String,
        required: true
    },
    hrs_inicio: {
        type: String,
        required: true
    },
    hrs_final: {
        type: String,
        required: true
    },
    local: {
        type: String,
        required: true
    },
    professor: {
        //type: mongoose.Schema.Types.ObjectId,
        //ref: 'Professor',
        type: String,
        required: true,
    },
})


export const HrPermanencia = mongoose.model<HrPermanencia>('Permanence', hrPermanenciaSchema)