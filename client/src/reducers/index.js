import { combineReducers } from 'redux';
import auth from './auth';
import user from './UserSummary';
import profile from './ProfileSummary';
import profiles from './profiles';

//Nous exportons un seul combineReducers qui prend comme objet toutes les reducers qu'on avait crée
export default combineReducers({
  auth,
  user,
  profile,
  profiles,
});
