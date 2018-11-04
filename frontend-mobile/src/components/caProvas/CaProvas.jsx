import React, { Component } from 'react'
import axios from 'axios'

import Main from '../template/Main'
import consts from '../../assets/consts'

import InputField from '../template/InputField'

const headerProps = {
    icon: 'calendar-o',
    title: 'Calendário de Provas'
}

const baseUrl = consts.API_URL

export default class CaProvas extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            provas: []
        }

    }

    componentWillMount() {
        axios.get(`${baseUrl}/m-provas`)
            .then(resp => {
                this.setState({ provas: resp.data })
            })
    }

    renderCards(key, p) {

        return (

            <div class="card border-success mb-3" key={key}>
                <div class="card-body">
                    <h5 class="card-title"> <i className="fa fa-mortar-board" /> {p.curso} - {p.semestre}</h5>
                    <p class="card-text"> <i className="fa fa-calendar-o" /> {p.dataProva}</p>
                    <p class="card-text"> <i className="fa fa-book" /> {p.disciplina}</p>

                </div>
            </div>

        )
    }


    handleSearch = () => {
        this.setState({
            search: this.search.value
        })
    }

    render() {
        return (
            <Main >
                <h5>
                    <i className={`fa fa-${headerProps.icon}`}></i>
                    <strong> {headerProps.title}</strong>
                </h5>

                <div class="form-group">

                    <InputField
                        refValue={node => this.search = node}
                        idValue='search'
                        typeValue='text'
                        requiredValue={true}
                        textLabel='Buscar'
                        textPlaceholder='Digite o nome do curso...'
                        keyUp={this.handleSearch} />
                </div>
                <hr />

                {Object
                    .keys(this.state.provas)
                    .map(key => {
                        if (this.state.provas[key].curso.toUpperCase()
                            .includes(this.search.value.toUpperCase())) {
                            return this.renderCards(key, this.state.provas[key])
                        }
                    })}
            </Main>
        )
    }
}
