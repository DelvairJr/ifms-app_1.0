import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { getList, showUpdate, showDelete } from './caProvasActions'


class CaProvasList extends Component {

    componentWillMount() {
        this.props.getList()
    }

    dataformatada(dt) {
        const d = dt ? dt.split('-') : []
        const c = new Date(`${d[2]}/${d[1]}/${d[0]}`)
        console.log('====================================');
        console.log(c);
        console.log('====================================');
        return (
            <td>
                {c.toDateString()}
            </td>
        )
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
                    <button className="btn btn-danger" onClick={() => this.props.showDelete(provas)}>
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
    getList, showUpdate, showDelete
}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(CaProvasList)