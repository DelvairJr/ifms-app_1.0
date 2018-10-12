import { Router } from './common/router'
import * as restify from 'restify'

class MainRouter extends Router {
  applyRoutes(application: restify.Server) {
    application.get('/', (req, resp, next) => {
      resp.json({
        users: '/users',
        restaurants: '/restaurants',
        reviews: '/reviews',
        cursos: '/cursos',
        notices: '/notices',
        teachers: '/teachers',
        tests: '/tests',
        hrPermanencia: '/permanences',
        regulations: '/regulations',
        events: '/events'
      })
    })
  }
}

export const mainRouter = new MainRouter()
//C:\code\tads\trabalho_conclusão\ifms-app_1.0\backend\main.ts