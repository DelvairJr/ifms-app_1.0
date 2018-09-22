import * as restify from 'restify'
import { ModelRouter } from '../common/model-router'
import { Regulamentos } from "./regulamentos.model"

class RegulamentosRouter extends ModelRouter<Regulamentos>{
    constructor() {
        super(Regulamentos)
    }


    applyRoutes(application: restify.Server) {
        application.get(`${this.basePath}`, this.findAll)
        application.put(`${this.basePath}/:id`, this.update)
        application.post(`${this.basePath}`, this.save)
        application.del(`${this.basePath}/:id`, this.delete)
    }
}

export const regulamentosRouter = new RegulamentosRouter()
