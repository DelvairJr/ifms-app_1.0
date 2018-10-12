import { ModelRouter } from '../common/model-router'
import * as restify from 'restify'
import { Professores } from "./professors.model";

class ProfessoresRouter extends ModelRouter<Professores> {

    constructor() {
        super(Professores)

    }

    applyRoutes(application: restify.Server) {

        application.get(`${this.basePath}`, this.findAll)
        application.put(`${this.basePath}/:id`, this.update)
        application.post(`${this.basePath}`, this.save)
        application.del(`${this.basePath}/:id`, this.delete)
    }
}

export const professoresRouter = new ProfessoresRouter()
