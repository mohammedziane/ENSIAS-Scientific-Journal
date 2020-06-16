import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import user from './UserSummary';
import profile from './ProfileSummary';

//Nous exportons un seul combineReducers qui prend comme objet toutes les reducers qu'on avait crée
export default combineReducers({
  alert,
  auth,
  user,
  profile,
});
