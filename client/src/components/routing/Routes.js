import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from '../layout/navbar';
import MenuItem from '../layout/MenuItem';
import Dashboard from '../dashboard/Dashboard';
import Profiles from '../profiles/Profiles';
import Profile from '../profile/Profile';
import Addeduc from '../profile-forms/education';
import Addexp from '../profile-forms/experience';
import Editprofile from '../profile-forms/update';
import Posts from '../posts/Posts';
import Comment from '../post/post';
import NotFound from '../layout/NotFound';
import PrivateRoute from '../routing/PrivateRoute';

import setAuthToken from '../../assistant/setAuthToken';
import store from '../../store';

const Routes = (props) => {
  /*
  useEffect(() => {
    setAuthToken(localStorage.token);
    //store.dispatch(loadUser());
  }, []);
  */
  return (
    <div>
      <Navbar />
      <MenuItem />
      <Switch>
        <Route exact path='/profiles' component={Profiles} />
        <Route exact path='/profile/:id' component={Profile} />
        <PrivateRoute exact path='/dashboard' component={Dashboard} />
        <PrivateRoute exact path='/create-profile' component={Editprofile} />
        <PrivateRoute exact path='/edit-profile' component={Editprofile} />
        <PrivateRoute exact path='/add-experience' component={Addexp} />
        <PrivateRoute exact path='/add-education' component={Addeduc} />
        <PrivateRoute exact path='/posts' component={Posts} />
        <PrivateRoute exact path='/posts/:id' component={Comment} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

export default Routes;
