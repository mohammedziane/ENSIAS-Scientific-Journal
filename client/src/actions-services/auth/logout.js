import { LOGOUT } from '../types';

export default function logout() {
  return function (dispatch) {
    return dispatch({
      type: LOGOUT,
    });
  };
}
