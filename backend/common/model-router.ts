import * as mongoose from 'mongoose'

import { Router } from './router'
import { NotFoundError } from 'restify-errors'

export abstract class ModeRouter<D extends mongoose.Document> extends Router {
    basePath: string
    pageSize: number = 4

    constructor(protected model: mongoose.Model<D>) {
        super()
        this.basePath = `/${model.collection.name}`
    }

    envelope(document: any): any {
        let resource = Object.assign({ _links: {} }, document.toJson())
        resource._links.self = `${this.basePath}/${resource._id}`
        return resource
    }
}
