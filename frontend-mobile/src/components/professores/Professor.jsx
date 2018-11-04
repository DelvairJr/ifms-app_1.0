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

export default class Professor extends Component {
    constructor(props) {
        super(props)
        this.state = {
            professor: [],
            hrPermanecia: []
        }
    }

    componentWillMount() {
        if (this.props.match.params.id) {
            axios.get(`${baseUrl}/m-professor/${this.props.match.params.id}`)
                .then(resp => {
                    this.setState({ professor: resp.data })
                })
        }

        axios.get(`${baseUrl}/m-horario-de-permanencia`)
            .then(resp => {
                this.setState({ hrPermanecia: resp.data })
            })
    }

    renderProfessores(key, hp) {
        return (
            <div className="card border-success mb-3" key={hp._id}>
                <div className="card-header">
                    <i className="fa fa-id-card-o"></i> {hp.professor}
                </div>
                <div className="card-body">
                    <h6 className="card-title mb-2 text-muted">
                        <i className="fa fa-calendar-o"></i> {hp.dia_semana}
                    </h6>
                    <p className="card-subtitle">
                        <i className="fa fa-building-o"></i> {hp.local}
                    </p>
                    <p className="card-text">
                        <i className="fa fa-clock-o"></i> {`${hp.hrs_inicio} - ${hp.hrs_final}`}
                    </p>
                </div>
            </div>
        )
    }


    render() {
        return (
            <Main>
                <h5>
                    <i className={`fa fa-${headerProps.icon}`}></i>
                    <strong> {headerProps.title}</strong>
                </h5>
                {Object
                    .keys(this.state.hrPermanecia)
                    .map(key => {
                        if (this.state.hrPermanecia[key].professor
                            .includes(this.state.professor.nome)) {
                            return this.renderProfessores(key, this.state.hrPermanecia[key])
                        }
                    })}

                <Link to="/professores" className='btn btn-success btn-sm'>Voltar</Link>
            </Main>
        )
    }
}
