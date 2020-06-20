import axios from 'axios';
import setAuthToken from '../../assistant/setAuthToken';
import store from '../../store';

import { ADD_EXPERIECE, PROFILE_ERROR } from '../types';
import loadProfile from '../profile/profile.service';

const API_URL = 'http://localhost:8080/api/experience/';

//ADD EXPERIENCE
export default function addExp(
  title,
  company,
  location,
  from,
  to,
  current,
  description
) {
  if (localStorage.username) {
    return function (dispatch) {
      return axios
        .post(API_URL + localStorage.username, {
          title,
          company,
          location,
          from,
          to,
          current,
          description,
        })
        .then(
          (response) => {
            dispatch({
              type: ADD_EXPERIECE,
              payload: response.data,
            });
            store.dispatch(loadProfile());

            return response.data;
          },
          (error) => {
            dispatch({
              type: PROFILE_ERROR,
            });
          }
        );
    };
  }
}
