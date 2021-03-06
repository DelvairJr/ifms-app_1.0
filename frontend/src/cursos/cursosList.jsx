import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { toastr } from 'react-redux-toastr'

import { getList, getProvas, showUpdate, remove } from './cursosActions'


import PanelGroup from '../../node_modules/react-bootstrap/lib/PanelGroup'
import Panel from '../../node_modules/react-bootstrap/lib/Panel'
import PanelHeading from '../../node_modules/react-bootstrap/lib/PanelHeading'
import PanelTitle from '../../node_modules/react-bootstrap/lib/PanelTitle'
import PanelBody from '../../node_modules/react-bootstrap/lib/PanelBody'

class CursosList extends Component {

    componentWillMount() {
        this.props.getList()
        this.props.getProvas()
    }

    confirmDelete(curso) {
        let msg = window.confirm('Deseja excluir este registro?')
        if (msg) {
            this.props.remove(curso)
        }
    }
    
    findProvas(curso) {
        const listHorarios = this.props.provas
    
        let found

        for (let i = 0; i < listHorarios.length; i++) {
            if (listHorarios[i].curso.toUpperCase() === curso.nome.toUpperCase()) {
                found = true
                break
            } else
                found = false
        }

        if (found == true)
            toastr.error("Não é possível excluir este registro!")

        else if (found == false)
            this.confirmDelete(cursos)
    }

    renderDisciplinas(disciplinas) {
        //percorre a lista e retorna os elementos Disciplinas para serem redenrizados na Lista
        return disciplinas.map((disc, i) => (
            <li className="item-lista" key={i}><h5>{i + 1}. {disc}</h5></li>
        ))

    }

    renderCollapsible() {
        //recebe um vetor com as disciplinas que foram carregadas do servidor
        const list = this.props.list || []

        //percorre as listas e retorna um novo elemento do tipo PanelCollapsible
        return list.map(curso => (

            <Panel eventKey={curso._id} key={curso._id}>
                <PanelHeading>
                    <PanelTitle toggle>{curso.nome}</PanelTitle>
                </PanelHeading>
                <PanelBody collapsible>
                    <h3>{curso.abreviado}</h3>
                    <ol>
                        {this.renderDisciplinas(curso.disciplinas)}
                    </ol>

                    <button className="btn btn-warning" onClick={() => this.props.showUpdate(curso)}>
                        <i className="fa fa-pencil"></i>
                    </button>
                    <button className="btn btn-danger" onClick={() => this.findProvas(curso)}>
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
const mapStateToProps = state => ({ list: state.cursos.list, provas: state.cursos.provas })
const mapDispatchToProps = dispatch => bindActionCreators({
    getList, getProvas, showUpdate, remove
}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(CursosList)