const INITIAL_STATE = { list: [], cursos: [] }

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'CAPROVAS_FETCHED':
            //evolui o estado da aplicação alterando somente o atributo LIST e mantendo o restantes
            return { ...state, list: action.payload.data }
        case 'CR_FETCHED':
            return { ...state, cursos: action.payload.data }
        default:
            return state
    }
}