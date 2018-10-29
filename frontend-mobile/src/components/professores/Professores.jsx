import React, { Component } from 'react'
import axios from 'axios'

import Main from '../template/Main'
import consts from '../../assets/consts'

import '../template/jquery'
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
            open: true
        }

        this.renderCollapsible = this.renderCollapsible.bind(this);

    }

    componentWillMount() {
        axios.get(`${baseUrl}/m-professor`)
            .then(resp => {
                this.setState({ list: resp.data })
            })
    }

    renderRows() {
        //recebe a lista que veio do servidor ou uma lista vazia
        const lista = this.state.list

        return lista.map(prof => (
            <tr key={prof._id}>
                <td>{prof.nome}</td>
                <td>{prof.email}</td>
            </tr>
        ))
    }

    renderPanel(){
        return(
            <div>
        <Button onClick={() => this.setState({ open: !this.state.open })}>
          Click to toggle
        </Button>
        <br />
        <Panel id="collapsible-panel-example-1" expanded={this.state.open}>
          <Panel.Collapse>
            <Panel.Body>
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. Nihil anim keffiyeh
              helvetica, craft beer labore wes anderson cred nesciunt sapiente
              ea proident.
            </Panel.Body>
          </Panel.Collapse>
        </Panel>
      </div>
        )
    }
    renderCollapsible() {
        const lista = this.state.list 

        return lista.map(prof => (

            <Panel eventKey={prof._id} key={prof._id}>
                <PanelHeading>
                    <PanelTitle toggle>{prof.nome}</PanelTitle>
                </PanelHeading>
                <PanelBody collapsible>

                    <h6>Email: {prof.email}</h6>
                </PanelBody>
            </Panel>))
    }

    render() {
        console.log(this.state.list);

        return (
            <Main {...headerProps}>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
                <PanelGroup accordion id="pn-group">
                    {this.renderCollapsible()}
                </PanelGroup>
            </Main>
        )
    }
}
