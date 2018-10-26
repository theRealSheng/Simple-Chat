import * as types from '../constants/ActionTypes'

const messages = (state = [], action) => {
  switch (action.type) {
    case types.ADD_MESSAGE:
    case types.MESSAGE_RECEIVED:
    const data = {
        message: action.message,
        author: action.author,
        id: action.id
    }
      return [...state, data];
    default:
      return state
  }
}

export default messages