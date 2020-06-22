import axios from 'axios';
import { POST_ERROR, UPDATE_LIKES } from '../types';

const API_URL = 'http://localhost:8080/api/postes/unlike/';

//Put Unlike Post by idPost
export default function putUnLike(id) {
  return function (dispatch) {
    return axios.post(API_URL + id).then(
      (response) => {
        dispatch({
          type: UPDATE_LIKES,
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
