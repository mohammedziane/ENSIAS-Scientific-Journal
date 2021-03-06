import axios from 'axios';

import { ADD_EDUCATION, PROFILE_ERROR } from '../types';

const API_URL = 'http://localhost:8080/api/education/';

//ADD EDUCATION
export default function addEduc(
  school,
  degree,
  fieldofstudy,
  from,
  to,
  current,
  description
) {
  if (localStorage.username) {
    return function (dispatch) {
      return axios
        .post(API_URL + localStorage.username, {
          school,
          degree,
          fieldofstudy,
          from,
          to,
          current,
          description,
        })
        .then(
          (response) => {
            dispatch({
              type: ADD_EDUCATION,
              payload: response.data,
            });
            //tore.dispatch(loadProfile());

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
