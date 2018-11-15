import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import Main from '../template/Main'
import Card from '../template/Card'
import consts from '../../assets/consts'

const headerProps = {
    icon: 'mortar-board',
    title: 'Cursos'
}

const baseUrl = consts.API_URL

export default class Curso extends Component {
    constructor(props) {
        super(props)
        this.state = {
            curso: []
        }
    }

    componentWillMount() {
        if (this.props.match.params.id) {
            axios.get(`${baseUrl}/m-cursos/${this.props.match.params.id}`)
                .then(resp => {
                    this.setState({ curso: resp.data })
                    this.saveLocaStorage(resp.data)
                })
        }

    }

    isEmpty() {
        return Object.keys(this.state.curso).length === 0;
    }

    saveLocaStorage(curso) {
        //converte o objeto para salvar no localStorage
        var jsonAux = JSON.stringify(curso);

        // "Seta" este json no localStorage
        window.localStorage.setItem(this.props.match.params.id, jsonAux);

    }

    readLocalStorage() {
        // Recupera o json do localStorage
        var jsonData = window.localStorage.getItem(this.props.match.params.id);

        // Converte este json para objeto
        var data = JSON.parse(jsonData);

        this.setState({
            curso: data
        })
    }

    renderDisciplinas(disciplinas) {
        const lsDisc = disciplinas || []

        return lsDisc.map((d, key) => (
            <li key={key}><i className="fa fa-book"></i> {d}</li>
        ))
    }

    renderCards() {
        const c = this.state.curso || []
        return (
            <Card key={c._id} border='success'>
                <h6><i className={`fa fa-${headerProps.icon}`} />{c.abreviado}</h6>

                <ul>
                    {this.renderDisciplinas(c.disciplinas)}
                </ul>
            </Card>
        )
    }

    render() {
        if (this.isEmpty())
            this.readLocalStorage()
        headerProps.title = this.state.curso.nome
        return (
            <Main >
                <h5>
                    <i className={`fa fa-${headerProps.icon}`}></i>
                    <strong> {headerProps.title}</strong>
                </h5>
                <hr />
                {this.renderCards()}

                <Link to="/cursos" className='btn btn-success btn-sm'>Voltar</Link>
            </Main>
        )


    }
}