import axios from 'axios';
import { DELETE_EDUCATION, PROFILE_ERROR } from '../types';

const API_URL = 'http://localhost:8080/api/education/delete/';

//Create Post
export default function deleteEducation(id) {
  return function (dispatch) {
    return axios.delete(API_URL + id).then(
      (response) => {
        dispatch({
          type: DELETE_EDUCATION,
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
