import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { getList, showUpdate, remove } from './editaisActions'

import PanelGroup from '../../node_modules/react-bootstrap/lib/PanelGroup'
import Panel from '../../node_modules/react-bootstrap/lib/Panel'
import PanelHeading from '../../node_modules/react-bootstrap/lib/PanelHeading'
import PanelTitle from '../../node_modules/react-bootstrap/lib/PanelTitle'
import PanelBody from '../../node_modules/react-bootstrap/lib/PanelBody'
//node_modules\react-bootstrap\lib\PanelFooter.js


class EditaisList extends Component {

    componentWillMount() {
        this.props.getList()
    }

    confirmDelete(ed) {
        let msg = window.confirm('Deseja excluir este registro?')
        if (msg) {
            this.props.remove(ed)
        }
    }

    renderArquivos(arq) {
        return arq.map((a, key) => (
            <li className="item-lista" key={key}><a href={a}> <i className="fa fa-file-pdf-o" /> {a}</a></li>
        ))

    }


    renderCollapsible() {
        const list = this.props.list || []

        return list.map((ed, i) => (

            <Panel eventKey={ed._id} key={ed._id}>
                <PanelHeading>
                    <PanelTitle toggle>{ed.titulo}</PanelTitle>
                </PanelHeading>
                <PanelBody collapsible>
                    <h4>Arquivos</h4>
                    <ul>
                        {this.renderArquivos(ed.arquivos)}
                    </ul>
                    <h5>Mais informações: <a href={ed.informacoes}>{ed.informacoes}</a></h5>
                    <button className="btn btn-warning" onClick={() => this.props.showUpdate(ed)}>
                        <i className="fa fa-pencil"></i>
                    </button>
                    <button className="btn btn-danger" onClick={() => this.confirmDelete(ed)}>
                        <i className="fa fa-trash-o"></i>
                    </button>
                </PanelBody>
            </Panel>))
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
const mapStateToProps = state => ({ list: state.editais.list })
const mapDispatchToProps = dispatch => bindActionCreators({
    getList, showUpdate, remove
}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(EditaisList)