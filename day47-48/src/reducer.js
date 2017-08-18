import { combineReducers } from 'redux'
import { ADD_ITEM, DEL_ITEM, INIT_ITEMS } from './actionTypes'

function items(state = [], action) {
  switch (action.type) {
    case ADD_ITEM:
      {
        return [{
          id: action.id,
          text: action.text,
        }, ...state]
      }

    case DEL_ITEM:
      {
        return state.filter(item => item.id !== action.id)
      }

    case INIT_ITEMS:
      {
        return [...action.items]
      }

    default:
      return state
  }
}

const itemApp = combineReducers({ items })

export default itemApp