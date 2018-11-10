import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { init } from './contatosActions'
import labelAndInput from '../common/form/labelAndInput'
//tag FIELD responsável por armazenar o estado dos inputs
class ContatosForm extends Component {
   
    render() {
        //função disponível após decorar o component com redux-form
        const { handleSubmit, readOnly } = this.props
      
        return (

            <form role='form' onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field name='nome' component={labelAndInput} readOnly={readOnly}
                        label="Nome:" cols="12 6" placeholder="Informe o Nome" />
                    <Field name='email' component={labelAndInput} readOnly={readOnly}
                        label="Email:" cols="12 6" placeholder="Informe o Email" />
                </div>
                <div className="box-footer">
                    <button type="submit" className={`btn btn-${this.props.submitClass}`}>
                        {this.props.submitLabel}
                    </button>
                    <button type="button" className="btn btn-default"
                        onClick={this.props.init}>Cancelar</button>
                </div>
            </form>
        )
    }
}
ContatosForm = reduxForm({ form: 'contatosForm', destroyOnUnmount: false })(ContatosForm)
const mapDispachToProps = dispatch => bindActionCreators({ init }, dispatch)
export default connect(null, mapDispachToProps)(ContatosForm)
