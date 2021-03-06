import axios from 'axios';
import { POST_ERROR, UPDATE_LIKES } from '../types';

const API_URL = 'http://localhost:8080/api/postes/unlike/';

//Put Unlike Post by idPost
export default function putUnLike(id, name) {
  return function (dispatch) {
    return axios.delete(API_URL + id + '/' + name).then(
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
