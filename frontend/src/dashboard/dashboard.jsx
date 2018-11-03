import React, { Component } from 'react'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Tabs from '../common/tab/tabs'

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <ContentHeader title="Sistema para Divulgação de Informações Acadêmicas" small="S.D.I.A" />
        <Content>

          <h3 >
            <strong> Sistema para Divulgação de Informações Acadêmicas.</strong>
          </h3>
          <h4>
            O Sistema de Gestão de Informações Acadêmicas é um software construido com o intuíto de
            de auxiliar os usuários na busca por informações referentes ao IFMS campus Nova Andradina.
          </h4>
        </Content>
      </div>
    )
  }
}
