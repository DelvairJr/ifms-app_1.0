import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import Main from '../template/Main'
import consts from '../../assets/consts'

const headerProps = {
    icon: 'id-card-o',
    title: 'Professores'
}

const baseUrl = consts.API_URL

export default class Professor extends Component {
    constructor(props) {
        super(props)
        this.state = {
            professor: []
        }
    }

    componentWillMount() {
        console.log(this.props.match.params.id)

        if (this.props.match.params.id) {
            axios.get(`${baseUrl}/m-professor/${this.props.match.params.id}`)
                .then(resp => {
                    this.setState({ professor: resp.data })
                })
        }

    }



    render() {
        console.log(this.state.professor);

        return (
            <Main {...headerProps}>
                <Link to={"/professores"} className="btn btn-link btn-lg">Professores</Link>
            </Main>
        )
    }
}
