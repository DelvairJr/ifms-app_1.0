const express = require('express')

module.exports = function (server) {
    //URL base
    const router = express.Router()
    server.use('/api', router)

    //Rota de usuario
    const Usuario = require('../api/usuario/usuarioService')
    Usuario.register(router, '/admin')

    //Rota de professor
    const Professor = require('../api/professor/professorService')
    Professor.register(router, '/professores')

    //Rota eventos
    const Evento = require('../api/evento/eventoService')
    Evento.register(router, '/eventos')

    //Rota provas
    const Prova = require('../api/calendarioProva/provasService')
    Prova.register(router, '/provas')

    //Rota horario de permanência
    const Permanencia = require('../api/horarioPermanencia/permanenciaService')
    Permanencia.register(router, '/horario-permanencia')

    //Rota Contatos
    const Contatos = require('../api/contato/contatosService')
    Contatos.register(router, '/contatos')

    //Rota Cursos
    const Cursos = require('../api/cursos/cursoService')
    Cursos.register(router, '/cursos')

    //Rota editais
    const Edital = require('../api/editais/editalService')
    Edital.register(router, '/editais')

    //Rota regulamento
    const Regulamento = require('../api/regulamentos/regulamentoService')
    Regulamento.register(router, 'regulamentos')

}