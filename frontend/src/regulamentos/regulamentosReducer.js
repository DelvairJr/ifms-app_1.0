const INITIAL_STATE = { list: [] }

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'REGULAMENTOS_FETCHED':
            //evolui o estado da aplicação alterando somente o atributo LIST e mantendo o restantes
            return { ...state, list: action.payload.data }
        default:
            return state
    }
}