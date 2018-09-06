const INITIAL_STATE = { list: [] }

export default (state = INITIAL_STATE, action) => {
    
    switch (action.type) {
        
        case 'CAPROVAS_FETCHED':
        const strToDate = new Date(action.payload.data.dataProva)
            //evolui o estado da aplicação alterando somente o atributo LIST e mantendo o restantes
            
            return { ...state, list: action.payload.data }
        default:
            return state
    }
}