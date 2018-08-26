"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = require("./router");
class ModeRouter extends router_1.Router {
    constructor(model) {
        super();
        this.model = model;
        this.pageSize = 4;
        this.basePath = `/${model.collection.name}`;
    }
    envelope(document) {
        let resource = Object.assign({ _links: {} }, document.toJson());
        resource._links.self = `${this.basePath}/${resource._id}`;
        return resource;
    }
}
exports.ModeRouter = ModeRouter;
