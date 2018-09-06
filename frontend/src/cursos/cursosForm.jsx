import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { init } from './cursosActions'
import labelAndInput from '../common/form/labelAndInput'
//tag FIELD responsável por armazenar o estado dos inputs
class CursosForm extends Component {
    render() {
        //função disponível após decorar o component com redux-form
        const { handleSubmit, readOnly } = this.props
        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field name='nome' component={labelAndInput} readOnly={readOnly}
                        label="Nome:" cols="12 6" placeholder="Informe o Nome" />
                    <Field name='abreviado' component={labelAndInput} readOnly={readOnly}
                        label="Sigla:" cols="12 6" placeholder="Informe a sigla" />
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
CursosForm = reduxForm({ form: 'cursosForm', destroyOnUnmount: false })(CursosForm)
const mapDispachToProps = dispatch => bindActionCreators({ init }, dispatch)
export default connect(null, mapDispachToProps)(CursosForm)
