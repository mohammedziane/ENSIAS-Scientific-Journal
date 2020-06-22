import {
  PROFILE_LOADED,
  PROFILE_ERROR,
  PROFILE_UPDATED,
  EDIT_PROFILE,
  LOGOUT,
  ADD_EXPERIECE,
  ADD_EDUCATION,
  GET_EDUCATION,
  GET_EXPERIENCE,
  IDS_EDUCATION,
  IDS_EXPERIENCE,
  DELETE_EXPERIENCE,
  DELETE_EDUCATION,
} from '../actions-services/types';

const initialState = {
  isLoaded: false,
  isUpdated: false,
  idProfile: '',
  gender: '',
  company: '',
  website: '',
  location: '',
  status: '',
  skills: '',
  bio: '',
  github: '',
  date: '',
  message: null,
  updatedAt: '',
  experience: [],
  education: [],
  idExperiences: [],
  idEducations: [],
  loading: true,
};
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case DELETE_EXPERIENCE:
      return {
        ...state,
        experience: state.experience.filter(
          (experience) => experience.id_experience !== payload
        ),
        loading: false,
      };
    case DELETE_EDUCATION:
      return {
        ...state,
        education: state.education.filter(
          (education) => education.id_education !== payload
        ),
        loading: false,
      };

    case IDS_EXPERIENCE:
      return {
        ...state,
        idExperiences: payload,
        loading: false,
      };
    case IDS_EDUCATION:
      return {
        ...state,
        idEducations: payload,
        loading: false,
      };
    case GET_EXPERIENCE:
      return {
        ...state,
        new_experience: state.experience.push(payload),
      };
    case GET_EDUCATION:
      return {
        ...state,
        new_education: state.education.push(payload),
      };
    case ADD_EDUCATION:
      return {
        ...state,
        new_education: state.education.push(payload),
      };
    case ADD_EXPERIECE:
      return {
        ...state,
        new_experience: state.experience.push(payload),
      };
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
      localStorage.setItem('updatedAt', payload.updated_At);

      return {
        ...state,
        message: payload.message,
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
      localStorage.setItem('updatedAt', payload.updated_At);
      return {
        ...state,
        ...payload,
        isUpdated: true,
      };
    case PROFILE_ERROR:
    case EDIT_PROFILE:
    case LOGOUT:
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
      localStorage.removeItem('updatedAt');
      return {
        ...state,
        isLoaded: false,
      };
    default:
      return state;
  }
}
