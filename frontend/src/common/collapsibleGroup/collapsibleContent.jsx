import React from 'react'

export default props => (

    <div className="box-body">
        <div className="box-group" id={props.id}>
            <div className="panel box box-primary">
                {props.children}
            </div>
        </div>
    </div>


)
