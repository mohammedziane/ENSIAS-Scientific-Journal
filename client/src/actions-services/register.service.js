import axios from 'axios';
import setAlert from './alert';

import { REGISTER_SUCCESS, REGISTER_FAIL } from './types';

const API_URL = 'http://localhost:8080/api/login';

//Register User
export default function register(username, password, email) {
  return function (dispatch) {
    return axios
      .post(API_URL + '/signup', {
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
        },
        (error) => {
          const errors = error.response.data.errors;
          if (errors) {
            errors.forEach((error) => {
              dispatch(setAlert(error.msg, 'danger'));
            });
          }
          dispatch({
            type: REGISTER_FAIL,
          });
        }
      );
  };
}
