const INITIAL_STATE = { list: [], professores: [] }

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'HORARIOPE_FETCHED':
            //evolui o estado da aplicação alterando somente o atributo LIST e mantendo o restantes
            return { ...state, list: action.payload.data }
        case 'PROF_FETCHED':
            return { ...state, professores: action.payload.data }
        default:
            return state
    }
}