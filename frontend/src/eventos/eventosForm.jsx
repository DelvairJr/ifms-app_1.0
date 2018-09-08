import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { init } from './eventosActions'
import labelAndInput from '../common/form/labelAndInput'

class EventosForm extends Component {
    render() {
        //função disponível após decorar o component com redux-form
        const { handleSubmit, readOnly } = this.props
        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field name="nome" component={labelAndInput} readOnly={readOnly}
                        label="Nome:" cols="12 4" placeholder="Informe o nome do evento" />

                    <Field name="data" component={labelAndInput} readOnly={readOnly}
                        label="Data do Evento:" cols="12 4" placeholder="Data" type="date" />

                    <Field name="descriacao" component={labelAndInput} readOnly={readOnly}
                        label="Descrição:" cols="12 4" placeholder="Descrição do evento" type="text-area" />
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

EventosForm = reduxForm({ form: 'eventosForm', destroyOnUnmount: false })(EventosForm)
const mapDispachToProps = dispatch => bindActionCreators({ init }, dispatch)
export default connect(null, mapDispachToProps)(EventosForm)
