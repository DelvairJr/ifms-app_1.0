import React, { Component } from 'react'
import axios from 'axios'

import Main from '../template/Main'
import consts from '../../assets/consts'

const headerProps = {
    icon: 'file-text-o',
    title: 'Regulamentos'
}

const baseUrl = consts.API_URL
export default class Regulamento extends Component {
    constructor(props) {
        super(props)
        this.state = {
            regulamento: []
        }
    }

    componentWillMount() {
        if (this.props.match.params.id) {
            axios.get(`${baseUrl}/m-regulamentos/${this.props.match.params.id}`)
                .then(resp => {
                    this.setState({ regulamento: resp.data })
                })
        }
    }

    renderCards() {
        const lista = this.state.regulamento

        return lista.map(reg => (

            <div class="card border-primary mb-3" key={reg._id}>
           
                    <div class="card-body">
                        <h5 class="card-title"> <i className={`fa fa-${headerProps.icon}`} /> {reg.categoria}</h5>
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
                    <input type="text" id="buscar" className="form-control" placeholder="Digite o nome do regulamento..." />
                </div>
                <hr />
                {this.renderCards()}
            </Main>
        )
    }
}
