import axios from 'axios';
import { SELECTED_POST, POST_ERROR } from '../types';
import getLikes from './getlikes';
const API_URL = 'http://localhost:8080/api/postes/getpostes/';

//Get Selected Post by id
export default function getPost(id) {
  return function (dispatch) {
    return axios.get(API_URL + id).then(
      (response) => {
        dispatch({
          type: SELECTED_POST,
          payload: response.data,
        });
        dispatch(getLikes(id));
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
