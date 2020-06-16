import {
  PROFILE_LOADED,
  AUTH_ERROR,
  REGISTER_FAIL,
  LOGIN_FAIL,
  PROFILE_UPDATED,
  EDIT_PROFILE,
} from '../actions-services/types';

const initialState = {
  isLoaded: false,
  isUpdated: false,
  idProfile: localStorage.getItem('idProfile'),
  gender: localStorage.getItem('gender'),
  company: localStorage.getItem('company'),
  website: localStorage.getItem('website'),
  location: localStorage.getItem('location'),
  status: localStorage.getItem('status'),
  skills: localStorage.getItem('skills'),
  bio: localStorage.getItem('bio'),
  github: localStorage.getItem('github'),
  date: localStorage.getItem('date'),
  updated_At: localStorage.getItem('updated_At'),
};
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case PROFILE_LOADED:
      localStorage.setItem('idProfile', payload.idProfile);
      localStorage.setItem('gender', payload.gender);
      localStorage.setItem('company', payload.company);
      localStorage.setItem('website', payload.website);
      localStorage.setItem('location', payload.location);
      localStorage.setItem('status', payload.status);
      localStorage.setItem('skills', payload.skills);
      localStorage.setItem('bio', payload.bio);
      localStorage.setItem('github', payload.github);
      localStorage.setItem('date', payload.date);
      localStorage.setItem('updated_At', payload.updated_At);
      return {
        ...state,
        ...payload,
        isLoaded: true,
      };
    case PROFILE_UPDATED:
      localStorage.setItem('idProfile', payload.idProfile);
      localStorage.setItem('gender', payload.gender);
      localStorage.setItem('company', payload.company);
      localStorage.setItem('website', payload.website);
      localStorage.setItem('location', payload.location);
      localStorage.setItem('status', payload.status);
      localStorage.setItem('skills', payload.skills);
      localStorage.setItem('bio', payload.bio);
      localStorage.setItem('github', payload.github);
      localStorage.setItem('date', payload.date);
      localStorage.setItem('updated_At', payload.updated_At);
      return {
        ...state,
        ...payload,
        isUpdated: true,
      };
    case AUTH_ERROR:
    case EDIT_PROFILE:
      localStorage.removeItem('idProfile');
      localStorage.removeItem('gender');
      localStorage.removeItem('company');
      localStorage.removeItem('website');
      localStorage.removeItem('location');
      localStorage.removeItem('status');
      localStorage.removeItem('skills');
      localStorage.removeItem('bio');
      localStorage.removeItem('github');
      localStorage.removeItem('date');
      localStorage.removeItem('updated_At');
      return {
        ...state,
        isLoaded: false,
      };
    default:
      return state;
  }
}
