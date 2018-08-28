import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize } from 'redux-form'
import { selectTab, showTabs } from '../common/tab/tabActions'

const BASE_URL = 'http://localhost:3003/api/'
//http://localhost:3003/api/professores/
const INITIAL_VALUES = {}

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
                dispatc(init())
            }).catch(e => {
                e.response.data.errors.forEach(error => toastr.error('Erro.', error))
            })
    }
}
//Recebe o obj Professor como parametro
export function showUpdate(professores) {
    //Retorna um array de actions (Redux-multi)
    return [
        //Mostra somente a aba de alterar
        showTabs('tabUpdate'),
        //Deixa somente a aba de alterar ativa
        selectTab('tabUpdate'),
        //Inicializa o formulário passando os dados do professor por parametro
        initialize('professoresForm', professores)
    ]
}
//Função que inicializa/reseta o cadastro
export function init() {
    //Retorna um array de actions (Redux-multi)
    return [
        //Mostra as abas de cadastrar e atualizar
        showTabs('tabCreate', 'tabList'),
        //Ativa a aba de cadastro
        selectTab('tabList'),
        //Busca a lista atualizada do servidor
        getList(),
        //inicializa o formulário com os valores definidos na constante
        initialize('professoresForm', INITIAL_VALUES)
    ]
}