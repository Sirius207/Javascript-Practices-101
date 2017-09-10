function postLists (state = [], action) {
  switch (action.type) {
    case 'ADD_LIST':
      return [...state, {
        parentId: action.parentId,
        frontId: action.frontId,
        listId: action.listId,
        content: action.content
      }]
    case 'REMOVE_LIST':
      return [
        ...state.filter(list => list.listId !== action.listId)
      ]
    default:
      return state
  }
}

function lists (state = [], action) {
  if (typeof action.postId !== 'undefined') {
    return {
      ...state,
      [action.postId]: postLists(state[action.postId], action)
    }
  }
  return state
}

export default lists
