import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { init } from './caProvasActions'
import labelAndInput from '../common/form/labelAndInput'

class CaProvasForm extends Component {
    render() {
        const { handleSubmit, readOnly } = this.props
        return (
            <form role="form" onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field name="curso" component={labelAndInput} readOnly={readOnly}
                        label="Curso:" cols="12 4" placeholder="Informe o curso" />

                    <Field name="semestre" component={labelAndInput} readOnly={readOnly}
                        label="Semestre:" cols="12 2" placeholder="Semestre" type="number" />

                    <Field name="dataProva" component={labelAndInput} readOnly={readOnly}
                        label="Data da Prova:" cols="12 2" placeholder="Data" type="date" />

                    <Field name="disciplina" component={labelAndInput} readOnly={readOnly}
                        label="Disciplina:" cols="12 4" placeholder="Disciplina" />
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

CaProvasForm = reduxForm({ form: 'caProvasForm', destroyOnUnmoun: false })(CaProvasForm)
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch)

export default connect(null, mapDispatchToProps)(CaProvasForm)
