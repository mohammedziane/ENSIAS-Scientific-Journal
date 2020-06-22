import axios from 'axios';

import { SELECTED_EXPERIENCE, PROFILE_ERROR } from '../types';
const API_URL = 'http://localhost:8080/api/educations/';

//Load Education
export default function loadEducation(id) {
  return function (dispatch) {
    return axios.get(API_URL + id).then(
      (response) => {
        dispatch({
          type: SELECTED_EXPERIENCE,
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
