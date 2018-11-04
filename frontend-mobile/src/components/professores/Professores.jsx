import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import Main from '../template/Main'
import consts from '../../assets/consts'

import PanelGroup from 'react-bootstrap/lib/PanelGroup'
import Panel from 'react-bootstrap/lib/Panel'
import PanelHeading from 'react-bootstrap/lib/PanelHeading'
import PanelTitle from 'react-bootstrap/lib/PanelTitle'
import PanelBody from 'react-bootstrap/lib/PanelBody'
import Collapse from 'react-bootstrap/lib/Collapse'
import Button from 'react-bootstrap/lib/Button'
import Well from 'react-bootstrap/lib/Well'

const headerProps = {
    icon: 'id-card-o',
    title: 'Professores'
}

const baseUrl = consts.API_URL

export default class Professores extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            list: [],
            search: ''
        }

    }

    componentWillMount() {
        axios.get(`${baseUrl}/m-professor`)
            .then(resp => {
                this.setState({ list: resp.data })
            })
    }

    renderCards(key, prof) {
        // const lista = this.state.list

        return (

            <div class="card border-success mb-3" key={prof._id}>
                <Link to={`/professores/${prof._id}`}>
                    <div class="card-body">
                        <h5 class="card-title"> <i className="fa fa-id-card-o" /> {prof.nome}</h5>
                        <p class="card-text"> <i className="fa fa-envelope" /> {prof.email}</p>

                    </div>
                </Link>
            </div>
        )
    }

    handleSearch = () => {
        this.setState({
            search: this.search.value
        })
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
                    <input type="text"
                        id="search"
                        ref={node => this.search = node}
                        className="form-control"
                        placeholder="Digite o nome do professor..."
                        onKeyUp={this.handleSearch} />
                </div>

                <hr />

                {Object
                    .keys(this.state.list)
                    .map(key => {
                        if (this.state.list[key].nome.toUpperCase()
                            .includes(this.search.value.toUpperCase())) {
                            return this.renderCards(key, this.state.list[key])
                        }
                    })}


            </Main>
        )
    }
}
