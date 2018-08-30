import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Tabs from '../common/tab/tabs'
import TabsHeader from '../common/tab/tabsHeader'
import TabsContent from '../common/tab/tabsContent'
import TabHeader from '../common/tab/tabHeader'
import TabContent from '../common/tab/tabContent'
import { selectTab, showTabs } from '../common/tab/tabActions'
import { create, update, remove } from './professoresActions'

import List from './professoresList'
import Form from './professoresForm'

class Professores extends Component {

    componentWillMount() {
        this.props.selectTab('tabList')
        this.props.showTabs('tabList', 'tabCreate') //Passa quais abas devem ser exibidas
    }

    render() {
        return (
            <div>
                <ContentHeader title="Professores" small="Cadastro" />
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label="Listar" icon="bars" target="tabList" />
                            <TabHeader label="Cadastrar" icon="plus" target="tabCreate" />
                            <TabHeader label="Alterar" icon="pencil" target="tabUpdate" />
                            <TabHeader label="Excluir" icon="trash-o" target="tabDelete" />
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id="tabList">
                                <List />
                            </TabContent>
                            <TabContent id="tabCreate">
                                <Form onSubmit={this.props.create} />
                            </TabContent>
                            <TabContent id="tabUpdate">
                                <Form onSubmit={this.props.update} />
                            </TabContent>
                            <TabContent id="tabDelete">
                                <Form onSubmit={this.props.remove} readOnly={true} />
                            </TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}
//Mapeia as ações nas propriedades do component
const mapDispatchToProps = dispatch => bindActionCreators({
    selectTab, showTabs, create, update, remove
}, dispatch)
export default connect(null, mapDispatchToProps)(Professores) 