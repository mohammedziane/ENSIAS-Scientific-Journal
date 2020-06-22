import axios from 'axios';
import { POST_ERROR, REMOVE_COMMENT } from '../types';

const API_URL = 'http://localhost:8080/api/postes/';

//delete Comment by PostId & id_comment
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
