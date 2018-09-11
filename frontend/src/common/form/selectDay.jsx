import React from 'react'

import Grid from '../layout/grid'

export default props => (
    <Grid cols={props.cols}>
        <div className="form-group">
            <label htmlFor={props.name}>{props.label}</label>

            <select {...props.input} className="form-control">
                <option value="Segunda-Feira">Segunda</option>
                <option value="Terça-Feira">Terça</option>
                <option value="Quarta-Feira">Quarta</option>
                <option value="Quinta-Feira">Quinta</option>
                <option value="Sexta-Feira">Sext</option>
            </select>
        </div>



    </Grid>
)