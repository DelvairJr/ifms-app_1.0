import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import Main from '../template/Main'
import consts from '../../assets/consts'


const headerProps = {
    icon: 'calendar-o',
    title: 'Calendário de Provas'
}

const baseUrl = consts.API_URL

export default class CaProvas extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            list: []
        }

    }

    componentWillMount() {
        axios.get(`${baseUrl}/m-provas`)
            .then(resp => {
                this.setState({ list: resp.data })
            })
    }

    renderCards() {
        const lista = this.state.list

        return lista.map(p => (
            <Link to={`/cursos/${p._id}`}>
                <div class="card border-success mb-3" key={p._id}>
                    <div class="card-body">
                        <h5 class="card-title"> <i className="fa fa-mortar-board" /> {p.curso} - {p.semestre}</h5>
                        <p class="card-text"> <i className="fa fa-calendar-o" /> {p.dataProva}</p>
                        <p class="card-text"> <i className="fa fa-book" /> {p.disciplina}</p>

                    </div>
                </div>
            </Link>
        ))
    }

    render() {
        console.log(this.state.list);

        return (
            <Main >
                <h5>
                    <i className={`fa fa-${headerProps.icon}`}></i>
                    <strong> {headerProps.title}</strong>
                </h5>

                <div class="form-group">
                    <label htmlFor="buscar">Buscar: </label>
                    <input type="text" id="buscar" className="form-control" placeholder="Digite o nome do curso..." />
                </div>
                <hr />
                {this.renderCards()}
            </Main>
        )
    }
}
