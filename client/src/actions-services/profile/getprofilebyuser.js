import axios from 'axios';
import { SELECTED_PROFILE, PROFILE_ERROR } from '../types';
const API_URL = 'http://localhost:8080/api/profiles/selected/';

//Load Profile Selected By User id
export default function loadProfileByUser(id) {
  return function (dispatch) {
    return axios.get(API_URL + id).then(
      (response) => {
        dispatch({
          type: SELECTED_PROFILE,
          payload: response.data,
        });
        return response.data;
      },
      (error) => {
        dispatch({
          type: PROFILE_ERROR,
        });
      }
    );
  };
}
