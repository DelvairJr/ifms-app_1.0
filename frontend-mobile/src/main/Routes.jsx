import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from '../components/home/Home'
import Professotes from '../components/professores/Professores'

export default props =>
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/professores' component={Professotes} />
        <Redirect from='*' to='/' />
    </Switch>