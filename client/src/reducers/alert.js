import { SET_ALERT, REMOVE_ALERT } from '../actions-services/types';

const initialState = [];

export default function setAlert(state = initialState, action) {
  //action contient types et charge utile (Data)
  const { type, payload } = action;
  switch (type) {
    case SET_ALERT:
      return [...state, payload];
    case REMOVE_ALERT:
      return state.filter((alert) => alert.id !== payload);
    default:
      return state;
  }
}
