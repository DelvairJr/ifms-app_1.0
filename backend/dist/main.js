"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server/server");
const users_router_1 = require("./users/users.router");
const main_router_1 = require("./main.router");
const professors_router_1 = require("./professores/professors.router");
const cursos_router_1 = require("./cursos/cursos.router");
const editais_router_1 = require("./editais/editais.router");
const provas_router_1 = require("./calendarioDeProvas/provas.router");
const hrPermanencia_router_1 = require("./horarioDePermanencia/hrPermanencia.router");
const regulamentos_router_1 = require("./regulamentos/regulamentos.router");
const eventos_router_1 = require("./eventos/eventos.router");
const server = new server_1.Server();
server.bootstrap([
    users_router_1.usersRouter,
    professors_router_1.professoresRouter,
    cursos_router_1.cursosRouter,
    editais_router_1.editaisRouter,
    provas_router_1.provasRouter,
    hrPermanencia_router_1.hrPermanenciasRouter,
    regulamentos_router_1.regulamentosRouter,
    eventos_router_1.eventosRouter,
    main_router_1.mainRouter
]).then(server => {
    console.log('Server is listening on:', server.application.address());
}).catch(error => {
    console.log('Server failed to start');
    console.error(error);
    process.exit(1);
});
