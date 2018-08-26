import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
//tag FIELD responsável por armazenar o estado dos inputs
class ProfessoresForm extends Component {
    render() {
        //função disponível após decorar o component com redux-form
        const { handleSubmit } = this.props
        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field name='nome' component='input' />
                    <Field name='email' component='input' />
                </div>
                <div className="box-footer">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        )
    }
}

export default reduxForm({ form: 'professoresForm' })(ProfessoresForm)
