const userKey = '_ifms_user' //chave armazenada no localstorage

const INITIAL_STATE = {
    user: JSON.parse(localStorage.getItem(userKey)),
    validToken: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'TOKEN_VALIDATED':
            if (action.payload) {
                return { ...state, validToken: true }
            } else {//se o token for falso
                //remove o token do localstorage
                localStorage.removeItem(userKey)
                //deixa o usuário como nulo
                return { ...state, validToken: false, user: null }
            }
        case 'USER_FETCHED':
            localStorage.setItem(userKey, JSON.stringify(action.payload))
            return { ...state, user: action.payload, validToken: true }
        default:
            return state
    }
}