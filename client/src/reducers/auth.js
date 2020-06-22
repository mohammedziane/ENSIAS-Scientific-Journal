import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from '../actions-services/types';

const initialState = {
  accessToken: localStorage.getItem('accessToken'),
  tokenType: localStorage.getItem('tokenType'),
  isAuthenticated: null,
  loading: true,
  isRegistred: null,
  message: '',
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case REGISTER_SUCCESS:
      localStorage.setItem('tokenType', payload.tokenType);
      localStorage.setItem('accessToken', payload.accessToken);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        isRegistred: true,
        loading: false,
      };
    case LOGIN_SUCCESS:
      localStorage.setItem('tokenType', payload.tokenType);
      localStorage.setItem('accessToken', payload.accessToken);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
      };
    case REGISTER_FAIL:
      return {
        ...state,
        ...payload,
        isRegistred: false,
      };
    case LOGIN_FAIL:
    case LOGOUT:
    case AUTH_ERROR:
      localStorage.removeItem('accessToken');
      localStorage.removeItem('tokenType');
      return {
        ...state,
        isAuthenticated: false,
        loading: true,
      };
    default:
      return state;
  }
}
