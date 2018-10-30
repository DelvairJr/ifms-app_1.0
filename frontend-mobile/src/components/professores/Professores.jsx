import React, { Component } from 'react'
import axios from 'axios'

import Main from '../template/Main'
import consts from '../../assets/consts'

const headerProps = {
    icon: 'id-card-o',
    title: 'Professores'
}

const baseUrl = consts.API_URL

export default class Professores extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            list: []
        }

    }

    componentWillMount() {
        axios.get(`${baseUrl}/m-professor`)
            .then(resp => {
                this.setState({ list: resp.data })
            })
    }

    renderRows() {
        const lista = this.state.list

        return lista.map(prof => (
            <tr key={prof._id}>
                <td><i className="fa fa-id-card-o" /> {prof.nome}</td>
                <td><i className="fa fa-envelope"  /> {prof.email}</td>
            </tr>
        ))
    }

    render() {
        console.log(this.state.list);

        return (
            <Main {...headerProps}>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Docente</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
            </Main>
        )
    }
}
