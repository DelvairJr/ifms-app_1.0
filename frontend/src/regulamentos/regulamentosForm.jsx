import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { init } from './regulamentosActions'
import labelAndInput from '../common/form/labelAndInput'

class RegulamentosForm extends Component {
    render() {
        const { handleSubmit, readOnly } = this.props
        return (
            <form role="form" onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field name="titulo" component={labelAndInput} readOnly={readOnly}
                        label="Título:" cols="12" placeholder="Informe o título" />
                    <Field name="caminho" component={labelAndInput} readOnly={readOnly}
                        label="Arquivos:" cols="12" placeholder="Link dos arquivos" />
                    <Field name="mais_informacoes" component={labelAndInput} readOnly={readOnly}
                        label="Mais informações:" cols="12" placeholder="Link do regulamento" />
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

RegulamentosForm = reduxForm({ form: 'regulamentosForm', destroyOnUnmount: false })(RegulamentosForm)
const mapDispachToProps = dispatch => bindActionCreators({ init }, dispatch)
export default connect(null, mapDispachToProps)(RegulamentosForm)

