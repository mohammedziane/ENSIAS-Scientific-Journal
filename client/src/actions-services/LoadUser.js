import axios from 'axios';
import setAuthToken from '../assistant/setAuthToken';
import store from '../store';

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
} from './types';
import loadProfile from './profile.service';

const API_URL = 'http://localhost:8080/api/user';

//LOAD USER
export default function loadUser() {
  if (localStorage.accessToken && localStorage.tokenType) {
    setAuthToken(localStorage.accessToken);
    return function (dispatch) {
      return axios.get(API_URL + '/me').then(
        (response) => {
          dispatch({
            type: USER_LOADED,
            payload: response.data,
          });
          dispatch(loadProfile());

          return response.data;
        },
        (error) => {
          dispatch({
            type: AUTH_ERROR,
          });
        }
      );
    };
  }
}
