import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { getList, showUpdate, remove } from './eventosActions'


class EventosList extends Component {

    componentWillMount() {
        this.props.getList()
    }

    confirmDelete(ev) {
        let msg = window.confirm('Deseja excluir este registro?')
        if (msg) {
            this.props.remove(ev)
        }
    }

    renderRows() {
        //recebe a lista que veio do servidor ou uma lista vazia
        const list = this.props.list || []
        return list.map(ev => (

            <tr key={ev._id}>
                <td>
                    {ev.nome}
                </td>
                <td>
                    {ev.data}
                </td>
                <td>
                    <a href={ev.descricao}>Acessar página do evento</a>
                </td>
                <td>
                    <button className="btn btn-warning" onClick={() => this.props.showUpdate(ev)}>
                        <i className="fa fa-pencil"></i>
                    </button>
                    <button className="btn btn-danger" onClick={() => this.confirmDelete(ev)}>
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
                            <th>Nome</th>
                            <th>Data</th>
                            <th>Página do evento</th>
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
const mapStateToProps = state => ({ list: state.eventos.list })
const mapDispatchToProps = dispatch => bindActionCreators({
    getList, showUpdate, remove
}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(EventosList)