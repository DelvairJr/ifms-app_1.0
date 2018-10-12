import * as restify from 'restify'
import { ModelRouter } from '../common/model-router'
import { Cursos } from "./cursos.model";

class CursosRouter extends ModelRouter<Cursos>{
    constructor() {
        super(Cursos)
    }

    applyRoutes(application: restify.Server) {
        application.get(`${this.basePath}`, this.findAll)
        application.put(`${this.basePath}/:id`, this.update)
        application.post(`${this.basePath}`, this.save)
        application.del(`${this.basePath}/:id`, this.delete)
    }
}

export const cursosRouter = new CursosRouter()
