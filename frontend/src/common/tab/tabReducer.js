const INTIAL_STATE = { selected: '' }

export default (state = INTIAL_STATE, action) => {
    switch (action.type) {
        case 'TAB_SELECTED':
            return { ...state, selected: action.payload }
        //case 'TAB_SHOWED':
         //   return { ...state, visible: action.payload }
        default:
            return state
    }
}