import axios from 'axios';

import { GET_EDUCATION, PROFILE_ERROR } from '../types';
const API_URL = 'http://localhost:8080/api/educations/';

//Load Current User Education by id
export default function loadEducation(id) {
  return function (dispatch) {
    return axios.get(API_URL + id).then(
      (response) => {
        dispatch({
          type: GET_EDUCATION,
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
