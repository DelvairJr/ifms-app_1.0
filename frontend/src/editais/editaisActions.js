import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize } from 'redux-form'
import { selectTab, showTabs } from '../common/tab/tabActions'
import { environment } from '../common/enviroment'

const BASE_URL = environment.api.url
const INITIAL_VALUES = {}

export function getList() {
    const request = axios.get(`${BASE_URL}/notices`) //requisição GET ao servidor
    //retorna a Action com tipo e Payload que é o request
    return {
        type: 'EDITAIS_FETCHED',
        payload: request //possui o atributo DATA com os dados recebidos do servidor
    }
}

export function create(values) {
    return submit(values, 'post')
}

export function update(values) {
    return submit(values, 'put')
}

export function remove(values) {
    return submit(values, 'delete')
}

//função responsável por cadastrar, aterar e excluir recebendo por parametro qual ação sera realizada
function submit(values, method) {
    return dispatch => {
        //verifica se _id existe, caso não exista recebe uma string vazia
        const id = values._id ? values._id : ''
        //Concatena a url com o Id ou String vazia
        axios[method](`${BASE_URL}/notices/${id}`, values)
            .then(resp => {
                toastr.success('Sucesso. Operação realizada com sucesso.')
                //array de actions que serão disparados com o midlleware redux-multi
                dispatch(init())
            }).catch(e => {
                e.response.data.errors.forEach(error => toastr.error('Erro.', error))
            })
    }
}
//OBS REFATORAR ESTE MÉTODO
//Recebe o obj Professor como parametro
export function showUpdate(editais) {
    //Retorna um array de actions (Redux-multi)
    return [
        //Mostra somente a aba de alterar
        showTabs('tabUpdate'),
        //Deixa somente a aba de alterar ativa
        selectTab('tabUpdate'),
        //Inicializa o formulário passando os dados do professor por parametro
        initialize('editaisForm', editais)
    ]
}

export function showDelete(editais) {
    return [
        showTabs('tabDelete'),
        selectTab('tabDelete'),
        //Inicializa o formulário passando os dados do professor por parametro
        initialize('editaisForm', editais)
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
        initialize('editaisForm', INITIAL_VALUES)
    ]
}