import * as restify from 'restify'

import { Router } from "../common/router"
import { Todo } from './todo.model'

class TodoRouter extends Router {
 

    applyRoutes(application: restify.Server) {
        //Buscar todos
        application.get('/todos', (req, resp, next) => {

            Todo.find().then(this.render(resp, next))
        })
        //Buscar por id
        application.get('/todos/:id', (req, resp, next) => {

            Todo.findById(req.params.id).then(todos => {
                if (todos) {
                    resp.json(todos)
                    return next()
                }
                resp.status(404)
                return next()
            })
        })

        application.post('/todos', (req, resp, next) => {
            let todo = new Todo(req.body)
            todo.save().then(this.render(resp, next))
        })
        //alterar
        application.put('/todos/:id', (req, resp, next) => {
            const options = { overwrite: true }
            Todo.update({ _id: req.params.id }, req.body, options)
                .exec().then(result => {
                    if (result.n) {
                        return Todo.find()
                    } else {
                        resp.send(404)
                    }
                }).then(this.render(resp, next))
        })
        //delete
        application.del('/todos/:id', (req, resp, next)=>{
            Todo.remove({_id:req.params.id}).exec().then((cmdResult: any)=>{
              if(cmdResult.result.n){
                resp.send(204)
              }else{
                resp.send(404)
              }
              return next()
            })
          })


    }
}

export const todoRouter = new TodoRouter() //exporta uma constante com uma instacia da classe