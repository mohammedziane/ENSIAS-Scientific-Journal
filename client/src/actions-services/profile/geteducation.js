import axios from 'axios';

import { IDS_EDUCATION, PROFILE_ERROR } from '../types';
import loadEducationById from './getcurrenteducationbyid';
import loadExperience from './getexperience';

const API_URL = 'http://localhost:8080/api/educations/';

//Load Education
export default function loadEducation() {
  if (localStorage.id_user) {
    const user = localStorage.id_user;
    return function (dispatch) {
      return axios.get(API_URL + user).then(
        (response) => {
          dispatch({
            type: IDS_EDUCATION,
            payload: response.data,
          });
          response.data.map((id) => dispatch(loadEducationById(id)));
          dispatch(loadExperience());
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
