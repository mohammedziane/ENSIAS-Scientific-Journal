import {
  PROFILES_LOADED,
  GET_PROFILE,
  PROFILE_ERROR,
} from '../actions-services/types';

const initialState = {
  loading: true,
  idProfiles: [],
  profiles: [],
};
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case PROFILES_LOADED:
      return {
        ...state,
        idProfiles: payload,
        profiles: [null],
        loading: false,
      };
    case GET_PROFILE:
      return {
        ...state,
        profiles: state.profiles.push(payload),
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
