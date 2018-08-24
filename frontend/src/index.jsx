import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import promise from 'redux-promise'

import App from './main/app'
import reducers from './main/reducers'

//const devTools = window._REDUX_DEVTOOLS_EXTENSION__
//  && window.__REDUX_DEVTOOLS_EXTENSION__()
//const store = applyMiddleware(promise)(createStore)(combineReducers, devTools)
const store = createStore(reducers)
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('app'))