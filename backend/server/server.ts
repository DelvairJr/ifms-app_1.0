import * as restify from 'restify'
import * as mongoose from 'mongoose'

import { environment } from "../common/environment"
import { Router } from "../common/router"
import { cors } from './cors'
import { handleError } from "./error.handler";

export class Server {

    application: restify.Server

    initializeDb(): mongoose.MongooseThenable {
        (<any>mongoose).Promise = global.Promise
        return mongoose.connect(environment.db.url, {
            useMongoClient: true
        })
    }

    initRoutes(routers: Router[]): Promise<any> {
        return new Promise((resolve, reject) => {
            try {

                this.application = restify.createServer({
                    name: 'ifms-api',
                    version: '1.0.0'
                })

                this.application.use(restify.plugins.queryParser())
                this.application.use(restify.plugins.bodyParser())
                this.application.use(cors)

                //routes
                for (let router of routers) {
                    router.applyRoutes(this.application)
                }

                this.application.listen(environment.server.port, () => { //notifica que a porta esta disponivel
                    resolve(this.application)
                })

                this.application.on('restifyError', handleError)

            } catch (error) {
                reject(error)
            }
        })
    }

    bootstrap(routers: Router[] = []): Promise<Server> { //realiza o startup do servidor
        return this.initializeDb().then(() =>
            this.initRoutes(routers).then(() => this))
    }
}