import * as restify from 'restify'
import { ModelRouter } from '../common/model-router'
import { Eventos } from './events.model'

class EventosRouter extends ModelRouter<Eventos>{
    constructor() {
        super(Eventos)
    }


    applyRoutes(application: restify.Server) {
        application.get(`${this.basePath}`, this.findAll)
        application.put(`${this.basePath}/:id`, this.update)
        application.post(`${this.basePath}`, this.save)
        application.del(`${this.basePath}/:id`, this.delete)
    }
}

export const eventosRouter = new EventosRouter()
