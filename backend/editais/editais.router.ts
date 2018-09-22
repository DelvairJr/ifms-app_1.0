import * as restify from 'restify'
import { ModelRouter } from '../common/model-router'
import { Editais } from "./editais.model"

class EditaisRouter extends ModelRouter<Editais>{
    constructor() {
        super(Editais)
    }


    applyRoutes(application: restify.Server) {
        application.get(`${this.basePath}`, this.findAll)
        application.put(`${this.basePath}/:id`, this.update)
        application.post(`${this.basePath}`, this.save)
        application.del(`${this.basePath}/:id`, this.delete)
    }
}

export const editaisRouter = new EditaisRouter()
