import axios from 'axios';

import { AUTH_ERROR, PROFILES_LOADED } from './types';

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

        return response.data;
      },

    );
  };
}
