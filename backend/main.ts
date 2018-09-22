import { Server } from './server/server'
import { usersRouter } from './users/users.router'
import { mainRouter } from './main.router'
import { professoresRouter } from './professors/professors.router';
import { cursosRouter } from './cursos/cursos.router';
import { editaisRouter } from './editais/editais.router';

const server = new Server()
server.bootstrap([
  usersRouter,
  professoresRouter,
  cursosRouter,
  editaisRouter,
  mainRouter
]).then(server => {
  console.log('Server is listening on:', server.application.address())
}).catch(error => {
  console.log('Server failed to start')
  console.error(error)
  process.exit(1)
})
