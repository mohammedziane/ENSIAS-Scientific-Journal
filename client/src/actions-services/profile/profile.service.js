import axios from 'axios';

import { PROFILE_LOADED, AUTH_ERROR } from '../types';
import loadEducation from './geteducation';
const API_URL = 'http://localhost:8080/api/user/';

//Load Profile
export default function loadProfile() {
  if (localStorage.username) {
    const user = localStorage.username;
    return function (dispatch) {
      return axios.get(API_URL + user).then(
        (response) => {
          dispatch({
            type: PROFILE_LOADED,
            payload: response.data,
          });
          dispatch(loadEducation());
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
