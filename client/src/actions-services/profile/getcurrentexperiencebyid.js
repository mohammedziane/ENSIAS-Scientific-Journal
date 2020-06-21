import axios from 'axios';

import { GET_EXPERIENCE, PROFILE_ERROR } from '../types';
const API_URL = 'http://localhost:8080/api/experiences/';

//Load Experience
export default function loadExperience(id) {
  return function (dispatch) {
    return axios.get(API_URL + id).then(
      (response) => {
        dispatch({
          type: GET_EXPERIENCE,
          payload: response.data,
        });
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
