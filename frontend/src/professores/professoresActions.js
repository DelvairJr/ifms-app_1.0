import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm } from 'redux-form'
import { selectTab, showTabs } from '../common/tab/tabActions'

const BASE_URL = 'http://localhost:3003/api/'
//http://localhost:3003/api/professores/

export function getList() {
    const request = axios.get(`${BASE_URL}/professores`) //requisição GET ao servidor
    //retorna a Action com tipo e Payload que é o request
    return {
        type: 'PROFESSORES_FETCHED',
        payload: request //possui o atributo DATA com os dados recebidos do servidor
    }
}

export function create(values) {
    return dispatc => {
        axios.post(`${BASE_URL}/professores`, values)
            .then(resp => {
                toastr.success('Sucesso. Operação realizada com sucesso.')
                //array de actions que serão disparados com o midlleware redux-multi
                dispatc([
                    //recebe o id do formulário
                    resetForm('professoresForm'),
                    getList(),
                    selectTab('tabList'),
                    showTabs('tabList', 'tabCreate')
                ])
            }).catch(e => {
                e.response.data.errors.forEach(error => toastr.error('Erro.', error))
            })
    }
}