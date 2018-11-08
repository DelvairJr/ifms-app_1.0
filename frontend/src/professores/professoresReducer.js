const INITIAL_STATE = { list: [], horario:[] }

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'PROFESSORES_FETCHED':
            //evolui o estado da aplicação alterando somente o atributo LIST e mantendo o restantes
            return { ...state, list: action.payload.data }
        case 'HORARIO_FETCHED':
            //evolui o estado da aplicação alterando somente o atributo LIST e mantendo o restantes
            return { ...state, horario: action.payload.data }
        default:
            return state
    }
}