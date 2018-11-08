import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { getList, showUpdate, showDelete } from './horarioDePeActions'


class HorarioDePeList extends Component {

    componentWillMount() {
        this.props.getList()
    }


    renderRows() {
        //recebe a lista que veio do servidor ou uma lista vazia
        const list = this.props.list || []

        return list.map(hp => (

            <tr key={hp._id}>
                <td>
                    {hp.dia_semana}
                </td>
                <td>
                    {`${hp.hrs_inicio} - ${hp.hrs_final}`}
                </td>
                <td>
                    {hp.local}
                </td>
                <td>
                    {hp.professor}
                </td>
                <td>
                    <button className="btn btn-warning" onClick={() => this.props.showUpdate(hp)}>
                        <i className="fa fa-pencil"></i>
                    </button>
                    <button className="btn btn-danger" onClick={() => this.props.showDelete(hp)}>
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
                            <th>Dia</th>
                            <th>Horário</th>
                            <th>Local</th>
                            <th>Professor</th>
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
const mapStateToProps = state => ({ list: state.horarioDePe.list })
const mapDispatchToProps = dispatch => bindActionCreators({
    getList, showUpdate, showDelete
}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(HorarioDePeList)