import { toastr } from 'react-redux-toastr'
import axios from 'axios'
import consts from '../consts'

//Método de login
export function login(values) {
    return submit(values, ` ${consts.OAPI_URL}/login`)
}
//Método para cadastro
export function signup(values) {
    return submit(values, ` ${consts.OAPI_URL}/signup`)
}

//Método para submeter os formulários 
function submit(values, url) {
    return dispatch => {
        axios.post(url, values)
            .then(resp => {
                dispatch([
                    //se a resposta for ok vai ser disparada a ação com o payload sendo o usuário obtido
                    { type: 'USER_FETCHED', payload: resp.data }
                ])
            })
            .catch(e => {
                e.response.data.errors.forEach(
                    error => toastr.error('Erro', error))
            })
    }
}
//Método para sair da aplicação
export function logout() {
    //dispara a ação de Validar o token com o valor falso
    return { type: 'TOKEN_VALIDATED', payload: false }
}
//Método que valida o token
export function validateToken(token) {
    return dispatch => {
        //verifica se o token foi recebido por parametro
        if (token) {
            //submete o token para o backend
            axios.post(` ${consts.OAPI_URL}/validateToken`, { token })
                .then(resp => {
                    //recebe uma resposta com valor falso ou verdadeiro do backend
                    dispatch({ type: 'TOKEN_VALIDATED', payload: resp.data.valid })
                })
                .catch(e => dispatch({ type: 'TOKEN_VALIDATED', payload: false }))
        } else {
            dispatch({ type: 'TOKEN_VALIDATED', payload: false })
        }
    }
}