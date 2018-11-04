import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


import InputField from '../template/InputField'
import Main from '../template/Main'
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
            })
    }


    renderCards(key, c) {
        return (
            <div class="card border-success mb-3" key={key}>
                <Link to={`/cursos/${c._id}`} className="link-none">
                    <div class="card-body">
                        <h5 class="card-title">
                            <i className={`fa fa-${headerProps.icon}`} /> {c.nome}
                        </h5>
                        <h6><i className={`fa fa-${headerProps.icon}`} />{c.abreviado}</h6>
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
