import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from '../components/home/Home'
import Professores from '../components/professores/Professores'
import Professor from '../components/professores/Professor'
import HorariosPe from '../components/horarioPe/HorariosPe'
import CaProvas from '../components/caProvas/CaProvas'
import Edital from '../components/editais/Edital'
import Eventos from '../components/eventos/Eventos'
import Regulamentos from '../components/regulamentos/Regulamentos'

export default props =>
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/professores/:id' component={Professor} />
        <Route exact={true} path='/professores' component={Professores} />
        <Route exact={true} path='/permanencia' component={HorariosPe} />
        <Route exact={true} path='/provas' component={CaProvas} />
        <Route exact={true} path='/editais' component={Edital} />
        <Route exact={true} path='/eventos' component={Eventos} />
        <Route exact={true} path='/regulamentos' component={Regulamentos} />

        <Redirect from='*' to='/' />
    </Switch>