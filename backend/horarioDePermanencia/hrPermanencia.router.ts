import * as restify from 'restify'
import * as mongoose from 'mongoose'
import { ModelRouter } from '../common/model-router'
import { HrPermanencia } from "./hrPermanencia.model";

class HrPermaneciaRouter extends ModelRouter<HrPermanencia>{
    constructor() {
        super(HrPermanencia)
    }

    protected prepareOne(query: mongoose.DocumentQuery<HrPermanencia, HrPermanencia>): mongoose.DocumentQuery<HrPermanencia, HrPermanencia> {
        return query.populate('professor', 'name')
    }

    envelope(document) {
        let resource = super.envelope(document)
        const teacherId = document.teacher._id ? document.teacher._id : document.teacher
        resource._links.teacher = `/teachers/${teacherId}`
        return resource
    }

    applyRoutes(application: restify.Server) {
        application.get(`${this.basePath}`, this.findAll)
        application.put(`${this.basePath}/:id`, this.update)
        application.post(`${this.basePath}`, this.save)
        application.del(`${this.basePath}/:id`, this.delete)
    }
}

export const hrPermanenciasRouter = new HrPermaneciaRouter()
