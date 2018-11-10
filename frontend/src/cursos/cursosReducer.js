const INITIAL_STATE = { list: [], provas: [] }

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'CURSOS_FETCHED':
            //evolui o estado da aplicação alterando somente o atributo LIST e mantendo o restantes
            return { ...state, list: action.payload.data }
        case 'PROVAS_FETCHED':
            //evolui o estado da aplicação alterando somente o atributo LIST e mantendo o restantes
            return { ...state, provas: action.payload.data }
        default:
            return state
    }
}