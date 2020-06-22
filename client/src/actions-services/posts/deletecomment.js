import axios from 'axios';
import store from '../../store';
import loadPosts from './getposts';
import {
  GET_POSTS,
  GET_POST,
  POST_ERROR,
  UPDATE_LIKES,
  REMOVE_COMMENT,
  ADD_POST,
} from '../types';

const API_URL = 'http://localhost:8080/api/postes/';

//Create Post
export default function deleteComment(idPost, id_comment) {
  return function (dispatch) {
    return axios.delete(API_URL + idPost + '/' + id_comment).then(
      (response) => {
        dispatch({
          type: REMOVE_COMMENT,
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