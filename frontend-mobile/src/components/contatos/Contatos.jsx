import React, { Component } from 'react'
import axios from 'axios'

import Main from '../template/Main'
import Card from '../template/Card'
import consts from '../../assets/consts'

import InputField from '../template/InputField'

const headerProps = {
    icon: 'users',
    title: 'Contatos'
}

const baseUrl = consts.API_URL

export default class Contatos extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            contatos: []
        }

    }

    componentWillMount() {
        axios.get(`${baseUrl}/m-contatos`)
            .then(resp => {
                this.setState({ contatos: resp.data })
            })
    }

    renderCards(key, cont) {
        //  const lista = this.state.list

        return (
            <Card key={key} border='info'>
                <h5 class="card-title"> <i className="fa fa-id-card-o" /> {cont.nome}</h5>
                <p class="card-text"> <i className="fa fa-envelope" /> {cont.email}</p>
            </Card>
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
                        textPlaceholder='Digite o nome do contato...'
                        keyUp={this.handleSearch} />
                </div>
                <hr />
                {Object
                    .keys(this.state.contatos)
                    .map(key => {
                        if (this.state.contatos[key].nome.toUpperCase()
                            .includes(this.search.value.toUpperCase())) {
                            return this.renderCards(key, this.state.contatos[key])
                        }
                    })}
            </Main>
        )
    }
}
