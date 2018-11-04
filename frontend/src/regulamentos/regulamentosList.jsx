import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { getList, showUpdate, showDelete } from './regulamentosActions'

import PanelGroup from '../../node_modules/react-bootstrap/lib/PanelGroup'
import Panel from '../../node_modules/react-bootstrap/lib/Panel'
import PanelHeading from '../../node_modules/react-bootstrap/lib/PanelHeading'
import PanelTitle from '../../node_modules/react-bootstrap/lib/PanelTitle'
import PanelBody from '../../node_modules/react-bootstrap/lib/PanelBody'

class RegulamentosList extends Component {

    componentWillMount() {
        this.props.getList()
    }


    renderArquivos(arq) {

        return arq.map(a => (
            <li className="item-lista"><a href={a.link}> <i className="fa fa-file-pdf-o" /> {a.titulo}</a></li>
        ))

    }

    renderCollapsible() {
        const list = this.props.list || []

        return list.map(reg => (

            <Panel eventKey={reg._id} key={reg._id}>
                <PanelHeading>
                    <PanelTitle toggle>{reg.categoria}</PanelTitle>
                </PanelHeading>
                <PanelBody collapsible>
                    <h4>Arquivos</h4>
                    <ul>
                        {this.renderArquivos(reg.arquivos)}
                    </ul>
                    <h5>Mais informações: <a href={reg.informacoes}>{reg.informacoes}</a></h5>
                    <button className="btn btn-warning" onClick={() => this.props.showUpdate(reg)}>
                        <i className="fa fa-pencil"></i>
                    </button>
                    <button className="btn btn-danger" onClick={() => this.props.remove(reg)}>
                        <i className="fa fa-trash-o"></i>
                    </button>
                </PanelBody>
            </Panel>))
    }

    renderRows() {
        //recebe a lista que veio do servidor ou uma lista vazia
        const list = this.props.list || []

        return list.map(reg => (
            <tr key={reg._id}>
                <td>
                    <a href={reg.mais_informacoes}>{reg.titulo}</a>
                </td>
                <td>
                    <a href={reg.caminho}>{reg.caminho}</a>
                </td>
                <td>
                    <button className="btn btn-warning" onClick={() => this.props.showUpdate(reg)}>
                        <i className="fa fa-pencil"></i>
                    </button>
                    <button className="btn btn-danger" onClick={() => this.props.showDelete(reg)}>
                        <i className="fa fa-trash-o"></i>
                    </button>
                </td>
            </tr>
        ))
    }

    render() {
        return (
            <div>
                <PanelGroup accordion id="pn-group">
                    {this.renderCollapsible()}
                </PanelGroup>
            </div>
        )
    }
}
//recebe o estado por parametro e retorna um objeto com os dados para serem acessados pelo component
const mapStateToProps = state => ({ list: state.regulamentos.list })
const mapDispatchToProps = dispatch => bindActionCreators({
    getList, showUpdate, showDelete
}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(RegulamentosList)