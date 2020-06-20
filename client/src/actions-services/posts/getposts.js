import axios from 'axios';
import store from '../../store';

import {
  GET_POSTS,
  GET_POST,
  POST_ERROR,
  UPDATE_LIKES,
  DELETE_POST,
  ADD_POST,
} from '../types';

const API_URL = 'http://localhost:8080/api/postes';

//Create Post
export default function getPosts() {
  if (localStorage.username) {
    return function (dispatch) {
      return axios.post(API_URL).then(
        (response) => {
          dispatch({
            type: GET_POSTS,
            payload: response.data,
          });
          //store.dispatch(loadPosts());

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
}
