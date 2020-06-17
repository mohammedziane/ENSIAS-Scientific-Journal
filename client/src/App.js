import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/navbar';
import Landing from './components/layout/landing';
import Dashboard from './components/profile/dashboard';
import Addeduc from './components/profile/education';
import Addexp from './components/profile/experience';
import Editprofile from './components/profile/update';
import Auth from './components/login/auth';
import Posts from './components/posts/posts';
import Comment from './components/posts/comment';
import Profiles from './components/profile/profiles';
import Profile from './components/profile/profile';
//Redux-- notre fournisseur de store
import { Provider } from 'react-redux';
import store from './store';
import './App.scss';
//Action Load user
import loadUser from './actions-services/LoadUser';

const App = () => {
  /*
  useEffect(() => {
    store.dispatch(loadUser());
  }, []); // [] :  Cela veut dire que notre Effect ne depend d'aucune valeur  des accessoire ou de l'etat,
  // donc il n'a donc jamais besoin de se réexécuté
  */

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Route exact path='/'>
            <Navbar />
            <Landing />
          </Route>
          <Switch>
            <Route exact path='/auth' component={Auth} />
            <Route exact path='/profiles'>
              <Navbar />
              <Profiles />
            </Route>
            <Route exact path='/dashboard'>
              <Navbar />
              <Dashboard />
            </Route>
            <Route exact path='/dashboard/profiles'>
              <Navbar />
              <Profiles />
            </Route>
            <Route exact path='/profile'>
              <Navbar />
              <Profile />
            </Route>
            <Route exact path='/add-education'>
              <Navbar />
              <Addeduc />
            </Route>
            <Route exact path='/dashboard/add-experience'>
              <Navbar />
              <Addexp />
            </Route>
            <Route exact path='/dashboard/edit-profile'>
              <Navbar />
              <Editprofile />
            </Route>
            <Route exact path='/posts'>
              <Navbar />
              <Posts />
            </Route>
            <Route exact path='/comment'>
              <Navbar />
              <Comment />
            </Route>
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
