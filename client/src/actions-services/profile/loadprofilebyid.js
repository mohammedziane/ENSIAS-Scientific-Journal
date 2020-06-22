import axios from 'axios';
import { GET_PROFILE, PROFILE_ERROR } from '../types';

const API_URL = 'http://localhost:8080/api/profiles/showprofile/';

//Load Profile by id
export default function loadProfileById(id) {
  return function (dispatch) {
    return axios.get(API_URL + id).then(
      (response) => {
        dispatch({
          type: GET_PROFILE,
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
