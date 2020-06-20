import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from '../layout/navbar';
import MenuItem from '../layout/MenuItem';
import Dashboard from '../profile/dashboard';
import Profiles from '../profile/profiles';
import Profile from '../profile/profile';
import Addeduc from '../profile/education';
import Addexp from '../profile/experience';
import Editprofile from '../profile/update';
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
