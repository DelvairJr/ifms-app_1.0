import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import Main from '../template/Main'
import consts from '../../assets/consts'

const headerProps = {
    icon: 'file-text-o',
    title: 'Regulamentos'
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
        axios.get(`${baseUrl}/m-regulamentos`)
            .then(resp => {
                this.setState({ list: resp.data })
            })
    }


    renderCards() {
        const lista = this.state.list

        return lista.map(reg => (

            <div class="card border-primary mb-3" key={reg._id}>
                <Link to={`/regulamentos/${reg._id}`}>
                    <div class="card-body">
                        <h5 class="card-title"> <i className={`fa fa-${headerProps.icon}`} /> {reg.categoria}</h5>
                    </div>
                </Link>
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
                    <input type="text" id="buscar" className="form-control" placeholder="Digite o nome do regulamento..." />
                </div>
                <hr />
                {this.renderCards()}
            </Main>
        )
    }
}
