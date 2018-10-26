import * as types from '../constants/ActionTypes';

const users = (state = [], action) => {
  switch (action.type) {
    case types.ADD_USER:
    const data = {
      name: action.name,
      id: action.id
    }
      return [...state, data];
    case types.USERS_LIST:
      return action.users;
    default:
      return state;
  }
}

export default users;