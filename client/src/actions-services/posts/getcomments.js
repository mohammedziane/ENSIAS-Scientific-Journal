import axios from 'axios';
import store from '../../store';
import getComment from './getcomment';
import { GET_COMMENTS, POST_ERROR } from '../types';

const API_URL = 'http://localhost:8080/api/postes/getposte/';

//Load Comments
export default function getComments(id) {
  return function (dispatch) {
    return axios.get(API_URL + id).then(
      (response) => {
        dispatch({
          type: GET_COMMENTS,
          payload: response.data,
        });
        response.data.map((idComment) => dispatch(getComment(idComment)));
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
