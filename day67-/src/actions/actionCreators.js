// add list
export function addList (listId, parentId, frontId, content) {
  return {
    type: 'ADD_LIST',
    parentId,
    frontId,
    listId,
    content
  }
}

// move list
export function moveList (listId, parentId, frontId) {
  return {
    type: 'MOVE_LIST',
    listId,
    parentId,
    frontId
  }
}

// remove list
export function removeList (listId) {
  return {
    type: 'REMOVE_LIST',
    listId
  }
}

// show list
export function showList (listId) {
  return {
    type: 'SHOW_LIST',
    listId
  }
}

// hide list
export function hideList (listId) {
  return {
    type: 'HIDE_LIST',
    listId
  }
}
