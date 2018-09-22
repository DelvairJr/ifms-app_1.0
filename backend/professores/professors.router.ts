import { ModelRouter } from '../common/model-router'
import * as restify from 'restify'
import { Professores } from "./professors.model";

class ProfessoresRouter extends ModelRouter<Professores> {

    constructor() {
        super(Professores)

    }


    applyRoutes(application: restify.Server) {

        /*  application.get({path:`${this.basePath}`, version: '2.0.0'}, [
            authorize('admin'),
            this.findByEmail,
            this.findAll])*/
        application.get(`${this.basePath}`, this.findAll)
        //  application.get(`${this.basePath}/:id`, [authorize('admin'),this.validateId, this.findById])
        application.post(`${this.basePath}`, this.save)
        //application.put(`${this.basePath}/:id`, [authorize('admin'),  this.validateId,this.replace])
        //application.patch(`${this.basePath}/:id`, [authorize('admin'),this.validateId,this.update])
        application.del(`${this.basePath}/:id`, this.delete)

        //application.post(`${this.basePath}/authenticate`, authenticate)
    }
}

export const professoresRouter = new ProfessoresRouter()
