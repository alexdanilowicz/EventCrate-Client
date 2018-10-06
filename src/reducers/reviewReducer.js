import { ActionTypes } from '../actions';

const ReviewReducer = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.REVIEW_EVENT:
      return Object.assign({}, state, { events: action.payload });
    default:
      return state;
  }
};

export default ReviewReducer;
