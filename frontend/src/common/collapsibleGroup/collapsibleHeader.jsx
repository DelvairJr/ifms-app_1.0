import React, { Component } from 'react'

export default class CollapsibleHeader extends Component {
    render() {
        return (
            <div className="box-header with-border">
                <h4 className="box-title">
                     <a href='javascript:;'
                        data-toggle='collapse'
                        //Passa por parametro o Id da Aba a ser exibida
                        onClick={() => this.props.selectCollapsible(this.props.parent)}
                        data-parent={this.props.parent}>

                        {this.props.title}  

                    </a>
                </h4>
            </div>
        )
    }
}
