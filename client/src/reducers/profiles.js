import {
  PROFILES_LOADED,
  GET_PROFILE,
  PROFILE_ERROR,
  SELECTED_PROFILE,
  SELECTED_EDUCATION,
  SELECTED_EXPERIENCE,
} from '../actions-services/types';

const initialState = {
  loading: true,
  idProfiles: [],
  profiles: [],
  new_profile: null,
  educations: [],
  experiences: [],
};
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case PROFILES_LOADED:
      return {
        ...state,
        idProfiles: payload,
        profiles: [],
        educations: [],
        experiences: [],
        loading: false,
      };
    case SELECTED_PROFILE:
      return {
        ...state,
        new_profile: payload,
        loading: false,
      };
    case GET_PROFILE:
      return {
        ...state,
        new_profile: state.profiles.push(payload),
        loading: false,
      };
    case SELECTED_EDUCATION:
      return {
        ...state,
        new_education: state.educations.push(payload),
        loading: false,
      };
    case SELECTED_EXPERIENCE:
      return {
        ...state,
        new_experience: state.experiences.push(payload),
        loading: false,
      };
    case PROFILE_ERROR:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
