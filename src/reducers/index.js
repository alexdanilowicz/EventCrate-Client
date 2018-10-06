import { combineReducers } from 'redux';

import UserReducer from './userReducer';
import ReviewReducer from './reviewReducer';

const rootReducer = combineReducers({
  user: UserReducer,
  review: ReviewReducer,
});

export default rootReducer;
