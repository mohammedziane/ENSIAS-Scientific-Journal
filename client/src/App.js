import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/navbar';
import Landing from './components/layout/landing';
import Dashboard from './components/profile/dashboard';
import Addeduc from './components/profile/education';
import Addexp from './components/profile/experience';
import Editprofile from './components/profile/update';
import Newnav from './components/layout/newNavbar';
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
      <Fragment>
        <Router>
          <Route exact path='/'>
            <Navbar />
            <Landing />
          </Route>
          <Switch>
            <Route exact path='/auth'>
              <Auth />
            </Route>
            <Route exact path='/profiles'>
              <Navbar />
              <Profiles />
            </Route>
            <Route exact path='/dashboard'>
              <Newnav />
              <Dashboard />
            </Route>
            <Route exact path='/dashboard/profiles'>
              <Newnav />
              <Profiles />
            </Route>
            <Route exact path='/profile'>
              <Newnav />
              <Profile />
            </Route>
            <Route exact path='/add-education'>
              <Newnav />
              <Addeduc />
            </Route>
            <Route exact path='/dashboard/add-experience'>
              <Newnav />
              <Addexp />
            </Route>
            <Route exact path='/dashboard/edit-profile'>
              <Newnav />
              <Editprofile />
            </Route>
            <Route exact path='/posts'>
              <Newnav />
              <Posts />
            </Route>
            <Route exact path='/comment'>
              <Newnav />
              <Comment />
            </Route>
          </Switch>
        </Router>
      </Fragment>
    </Provider>
  );
};

export default App;
