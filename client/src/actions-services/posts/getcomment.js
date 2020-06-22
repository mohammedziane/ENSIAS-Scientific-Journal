import axios from 'axios';

import { GET_COMMENT, POST_ERROR } from '../types';

const API_URL = 'http://localhost:8080/api/comments/';

//Load Comment
export default function getComment(idComment) {
  return function (dispatch) {
    return axios.get(API_URL + idComment).then(
      (response) => {
        dispatch({
          type: GET_COMMENT,
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
