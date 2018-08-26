import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { getList } from './professoresActions'

class ProfessoresList extends Component {

    componentWillMount() {
        this.props.getList()
    }

    renderRows() {
        //recebe a lista que veio do servidor ou uma lista vazia
        const list = this.props.list || [] 

        return list.map(prof => (
            <tr key={prof._id}>
                <td>{prof.nome}</td>
                <td>{prof.email}</td>
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
                            <th>Email</th>
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
const mapStateToProps = state => ({ list: state.professores.list })
const mapDispatchToProps = dispatch => bindActionCreators({ getList }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(ProfessoresList)