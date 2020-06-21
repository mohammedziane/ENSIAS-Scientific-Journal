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
import getPost from './getpost';

const API_URL = 'http://localhost:8080/api/postes';

//Create Post
export default function getPosts() {
  if (localStorage.username) {
    return function (dispatch) {
      return axios.get(API_URL).then(
        (response) => {
          dispatch({
            type: GET_POSTS,
            payload: response.data,
          });
          response.data.map((id) => store.dispatch(getPost(id)));
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
