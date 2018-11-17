import React, { Component } from 'react'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { init, getProfessores } from './horarioDePeActions'
import labelAndInput from '../common/form/labelAndInput'
import labelAndSelect from '../common/form/labelAndSelect'
import selectDay from '../common/form/selectDay'
class HorarioDePeForm extends Component {

    componentWillMount() {
        this.props.getProfessores()
    }

    renderOptionsProfessores() {
        //recebe a lista de professores e salva em uma constante
        const listProfessores = this.props.professores || []
        //percorre a lista de professores retornando um elemento OPTION para o SELECT
        return listProfessores.map(p => (
            <option key={p._id} value={p.nome}>{p.nome}</option>
        ))
    }

    render() {

        //função disponível após decorar o component com redux-form
        const { handleSubmit, readOnly } = this.props
        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field name='dia_semana' component={selectDay} readOnly={readOnly}
                        label="Dia:" cols="12 6" />

                    <Field name='hrs_inicio' component={labelAndInput} readOnly={readOnly}
                        label="Inicio:" cols="12 6" type="time" />
                    <Field name='hrs_final' component={labelAndInput} readOnly={readOnly}
                        label="Final:" cols="12 6" type="time" />
                    <Field name='local' component={labelAndInput} readOnly={readOnly}
                        label="Local:" cols="12 6" placeholder="Local" />
                    <Field name='professor' component={labelAndSelect} readOnly={readOnly}
                        label="Professor:" cols="12 6" placeholder="Professor" options={this.renderOptionsProfessores()} />
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
HorarioDePeForm = reduxForm({ form: 'horarioPeForm', destroyOnUnmount: false })(HorarioDePeForm)
const mapStateToProps = state => ({ professores: state.horarioDePe.professores })
const mapDispachToProps = dispatch => bindActionCreators({ init, getProfessores }, dispatch)
export default connect(mapStateToProps, mapDispachToProps)(HorarioDePeForm)
