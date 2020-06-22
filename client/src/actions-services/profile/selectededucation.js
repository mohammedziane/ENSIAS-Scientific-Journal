import axios from 'axios';

import { SELECTED_EDUCATION, PROFILE_ERROR } from '../types';
const API_URL = 'http://localhost:8080/api/educations/';

//Get education by id
export default function loadEducation(id) {
  return function (dispatch) {
    return axios.get(API_URL + id).then(
      (response) => {
        dispatch({
          type: SELECTED_EDUCATION,
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
