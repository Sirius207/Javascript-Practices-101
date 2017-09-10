import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import list from './list'

const rootReducer = combineReducers({ list, routing: routerReducer })

export default rootReducer
