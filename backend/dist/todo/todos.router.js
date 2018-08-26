"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = require("../common/router");
const todo_model_1 = require("./todo.model");
class TodoRouter extends router_1.Router {
    applyRoutes(application) {
        //Buscar todos
        application.get('/todos', (req, resp, next) => {
            todo_model_1.Todo.find().then(this.render(resp, next));
        });
        //Buscar por id
        application.get('/todos/:id', (req, resp, next) => {
            todo_model_1.Todo.findById(req.params.id).then(todos => {
                if (todos) {
                    resp.json(todos);
                    return next();
                }
                resp.status(404);
                return next();
            });
        });
        application.post('/todos', (req, resp, next) => {
            let todo = new todo_model_1.Todo(req.body);
            todo.save().then(this.render(resp, next));
        });
        //alterar
        application.put('/todos/:id', (req, resp, next) => {
            const options = { overwrite: true };
            todo_model_1.Todo.update({ _id: req.params.id }, req.body, options)
                .exec().then(result => {
                if (result.n) {
                    return todo_model_1.Todo.find();
                }
                else {
                    resp.send(404);
                }
            }).then(this.render(resp, next));
        });
        //delete
        application.del('/todos/:id', (req, resp, next) => {
            todo_model_1.Todo.remove({ _id: req.params.id }).exec().then((cmdResult) => {
                if (cmdResult.result.n) {
                    resp.send(204);
                }
                else {
                    resp.send(404);
                }
                return next();
            });
        });
    }
}
exports.todoRouter = new TodoRouter(); //exporta uma constante com uma instacia da classe
