import axios from 'axios';
import { toast } from 'react-toastify';

const ROOT_URL = 'localhost:9000/api';

export const ActionTypes = {
};

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

// export function signUpAdmin(user, history) {
//   return (dispatch) => {
//     axios.post(`${ROOT_URL}/admin/signup`, user).then((response) => {
//       dispatch({ type: ActionTypes.AUTH_ADMIN, payload: response.data });
//       history.push('/');
//     }).catch((error) => {
//       console.log(error);
//     });
//   };
// }
//
// export function signInAdmin({ username, password }, history) {
//   return (dispatch) => {
//     axios.post(`${ROOT_URL}/admin/signin`, { username, password }).then((response) => {
//       dispatch({ type: ActionTypes.AUTH_ADMIN, payload: { username: response.data.username } });
//       toast.success(`Logged in as ${response.data.username}`);
//       history.push('/');
//     }).catch((error) => {
//       toast.error('Incorrect username or password');
//     });
//   };
// }
