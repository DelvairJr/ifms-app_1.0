import React, { Component } from 'react'
import Main from '../template/Main'

const headerProps ={
    icon: 'card-o',
    title: 'Professores'
}

export default class Professores extends Component {
    render() {
        return (
            <Main {...headerProps}>
                Professores
            </Main>
        )
    }
}
