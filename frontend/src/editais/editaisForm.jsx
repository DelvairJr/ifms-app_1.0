import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { init } from './editaisActions'
import labelAndInput from '../common/form/labelAndInput'

class EditaisForm extends Component {
    render() {
        const { handleSubmit, readOnly } = this.props
        return (
            <form role="form" onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field name="titulo" component={labelAndInput} readOnly={readOnly}
                        label="Título:" cols="12" placeholder="Informe o título" />
                    <Field name="arquivos" component={labelAndInput} readOnly={readOnly}
                        label="Arquivos:" cols="12" placeholder="Link dos arquivos" />
                    <Field name="informacoes" component={labelAndInput} readOnly={readOnly}
                        label="Mais informações:" cols="12" placeholder="Link do edital" />
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

EditaisForm = reduxForm({ form: 'editaisForm', destroyOnUnmoun: false })(EditaisForm)
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch)

export default connect(null, mapDispatchToProps)(EditaisForm)
