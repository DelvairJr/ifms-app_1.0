const express = require('express')
const auth = require('./auth')

module.exports = function (server) {
    /*
     * Rotas protegidas por Token JWT 
     */
    //defini a rota a partir da função Router do Express
    const protectedApi = express.Router()
    //aplica a rota ao servidor que possui a rota /api
    server.use('/api', protectedApi)
    //Aplica o filtro de autenticação
    protectedApi.use(auth)

    //Rota de professor
    const Professor = require('../api/professor/professorService')
    Professor.register(protectedApi, '/teachers')

    /*
    * Rotas abertas
    */
    const openApi = express.Router()
    server.use('/oapi', openApi)

    const AuthService = require('../api/user/authService')
    openApi.post('/login', AuthService.login)
    openApi.post('/signup', AuthService.signup)
    openApi.post('/validateToken', AuthService.validateToken)
}