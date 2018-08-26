import axios from 'axios'

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