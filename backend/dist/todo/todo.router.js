"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_router_1 = require("../common/model-router");
const todo_model_1 = require("./todo.model");
class TodosRouter extends model_router_1.ModelRouter {
    constructor() {
        super(todo_model_1.Todo);
    }
    /*findById = (req, resp, next)=>{
      this.model.findById(req.params.id)
          .populate('user', 'name')
          .populate('restaurant', 'name')
          .then(this.render(resp, next))
          .catch(next)
    }*/
    applyRoutes(application) {
        application.get(`${this.basePath}`, this.findAll);
        application.get(`${this.basePath}/:id`, this.findById);
        application.post(`${this.basePath}`, this.save);
    }
}
exports.todosRouter = new TodosRouter();
