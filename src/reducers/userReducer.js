import { ActionTypes } from '../actions';

/*
PAYLOAD:
{
  loggedIn: bool
  display: STRING
  admin: BOOL
}
*/

const UserReducer = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.AUTH_ADMIN:
      return Object.assign({}, state, { user: action.payload.data });
    default:
      return state;
  }
};

export default UserReducer;
