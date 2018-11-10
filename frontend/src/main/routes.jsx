import React from 'react'
import { Router, Route, Redirect, hashHistory, IndexRoute } from 'react-router'

import Dashboard from '../dashboard/dashboard'
import Professores from '../professores/professores'
import Editais from '../editais/editais'
import CalendarioDeProvas from '../calendarioDeProvas/caProvas'
import Contatos from '../contatos/contatos'
import Cursos from '../cursos/cursos'
import Regulamentos from '../regulamentos/regulamentos'
import Eventos from '../eventos/eventos'
import HorarioDePE from '../horarioDePermanencia/horarioDePe'
import AuthOrApp from './authOrApp'

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={AuthOrApp}>
            <IndexRoute component={Dashboard} />
            <Route path='/professores' component={Professores} />
            <Route path='/editais' component={Editais} />
            <Route path='/calendario-de-provas' component={CalendarioDeProvas} />
            <Route path='/contatos' component={Contatos} />
            <Route path='/cursos' component={Cursos} />
            <Route path='/regulamentos' component={Regulamentos} />
            <Route path='/eventos' component={Eventos} />
            <Route path='/horario-de-permanencia' component={HorarioDePE} />

        </Route>
        <Redirect from='*' to='/' />
    </Router>
)