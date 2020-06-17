import axios from 'axios';
import store from '../store';
import loadUser from './LoadUser';
import { LOGIN_SUCCESS, LOGIN_FAIL } from './types';

const API_URL = 'http://localhost:8080/api/login';

//Login User
export default function login(username, password) {
  return function (dispatch) {
    return axios
      .post(API_URL + '/signin', {
        username,
        password,
      })
      .then(
        (response) => {
          dispatch({
            type: LOGIN_SUCCESS,
            payload: response.data,
          });
          dispatch(loadUser());
          return response.data;
        },
        (error) => {
          dispatch({
            type: LOGIN_FAIL,
          });
        }
      );
  };
}
/*
const login = ({ username, password }) => async (dispatch) => {
  return axios
    .post(API_URL + '/signin', {
      username,
      password,
    })
    .then((response) => {
      localStorage.setItem(
            'token',
            JSON.stringify(response.data.accessToken)
          );
      localStorage.setItem('type', JSON.stringify(response.data.tokenType));
      dispatch({
        type: LOGIN_SUCCESS,
        payload: response.data.accessToken,
      });

      return response.data;
    });
};

  register(username, password, email) {
    return axios.post(API_URL + '/signup', {
      username,
      password,
      email,
    });
  }
  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
*/
