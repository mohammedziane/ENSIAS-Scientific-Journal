import axios from 'axios';
import { ADD_EXPERIECE, PROFILE_ERROR } from '../types';

const API_URL = 'http://localhost:8080/api/addexperience/';

//ADD EXPERIENCE
export default function addExp(
  title,
  company,
  location,
  from,
  to,
  current,
  description
) {
  if (localStorage.username) {
    return function (dispatch) {
      return axios
        .post(API_URL + localStorage.username, {
          title,
          company,
          location,
          from,
          to,
          current,
          description,
        })
        .then(
          (response) => {
            dispatch({
              type: ADD_EXPERIECE,
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
}
