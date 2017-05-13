import { createStore, combineReducers } from 'redux'
import modal from './modal'
import sidebar from './sidebar'

const rootReducer = combineReducers({
  modal,
  sidebar
})

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
