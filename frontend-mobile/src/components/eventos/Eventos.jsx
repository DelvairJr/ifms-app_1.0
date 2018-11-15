import React, { Component } from 'react'
import axios from 'axios'

import InputField from '../template/InputField'
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
            eventos: []
        }
    }

    componentDidMount = () => {
        axios.get(`${baseUrl}/m-eventos`)
            .then(resp => {
                this.setState({ eventos: resp.data })
                this.saveLocaStorage(resp.data)
            })
    }

    isEmpty() {
        return Object.keys(this.state.eventos).length === 0;
    }

    saveLocaStorage(eventos) {
        //converte o objeto para salvar no localStorage
        var jsonAux = JSON.stringify(eventos);

        // "Seta" este json no localStorage
        window.localStorage.setItem('eventos', jsonAux);
    }

    readLocalStorage() {
        if (this.isEmpty()) {
            // Recupera o json do localStorage
            var jsonData = window.localStorage.getItem('eventos');

            // Converte este json para objeto
            var data = JSON.parse(jsonData);

            this.setState({
                eventos: data
            })
        }
    }

    renderCards(key, e) {
        return (

            <div className="card border-success mb-3" key={key}>
                <div className="card-body">
                    <h5 className="card-title"> <i className={`fa fa-${headerProps.icon}`} /> {e.nome}</h5>
                    <p className="card-text"> <i className="fa fa-calendar-o" /> {e.data}</p>
                    <p className="card-text"> <i className="fa fa-file" /> {e.descricao}</p>

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
                {this.readLocalStorage()}
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
                        textPlaceholder='Digite o nome do evento...'
                        keyUp={this.handleSearch} />
                </div>
                <hr />
                {Object
                    .keys(this.state.eventos)
                    .map(key => {
                        if (this.state.eventos[key].nome.toUpperCase()
                            .includes(this.search.value.toUpperCase())) {
                            return this.renderCards(key, this.state.eventos[key])
                        }
                    })}
                <hr />
                <a href="http://ifms.edu.br/assuntos/eventos"> Mais informações sobre eventos.</a>
            </Main>
        )
    }
}
