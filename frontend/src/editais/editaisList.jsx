import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { getList, showUpdate, showDelete } from './editaisActions'


class EditaisList extends Component {

    componentWillMount() {
        this.props.getList()
    }

    renderRows() {
        //recebe a lista que veio do servidor ou uma lista vazia
        const list = this.props.list || []
        //const list2
       
            console.log(list.arquivos)
            
       
        
       
        return list.map(ed => (
            <tr key={ed._id}>
                <td>
                    <a href={ed.informacoes}>{ed.titulo}</a>
                </td>
                <td>
                    <a href={ed.arquivos}>{ed.arquivos}</a>
                </td>
                <td>
                <button className="btn btn-warning" onClick={() => this.props.showUpdate(ed)}>
                        <i className="fa fa-pencil"></i>
                    </button>
                    <button className="btn btn-danger" onClick={() => this.props.showDelete(ed)}>
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
                            <th>Titulo</th>
                            <th>Arquivos</th>
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
const mapStateToProps = state => ({ list: state.editais.list })
const mapDispatchToProps = dispatch => bindActionCreators({
    getList, showUpdate, showDelete
}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(EditaisList)