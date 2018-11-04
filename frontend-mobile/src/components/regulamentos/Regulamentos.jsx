import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import InputField from '../template/InputField'
import Main from '../template/Main'
import consts from '../../assets/consts'

const headerProps = {
    icon: 'file-text-o',
    title: 'Regulamentos'
}

const baseUrl = consts.API_URL

export default class Regulamentos extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            regulamentos: []
        }

    }

    componentWillMount() {
        axios.get(`${baseUrl}/m-regulamentos`)
            .then(resp => {
                this.setState({ regulamentos: resp.data })
            })
    }

    handleSearch = () => {
        this.setState({
            search: this.search.value
        })
    }

    renderCards(key, reg) {
        return (
            <div className="card border-primary  mb-3" key={reg._id}>
                <Link to={`/regulamentos/${reg._id}`} className="link-none">
                    <div className="card-body">
                        <h5 className="card-title"> <i className="fa fa-folder-o" /> {reg.categoria}</h5>
                    </div>
                </Link>
            </div>
        )
    }

    render() {
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
                        textPlaceholder='Digite o categoria do regulamento...'
                        keyUp={this.handleSearch} />
                </div>
                <hr />
                {Object
                    .keys(this.state.regulamentos)
                    .map(key => {
                        if (this.state.regulamentos[key].categoria.toUpperCase()
                            .includes(this.search.value.toUpperCase())) {
                            return this.renderCards(key, this.state.regulamentos[key])
                        }
                    })}
            </Main>
        )
    }
}
