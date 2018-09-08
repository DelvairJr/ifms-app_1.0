import React, { Component } from 'react'
import { reduxForm, Field, FieldArray } from 'redux-form'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { init } from './editaisActions'
import labelAndInput from '../common/form/labelAndInput'

class EditaisForm extends Component {

    renderMembers({ fields, meta: { error, submitFailed } }){
        return(
        <ul>
            <li>
                <button type="button" onClick={() => fields.push({})}>
                    Add Member
            </button>
            </li>
            {fields.map((arquivos, index) => (
                <li key={index}>
                    <button
                        type="button"
                        title="Remove Member"
                        onClick={() => fields.remove(index)}
                    />
                    
                    <Field name={arquivos} component={labelAndInput} 
                        label="Arquivos:" cols="12" placeholder="Link dos arquivos" />
                    
                </li>
            ))}
        </ul>)
    }

    render() {
        //this.handleInput()
        const { handleSubmit, readOnly } = this.props
        return (
            <form role="form" onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field name="titulo" component={labelAndInput} readOnly={readOnly}
                        label="Título:" cols="12" placeholder="Informe o título" />
                   
                    <Field name="informacoes" component={labelAndInput} readOnly={readOnly}
                        label="Mais informações:" cols="12" placeholder="Link do edital" />
                    <FieldArray name="arquivos" component={this.renderMembers} />
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


EditaisForm = reduxForm({ form: 'editaisForm', destroyOnUnmount: false })(EditaisForm)
const mapDispachToProps = dispatch => bindActionCreators({ init }, dispatch)
export default connect(null, mapDispachToProps)(EditaisForm)
