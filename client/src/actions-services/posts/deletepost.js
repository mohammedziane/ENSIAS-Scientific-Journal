import axios from 'axios';
import { POST_ERROR, DELETE_POST } from '../types';

const API_URL = 'http://localhost:8080/api/postes/';

//Delete Post by id
export default function deletePost(id) {
  return function (dispatch) {
    return axios.delete(API_URL + id).then(
      (response) => {
        dispatch({
          type: DELETE_POST,
          payload: response.data,
        });

        return response.data;
      },
      (error) => {
        dispatch({
          type: POST_ERROR,
        });
      }
    );
  };
}
