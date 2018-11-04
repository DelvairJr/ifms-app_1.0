import React, { Component } from 'react'
import axios from 'axios'

import Main from '../template/Main'
import consts from '../../assets/consts'


const headerProps = {
    icon: 'flag-o',
    title: 'Eventos'
}

const baseUrl = consts.API_URL

export default class Eventos extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: []
        }
    }

    componentWillMount() {
        axios.get(`${baseUrl}/m-eventos`)
            .then(resp => {
                this.setState({ list: resp.data })
            })
    }

    renderCards() {
        const lista = this.state.list

        return lista.map(e => (

            <div className="card border-success mb-3" key={e._id}>
                <div className="card-body">
                    <h5 className="card-title"> <i className={`fa fa-${headerProps.icon}`} /> {e.nome}</h5>
                    <p className="card-text"> <i className="fa fa-calendar-o" /> {e.data}</p>
                    <p className="card-text"> <i className="fa fa-file" /> {e.descricao}</p>

                </div>
            </div>

        ))
    }

    render() {
        return (
            <Main >
                <h5>
                    <i className={`fa fa-${headerProps.icon}`}></i>
                    <strong> {headerProps.title}</strong>
                </h5>

                <div class="form-group">
                    <label htmlFor="buscar">Buscar: </label>
                    <input type="text" id="buscar" className="form-control" placeholder="Digite o nome do evento..." />
                </div>
                <hr />
                {this.renderCards()}
                <hr />
                <a href="http://ifms.edu.br/assuntos/eventos"> Mais informações sobre eventos.</a>
            </Main>
        )
    }
}
