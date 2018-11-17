import React, { Component } from 'react'
import { reduxForm, Field, change } from 'redux-form'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { init, getCursos } from './caProvasActions'
import labelAndInput from '../common/form/labelAndInput'
import labelAndSelect from '../common/form/labelAndSelect'

class CaProvasForm extends Component {

    componentWillMount() {
        this.props.getCursos()
    }

    renderOptionsCursos() {
        //recebe a lista de professores e salva em uma constante
        const listCursos = this.props.cursos || []
        //percorre a lista de professores retornando um elemento OPTION para o SELECT
        return listCursos.map(c => (
            <option key={c._id} value={c.nome}>{c.nome}</option>
        ))
    }

    render() {
        //função disponível após decorar o component com redux-form
        const { handleSubmit, readOnly } = this.props
        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field name='curso' component={labelAndSelect} readOnly={readOnly}
                        label="Curso:" cols="12 6" placeholder="Informe o curso" options={this.renderOptionsCursos()} />

                    <Field name="semestre" component={labelAndInput} readOnly={readOnly}
                        label="Semestre:" cols="12 2" type="number" />

                    <Field name="dataProva" component={labelAndInput} readOnly={readOnly}
                        label="Data da Prova:" cols="12 3" placeholder="Data" type="date" />

                    <Field name="disciplina" component={labelAndInput} readOnly={readOnly}
                        label="Disciplina:" cols="12 6" placeholder="Disciplina" />
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

CaProvasForm = reduxForm({ form: 'caProvasForm', destroyOnUnmount: false })(CaProvasForm)
const mapStateToProps = state => ({ cursos: state.caprovas.cursos })
const mapDispachToProps = dispatch => bindActionCreators({ init, getCursos }, dispatch)
export default connect(mapStateToProps, mapDispachToProps)(CaProvasForm)


