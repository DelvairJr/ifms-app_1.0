import React, { Component } from 'react'
import axios from 'axios'

import Main from '../template/Main'
import Card from '../template/Card'
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
            }).catch(err => {
                console.log(err);

            })
    }

    isEmpty(provas) {
        return Object.keys(provas).length === 0;
    }

    saveLocaStorage(provas) {
        if (this.isEmpty(provas)) {
            this.readLocalStorage()
        } else {
            var jsonAux = JSON.stringify(provas);

            // "Seta" este json no localStorage
            window.localStorage.setItem('provas', jsonAux);

            // Recupera o json do localStorage
        }

    }

    readLocalStorage() {

        var jsonTarefa = window.localStorage.getItem('provas');

        // Converte este json para objeto
        var tarefa = JSON.parse(jsonTarefa);

        this.setState({
            provas: tarefa
        })
        console.log(tarefa);
    }

    renderCards(key, p) {

        return (

            <Card key={key} border='success'>
                <h5 className="card-title"> <i className="fa fa-mortar-board" /> {p.curso} - {p.semestre}</h5>
                <p className="card-text"> <i className="fa fa-calendar-o" /> {p.dataProva}</p>
                <p className="card-text"> <i className="fa fa-book" /> {p.disciplina}</p>

            </Card>

        )
    }


    handleSearch = () => {
        this.setState({
            search: this.search.value
        })
    }

    render() {
        this.saveLocaStorage(this.state.provas)
        return (
            <Main >
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
