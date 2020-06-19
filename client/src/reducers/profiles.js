import { PROFILES_LOADED, AUTH_ERROR, LOGOUT } from '../actions-services/types';

const initialState = {
  isLoaded: false,
  profiles: { user: null, profile: null },
};
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case PROFILES_LOADED:
      localStorage.setItem('user', payload.user);
      localStorage.setItem('profile', payload.profile);
      return {
        ...state,
        ...payload,
        isLoaded: true,
      };
    case AUTH_ERROR:
    case LOGOUT:
      localStorage.removeItem('profiles');
      return {
        ...state,
        isLoaded: false,
      };
    default:
      return state;
  }
}
