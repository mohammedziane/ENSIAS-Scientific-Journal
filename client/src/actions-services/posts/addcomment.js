import axios from 'axios';
import { POST_ERROR, ADD_COMMENT } from '../types';

const API_URL = 'http://localhost:8080/api/postes/comment/';

//Add Comment to PostId
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
