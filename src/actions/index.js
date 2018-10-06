import axios from 'axios';
import { toast } from 'react-toastify';

const ROOT_URL = 'http://localhost:9000/api';

export const ActionTypes = {
  FETCH_EVENTS: 'FETCH_EVENTS',
  REVIEW_EVENT: 'REVIEW_EVENT',
};

const TEST_DATA = [
  {
    name: 'test1',
    clubName: 'test2',
    description: 'test3',
    location: 'test4',
    startTime: 'test5',
    endTime: 'test6',
    date: 'test7',
    id: 'test8',
  },
  {
    name: 'test1',
    clubName: 'test1',
    description: 'test1',
    location: 'test1',
    startTime: 'test1',
    endTime: 'test1',
    date: 'test1',
    id: 'test1',
  },
  {
    name: 'test2',
    clubName: 'test2',
    description: 'test2',
    location: 'test2',
    startTime: 'test2',
    endTime: 'test2',
    date: 'test2',
    id: 'test2',
  },
];

export function fetchEvents(dateKey) {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/approved`, dateKey).then((response) => {
      dispatch({ type: ActionTypes.FETCH_EVENTS, payload: response.data });
    }).catch((error) => {
      toast.error('There was an issue communicating with our server');
      console.log(error);
    });
  };
}

export function createEvent(eventData, history) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/events`, eventData).then((response) => {
      toast.success('Event successfully submitted for review');
      history.push('/');
    }).catch((error) => {
      toast.error('There was an error when creating your event');
      console.log(error);
    });
  };
}

export function getReviewEvents() {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/review`).then((response) => {
      dispatch({ type: ActionTypes.REVIEW_EVENT, payload: response.data });
    }).catch((error) => {
      console.log(error);
    });
  };
}

export function approveEvent(id) {
  return (dispatch) => {
    axios.put(`${ROOT_URL}/approve/${id}`).then((response) => {
      toast.success('Approved event');
    }).catch((error) => {
      toast.error('Something went wrong!');
      console.log(error);
    });
  };
}

export function declineEvent(id) {
  return (dispatch) => {
    axios.put(`${ROOT_URL}/decline${id}`).then((response) => {
      toast.success('Declined event');
    }).catch((error) => {
      toast.error('Something went wrong!');
      console.log(error);
    });
  };
}
