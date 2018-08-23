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

class Professores extends Component {

    render() {
        return (
            <div>
                <ContentHeader title="Professores" small="Cadastro" />
                <Content>
                <Tabs>
                        <TabsHeader>
                            <TabHeader label='Listar' icon='bars' target='tablist' />
                            <TabHeader label='Incluir' icon='plus' target='tabCreate' />
                            <TabHeader label='Alterar' icon='pencil' target='tabUpdate' />
                            <TabHeader label='Excluir' icon='trash-o' target='tabDelete' />
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id='tablist'>Listar</TabContent>
                            <TabContent id='tabCreate'>Incluir</TabContent>
                            <TabContent id='tabUpdate'>Alterar</TabContent>
                            <TabContent id='tabDelete'>Excluir</TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ selectTab, showTabs }, dispatch)
export default connect(null, mapDispatchToProps)(Professores)