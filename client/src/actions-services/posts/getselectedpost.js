import axios from 'axios';
import store from '../../store';

import {
  GET_POSTS,
  SELECTED_POST,
  POST_ERROR,
  UPDATE_LIKES,
  DELETE_POST,
  ADD_POST,
} from '../types';

const API_URL = 'http://localhost:8080/api/postes/';

//Create Post
export default function getPost(id) {
  return function (dispatch) {
    return axios.get(API_URL + id).then(
      (response) => {
        dispatch({
          type: SELECTED_POST,
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
