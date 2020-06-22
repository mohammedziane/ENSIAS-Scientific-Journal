import axios from 'axios';
import store from '../../store';
import getPost from './getselectedpost';

import {
  GET_POSTS,
  GET_POST,
  POST_ERROR,
  UPDATE_LIKES,
  DELETE_POST,
  ADD_POST,
  ADD_COMMENT,
} from '../types';

const API_URL = 'http://localhost:8080/api/postes/comment/';

//Create Post
export default function addComment(postId, text, date) {
  if (localStorage.username) {
    return function (dispatch) {
      return axios
        .post(API_URL + postId + '/' + localStorage.username, { text, date })
        .then(
          (response) => {
            dispatch({
              type: ADD_COMMENT,
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
}
