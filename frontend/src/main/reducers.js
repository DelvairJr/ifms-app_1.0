import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'

import TabReducer from '../common/tab/tabReducer'
import ProfessoresReducer from '../professores/professoresReducer'

const rootReducer = combineReducers({
    tab: TabReducer,
    professores: ProfessoresReducer,
    form: formReducer,
    toastr: toastrReducer
})

export default rootReducer
