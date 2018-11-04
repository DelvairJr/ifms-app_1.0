import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import Main from '../template/Main'
import consts from '../../assets/consts'

const headerProps = {
    icon: 'folder-o',
    title: ''
}

const baseUrl = consts.API_URL

export default class Regulamento extends Component {
    constructor(props) {
        super(props)
        this.state = {
            lsReg: []
        }
    }


    componentWillMount() {
        if (this.props.match.params.id) {
            axios.get(`${baseUrl}/m-regulamentos/${this.props.match.params.id}`)
                .then(resp => {
                    this.setState({ lsReg: resp.data })
                })
        }
    }

    renderArquivos(arquivos) {
        const ls = arquivos || []

        return ls.map((arq, key) => (
            <li key={key}><i className="fa fa-file-text-o" /> <a href={arq.link}>{arq.titulo}</a></li>
        ))
    }

    renderCards() {

        const ls = this.state.lsReg

        return (

            <div class="card border-primary mb-3" key={ls._id}>

                <div class="card-body">
                    <ul>
                        {this.renderArquivos(ls.arquivos)}
                    </ul>
                </div>

            </div>
        )


    }

    render() {
        headerProps.title = this.state.lsReg.categoria
        return (
            <Main >
                <h5>
                    <i className={`fa fa-${headerProps.icon}`}></i>
                    <strong> {headerProps.title}</strong>
                </h5>

                <div class="form-group">
                    <label htmlFor="buscar">Buscar: </label>
                    <input type="text" id="buscar" className="form-control" placeholder="Digite o nome do regulamento..." />
                </div>
                <hr />

                {
                    this.renderCards()
                }

                <Link to="/regulamentos">Regulamentos</Link>
            </Main>
        )
    }
}
