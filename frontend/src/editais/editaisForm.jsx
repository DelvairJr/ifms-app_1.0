import React, { Component } from 'react'
import { reduxForm, Field, FieldArray } from 'redux-form'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { init } from './editaisActions'
import labelAndInput from '../common/form/labelAndInput'

class EditaisForm extends Component {

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
                                name={arquivos}
                                component={labelAndInput}
                                label={`Arquivo #${index + 1}`}
                                cols="12"
                                placeholder={`Arquivo #${index + 1}`} />

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
        //this.handleInput()
        const { handleSubmit, readOnly } = this.props
        return (
            <form role="form" onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field name="titulo" component={labelAndInput} readOnly={readOnly}
                        label="Título:" cols="12" placeholder="Informe o título" />

                    <Field name="informacoes" component={labelAndInput} readOnly={readOnly}
                        label="Mais informações:" cols="12" placeholder="Link do edital" />

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


EditaisForm = reduxForm({ form: 'editaisForm', destroyOnUnmount: false })(EditaisForm)
const mapDispachToProps = dispatch => bindActionCreators({ init }, dispatch)
export default connect(null, mapDispachToProps)(EditaisForm)
