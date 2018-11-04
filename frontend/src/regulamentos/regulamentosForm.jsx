import React, { Component } from 'react'
import { reduxForm, Field, FieldArray } from 'redux-form'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { init } from './regulamentosActions'
import labelAndInput from '../common/form/labelAndInput'

class RegulamentosForm extends Component {

    
    renderArquivos({ fields }) {
        return (
            <div>
                <div className="form-group-row">
                    <button type="button" className="btn btn-info btn-form" onClick={() => fields.push()}>
                        Adicionar arquivo
                    </button>
                </div>
                {fields.map((arquivos, index) => (
                    <div key={index}>

                        <div className="form-group-row">
                            <Field
                                name={`${arquivos}.titulo`}
                                component={labelAndInput}
                                label='Titulo'
                                cols="12"
                                placeholder='Titulo' />

                            <Field
                                name={`${arquivos}.link`}
                                component={labelAndInput}
                                label="Link"
                                cols="12"
                                placeholder="Link do regulamento" />

                            <button

                                className="btn btn-danger btn-sm btn-form"
                                onClick={() => fields.remove(index)}>
                                Remover arquivo
                        </button>
                        </div>
                    </div>
                ))}

            </div>
        )
    }

    render() {
        const { handleSubmit, readOnly } = this.props
        return (
            <form role="form" onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field name="categoria" component={labelAndInput} readOnly={readOnly}
                        label="Categoria:" cols="12" placeholder="Informe a categoria" />

                     <FieldArray name="arquivos" component={this.renderArquivos} />
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

