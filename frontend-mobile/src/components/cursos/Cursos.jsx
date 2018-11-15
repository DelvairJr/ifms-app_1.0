import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


import InputField from '../template/InputField'
import Main from '../template/Main'
import Card from '../template/Card'

import consts from '../../assets/consts'

const baseUrl = consts.API_URL

const headerProps = {
    icon: 'mortar-board',
    title: 'Cursos'
}

export default class Cursos extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cursos: []
        }
    }

    componentWillMount() {
        axios.get(`${baseUrl}/m-cursos`)
            .then(resp => {
                this.setState({ cursos: resp.data })
                this.saveLocaStorage(resp.data)
            }).catch(error => {
                console.error(error)
            }
            )
    }

    isEmpty() {
        return Object.keys(this.state.cursos).length === 0;
    }

    saveLocaStorage(cursos) {
        //converte o objeto para salvar no localStorage
        var jsonAux = JSON.stringify(cursos);

        // "Seta" este json no localStorage
        window.localStorage.setItem('cursos', jsonAux);

    }

    readLocalStorage() {
        // Recupera o json do localStorage
        var jsonData = window.localStorage.getItem('cursos');

        // Converte este json para objeto
        var data = JSON.parse(jsonData);

        this.setState({
            cursos: data
        })
    }

    renderCards(key, c) {

        return (
            <Card key={key} border='success'>
                <Link to={`/cursos/${c._id}`} className="link-none">

                    <h5 className="card-title">
                        <i className={`fa fa-${headerProps.icon}`} /> {c.nome}
                    </h5>
                    <h6><i className={`fa fa-${headerProps.icon}`} />{c.abreviado}</h6>

                </Link>
            </Card>

        )
    }

    handleSearch = () => {
        this.setState({
            search: this.search.value
        })
    }

    render() {
        if (this.isEmpty())
            this.readLocalStorage()
        return (
            <Main >
                <h5>
                    <i className={`fa fa-${headerProps.icon}`}></i>
                    <strong> {headerProps.title}</strong>
                </h5>

                <div classNames="form-group">

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
                    .keys(this.state.cursos)
                    .map(key => {
                        if (this.state.cursos[key].nome.toUpperCase()
                            .includes(this.search.value.toUpperCase())) {
                            return this.renderCards(key, this.state.cursos[key])
                        }
                    })}
            </Main>
        )


    }
}
