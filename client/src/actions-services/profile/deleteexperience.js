import axios from 'axios';
import { PROFILE_ERROR, DELETE_EXPERIENCE } from '../types';

const API_URL = 'http://localhost:8080/api/experience/delete/';

//Create Post
export default function deleteExperience(id) {
  return function (dispatch) {
    return axios.delete(API_URL + id).then(
      (response) => {
        dispatch({
          type: DELETE_EXPERIENCE,
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
