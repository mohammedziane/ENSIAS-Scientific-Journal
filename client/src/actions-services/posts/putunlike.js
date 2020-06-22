import axios from 'axios';
import store from '../../store';
import loadPosts from './getposts';
import {
  GET_POSTS,
  GET_POST,
  POST_ERROR,
  UPDATE_LIKES,
  DELETE_POST,
  ADD_POST,
} from '../types';

const API_URL = 'http://localhost:8080/api/postes/unlike/';

//Create Post
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