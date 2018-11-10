import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { getList, showUpdate, remove } from './contatosActions'

class ContatosList extends Component {

    componentWillMount() {
        this.props.getList()
    }

    confirmDelete(cont) {
        let msg = window.confirm('Deseja excluir este registro?')
        if (msg) {
            this.props.remove(cont)
        }
    }



    renderRows() {
        //recebe a lista que veio do servidor ou uma lista vazia
        const list = this.props.list || []

        return list.map(cont => (
            <tr key={cont._id}>
                <td>{cont.nome}</td>
                <td>{cont.email}</td>
                <td>
                    <button className="btn btn-warning" onClick={() => this.props.showUpdate(cont)}>
                        <i className="fa fa-pencil"></i>
                    </button>
                    <button className="btn btn-danger" onClick={() => this.confirmDelete(cont)}>
                        <i className="fa fa-trash-o"></i>
                    </button>
                </td>
            </tr>
        ))
    }

    render() {
        //this.showProps()
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Email</th>
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
const mapStateToProps = state => ({ list: state.contatos.list })
const mapDispatchToProps = dispatch => bindActionCreators({
    getList, showUpdate, remove
}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(ContatosList)