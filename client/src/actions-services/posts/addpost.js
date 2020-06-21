import axios from 'axios';
import store from '../../store';
import getPost from './getpost';

import {
  GET_POSTS,
  GET_POST,
  POST_ERROR,
  UPDATE_LIKES,
  DELETE_POST,
  ADD_POST,
} from '../types';

const API_URL = 'http://localhost:8080/api/postes/';

//Create Post
export default function addPost(text, date) {
  if (localStorage.username) {
    return function (dispatch) {
      return axios.post(API_URL + localStorage.username, { text, date }).then(
        (response) => {
          dispatch({
            type: ADD_POST,
            payload: response.data,
          });
          dispatch(getPost(response.data.id_poste));

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
