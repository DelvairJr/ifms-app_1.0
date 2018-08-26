import { combineReducers } from 'redux'

import TabReducer from '../common/tab/tabReducer'
import ProfessoresReducer from '../professores/professoresReducer'

const rootReducer = combineReducers({
    tab: TabReducer,
    professores: ProfessoresReducer
})

export default rootReducer
