import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'

import TabReducer from '../common/tab/tabReducer'
import ProfessoresReducer from '../professores/professoresReducer'
import EditaisReducer from '../editais/editaisReducer'
import CaProvasReducer from '../calendarioDeProvas/caProvasReducer'
import CursosReducer from '../cursos/cursosReducer'

const rootReducer = combineReducers({
    tab: TabReducer,
    professores: ProfessoresReducer,
    editais: EditaisReducer,
    caprovas: CaProvasReducer,
    cursos: CursosReducer,
    form: formReducer,
    toastr: toastrReducer
})

export default rootReducer
