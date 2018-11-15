import React, { Component } from 'react'
import axios from 'axios'

import InputField from '../template/InputField'
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
            horarios: []
        }
    }

    componentWillMount() {
        axios.get(`${baseUrl}/m-horario-de-permanencia`)
            .then(resp => {
                this.setState({ horarios: resp.data })
                this.saveLocaStorage(resp.data)
            })
    }

    isEmpty() {
        return Object.keys(this.state.horarios).length === 0;
    }

    saveLocaStorage(horarios) {
        //converte o objeto para salvar no localStorage
        var jsonAux = JSON.stringify(horarios);

        // "Seta" este json no localStorage
        window.localStorage.setItem('horarios', jsonAux);




    }

    readLocalStorage() {
        // Recupera o json do localStorage
        var jsonData = window.localStorage.getItem('horarios');

        // Converte este json para objeto
        var data = JSON.parse(jsonData);

        this.setState({
            horarios: data
        })
    }

    handleSearch = () => {
        this.setState({
            search: this.search.value
        })
    }

    renderCards(key, hp) {
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
        if (this.isEmpty())
            this.readLocalStorage()
        return (
            <Main {...headerProps}>
                <h5>
                    <i className={`fa fa-${headerProps.icon}`}></i>
                    <strong> {headerProps.title}</strong>
                </h5>
                <div className="form-group">

                    <InputField
                        refValue={node => this.search = node}
                        idValue='search'
                        typeValue='text'
                        requiredValue={true}
                        textLabel='Buscar'
                        textPlaceholder='Digite o nome do professor...'
                        keyUp={this.handleSearch} />
                </div>
                <hr />
                {Object
                    .keys(this.state.horarios)
                    .map(key => {
                        if (this.state.horarios[key].professor.toUpperCase()
                            .includes(this.search.value.toUpperCase())) {
                            return this.renderCards(key, this.state.horarios[key])
                        }
                    })}
            </Main >
        )
    }
}
