import * as mongoose from 'mongoose'

import { Professores } from "./../professores/professors.model"

export interface HrPermanencia extends mongoose.Document {
    dia_semana: string,
    hrs_inicio: string,
    hrs_final: string,
    local: string,
    //professor: mongoose.Types.ObjectId | Professores
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
        type: String,

        //ref: 'Professores',
        required: true
        //  type: mongoose.Schema.Types.ObjectId,
        //required: true,
    },
})


export const HrPermanencia = mongoose.model<HrPermanencia>('Permanence', hrPermanenciaSchema)