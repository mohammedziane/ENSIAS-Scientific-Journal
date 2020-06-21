import axios from 'axios';

import { PROFILE_ERROR, IDS_EXPERIENCE } from '../types';
import loadExperienceById from './getcurrentexperiencebyid';
const API_URL = 'http://localhost:8080/api/experiences/';

//Load Education
export default function loadExperience() {
  if (localStorage.id_user) {
    const user = localStorage.id_user;
    return function (dispatch) {
      return axios.get(API_URL + user).then(
        (response) => {
          dispatch({
            type: IDS_EXPERIENCE,
            payload: response.data,
          });
          response.data.map((id) => dispatch(loadExperienceById(id)));
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
}
