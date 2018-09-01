import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Tabs from '../common/tab/tabs'
import TabsHeader from '../common/tab/tabsHeader'
import TabsContent from '../common/tab/tabsContent'
import TabHeader from '../common/tab/tabHeader'
import TabContent from '../common/tab/tabContent'

import { selectTab, showTabs } from '../common/tab/tabActions'

import List from './caProvasList'


/*
imconnect	import { connect } from 'react-redux'
improvider	import { Provider } from 'react-redux'
provider	react-redux Provider Container
mstp	mapStateToProps
mdtp	mapDispatchToProps
connect	react-redux connect React Component 
*/
/*
<Form onSubmit={this.props.create}
submitLabel="Incluir" submitClass="primary" />
<Form onSubmit={this.props.update}
submitLabel="Alterar" submitClass="info" />
 <Form onSubmit={this.props.remove} readOnly={true}
submitLabel="Excluir" submitClass="danger" />
 */
class CalendarioDeProvas extends Component {
    componentWillMount() {
        this.props.selectTab('tabList')
        this.props.showTabs('tabList', 'tabCreate') //Passa quais abas devem ser exibidas
    }

    render() {
        return (
            <div>
                <ContentHeader title="Calendário de Provas" small="Cadastro" />
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

                            </TabContent>
                            <TabContent id="tabUpdate">

                            </TabContent>
                            <TabContent id="tabDelete">

                            </TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    selectTab, showTabs
}, dispatch)

export default connect(null, mapDispatchToProps)(CalendarioDeProvas)