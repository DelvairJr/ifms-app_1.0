import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { getList, showUpdate, showDelete } from './eventosActions'


class EventosList extends Component {

    componentWillMount() {
        this.props.getList()
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
                    {ev.descricao}
                </td>
                <td>
                    <button className="btn btn-warning" onClick={() => this.props.showUpdate(ev)}>
                        <i className="fa fa-pencil"></i>
                    </button>
                    <button className="btn btn-danger" onClick={() => this.props.showDelete(ev)}>
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
                            <th>Descrição</th>
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
    getList, showUpdate, showDelete
}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(EventosList)