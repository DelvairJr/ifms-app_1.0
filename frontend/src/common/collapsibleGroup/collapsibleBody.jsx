import React from 'react'

export default props => (
    <div>
        <div className="box-header with-border">
            <h4 className="box-title">
                <a href='javascript:;'
                    data-toggle='collapse'
                    //Passa por parametro o Id da Aba a ser exibida
                    //onClick={() => this.props.selectCollapsible(this.props.parent)}
                    //data-parent={this.props.parent}
                    >

                    {props.title}

                    </a>
                </h4>
        </div>
        <div id={props.id} class="panel-collapse collapse in">
            <div class="box-body">
                {props.children}
            </div>
        </div>
    </div>
)