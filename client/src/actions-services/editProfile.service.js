import axios from 'axios';
import { PROFILE_UPDATED, AUTH_ERROR, EDIT_PROFILE } from './types';
import loadProfile from './profile.service';
import store from '../store';
const API_URL = 'http://localhost:8080/api/profile/';

//Update Profile
export default function editp(
  gender,
  company,
  website,
  location,
  status,
  skills,
  bio,
  github
) {
  if (localStorage.username) {
    const username = localStorage.username;
    return function (dispatch) {
      return axios
        .post(API_URL + username, {
          gender,
          company,
          website,
          location,
          status,
          skills,
          bio,
          github,
        })
        .then(
          (response) => {
            dispatch({
              type: PROFILE_UPDATED,
              payload: response.data,
            });
            dispatch(loadProfile());
            return response.data;
          },
          (error) => {
            dispatch({
              type: EDIT_PROFILE,
            });
          }
        );
    };
  }
}
