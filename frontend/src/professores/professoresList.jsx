import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { getList, showUpdate, remove, getHorarioPe } from './professoresActions'

class ProfessoresList extends Component {

    componentWillMount() {
        this.props.getList()
        this.props.getHorarioPe()
    }

    confirmDelete(prof) {
        let msg = window.confirm('Deseja excluir este registro?')
        if (msg) {
            this.props.remove(prof)
        }
    }

    findProfessor(prof) {
        const listHorarios = this.props.horario
        let found

        for (let i = 0; i < listHorarios.length; i++) {
            if (listHorarios[i].professor.toUpperCase() === prof.nome.toUpperCase()) {
                found = true
                break
            } else
                found = false
        }

        if (found == true)
            alert("Não é possível excluir este registro!")
        else if (found == false)
            this.confirmDelete(prof)

    }

    renderRows() {
        //recebe a lista que veio do servidor ou uma lista vazia
        const list = this.props.list || []

        return list.map(prof => (
            <tr key={prof._id}>
                <td>{prof.nome}</td>
                <td>{prof.email}</td>
                <td>
                    <button className="btn btn-warning" onClick={() => this.props.showUpdate(prof)}>
                        <i className="fa fa-pencil"></i>
                    </button>
                    <button className="btn btn-danger" onClick={() => this.findProfessor(prof)}>
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
const mapStateToProps = state => ({ list: state.professores.list, horario: state.professores.horario })
const mapDispatchToProps = dispatch => bindActionCreators({
    getList, showUpdate, remove, getHorarioPe
}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(ProfessoresList)