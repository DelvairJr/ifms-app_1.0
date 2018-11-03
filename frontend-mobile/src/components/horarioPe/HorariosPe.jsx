import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import Main from '../template/Main'
import consts from '../../assets/consts'

const headerProps = {
    icon: 'calendar',
    title: 'Horário de Permanência'
}

const baseUrl = consts.API_URL

export default class HorariosPe extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: []
        }
    }

    componentWillMount() {
        axios.get(`${baseUrl}/m-horario-de-permanencia`)
            .then(resp => {
                this.setState({ list: resp.data })
            })
    }

    renderCards() {
        return this.state.list.map(hp => (
            <div className="card border-success mb-3" key={hp._id}>
                <div className="card-header">
                    Professor: {hp.professor}
                </div>
                <div className="car-body">
                    <h6 className="card-title mb-2 text-muted">
                        Dia: {hp.dia_semana}
                    </h6>
                    <p className="card-subtitle">
                        Local: {hp.local}
                    </p>
                    <p className="card-text">
                        Horário: {`${hp.hrs_inicio} - ${hp.hrs_final}`}
                    </p>
                </div>
            </div>
        ))
    }

    render() {
        return (
            <Main {...headerProps}>
                <h5>
                    <i className={`fa fa-${headerProps.icon}`}></i>
                    <strong> {headerProps.title}</strong>
                </h5>
                <div class="form-group">
                    <label htmlFor="buscar">Buscar: </label>
                    <input type="text" id="buscar" className="form-control" placeholder="Digite o nome do professor..." />
                </div>
                <hr />
                {this.renderCards()}
            </Main >
        )
    }
}
