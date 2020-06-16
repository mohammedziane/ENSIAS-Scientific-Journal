import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
} from '../actions-services/types';

const initialState = {
  id_user: localStorage.getItem('id_user'),
  email: localStorage.getItem('email'),
  username: localStorage.getItem('username'),
  isLoaded: false,
};
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case USER_LOADED:
      localStorage.setItem('id_user', payload.id_user);
      localStorage.setItem('email', payload.email);
      localStorage.setItem('username', payload.username);
      return {
        ...state,
        ...payload,
        isLoaded: true,
      };
    case AUTH_ERROR:
      localStorage.removeItem('id_user');
      localStorage.removeItem('email');
      localStorage.removeItem('username');
      return {
        ...state,
        isLoaded: false,
      };
    default:
      return state;
  }
}
