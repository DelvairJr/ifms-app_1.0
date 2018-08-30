import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Dashboard from '../dashboard/dashboard'
import Professores from '../professores/professores'
import Editais from '../editais/editais'

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={Dashboard} />
        <Route path='/professores' component={Professores} />
        <Route path='/editais' component={Editais} />
       
    </Router>
)