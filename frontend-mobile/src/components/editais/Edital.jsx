import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import Main from '../template/Main'
import consts from '../../assets/consts'

const headerProps = {
    icon: 'file-o',
    title: 'Edital'
}

const baseUrl = consts.API_URL

export default class Professores extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            list: []
        }

    }

    componentWillMount() {
        axios.get(`${baseUrl}/m-editais`)
            .then(resp => {
                this.setState({ list: resp.data })
            })
    }

    renderArquivos(arq) {

        console.log(typeof (arq))

        return arq.map((a, cont) => (
            <p class="card-text">
                <i className="fa fa-file-pdf-o" /> <a href={a}>{`Arquivo #${cont+1}`}</a>
            </p>
        ))

    }

    renderCards() {
        const lista = this.state.list

        return lista.map(e => (

            <div class="card border-primary mb-3" key={e._id}>
                <div class="card-body">
                    <h5 class="card-title"> <i className={`fa fa-${headerProps.icon}`} /> {e.titulo}</h5>

                    {this.renderArquivos(e.arquivos)}

                    <p class="card-text">
                        <i className="fa fa-external-link" /><a href={e.informacoes}>Mais informações...</a>
                    </p>


                </div>
            </div>

        ))
    }

    render() {
        console.log(this.state.list);

        return (
            <Main >
                <h5>
                    <i className={`fa fa-${headerProps.icon}`}></i>
                    <strong> {headerProps.title}</strong>
                </h5>

                <div class="form-group">
                    <label htmlFor="buscar">Buscar: </label>
                    <input type="text" id="buscar" className="form-control" placeholder="Digite o nome do edital..." />
                </div>
                <hr />
                {this.renderCards()}
            </Main>
        )
    }
}
