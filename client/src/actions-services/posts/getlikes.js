import axios from 'axios';
import { POST_ERROR, UPDATE_LIKES } from '../types';

const API_URL = 'http://localhost:8080/api/postes/getlike/';

//Get likes Post by idPost
export default function getLikes(id) {
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
