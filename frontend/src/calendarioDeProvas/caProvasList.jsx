import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { getList, showUpdate, remove } from './caProvasActions'


class CaProvasList extends Component {

    componentWillMount() {
        this.props.getList()
    }

    confirmDelete(provas) {
        let msg = window.confirm('Deseja excluir este registro?')
        if (msg) {
            this.props.remove(provas)
        }
    }

    renderRows() {
        //recebe a lista que veio do servidor ou uma lista vazia
        const list = this.props.list || []
        return list.map(provas => (

            <tr key={provas._id}>
                <td>
                    {provas.curso}
                </td>
                <td>
                    {provas.semestre}
                </td>
                <td>
                    {provas.dataProva}
                </td>
                <td>
                    {provas.disciplina}
                </td>
                <td>
                    <button className="btn btn-warning" onClick={() => this.props.showUpdate(provas)}>
                        <i className="fa fa-pencil"></i>
                    </button>
                    <button className="btn btn-danger" onClick={() => this.confirmDelete(provas)}>
                        <i className="fa fa-trash-o"></i>
                    </button>
                </td>
            </tr>
        ))
    }

    render() {
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Curso</th>
                            <th>Semestre</th>
                            <th>Data</th>
                            <th>Disciplina</th>
                            <th className="table-actions">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
            </div>
        )
    }
}
//recebe o estado por parametro e retorna um objeto com os dados para serem acessados pelo component
const mapStateToProps = state => ({ list: state.caprovas.list })
const mapDispatchToProps = dispatch => bindActionCreators({
    getList, showUpdate, remove
}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(CaProvasList)