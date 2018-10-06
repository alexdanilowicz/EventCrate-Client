import { combineReducers } from 'redux';

import ReviewReducer from './reviewReducer';
import EventsReducer from './eventsReducer';

const rootReducer = combineReducers({
  events: EventsReducer,
  review: ReviewReducer,
});

export default rootReducer;
