import axios from 'axios';
import loadUser from './LoadUser';
import store from '../../store';

import { REGISTER_SUCCESS, REGISTER_FAIL } from '../types';

const API_URL = 'http://localhost:8080/api/login/signup';

//Register User
export default function register(username, password, email) {
  return function (dispatch) {
    return axios
      .post(API_URL, {
        username,
        password,
        email,
      })
      .then(
        (response) => {
          dispatch({
            type: REGISTER_SUCCESS,
            payload: response.data,
          });
          dispatch(loadUser());
          return response.data;
        },
        (error) => {
          dispatch({
            type: REGISTER_FAIL,
          });
        }
      );
  };
}
