import React, { Component } from 'react'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'

class Professores extends Component {

    render() {
        return (
            <div>
                <ContentHeader title="Professores" small="Cadastro" />
                <Content>
                    <h1>Cadastro de Professores</h1>
                </Content>
            </div>
        )
    }
}

export default Professores