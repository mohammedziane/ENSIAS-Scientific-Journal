import axios from 'axios';

import { PROFILE_ERROR, PROFILES_LOADED } from '../types';
import loadProfileById from './loadprofilebyid';
const API_URL = 'http://localhost:8080/api/profiles';

//LOAD Profiles
export default function loadProfiles() {
  return function (dispatch) {
    return axios.get(API_URL).then(
      (response) => {
        dispatch({
          type: PROFILES_LOADED,
          payload: response.data,
        });
        response.data.map((id) => dispatch(loadProfileById(id)));
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
