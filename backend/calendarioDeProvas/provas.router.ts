import * as restify from 'restify'
import { ModelRouter } from '../common/model-router'
import { Provas } from "./provas.model"

class ProvasRouter extends ModelRouter<Provas>{
    constructor() {
        super(Provas)
    }


    applyRoutes(application: restify.Server) {
        application.get(`${this.basePath}`, this.findAll)
        application.put(`${this.basePath}/:id`, this.update)
        application.post(`${this.basePath}`, this.save)
        application.del(`${this.basePath}/:id`, this.delete)
    }
}

export const provasRouter = new ProvasRouter()
