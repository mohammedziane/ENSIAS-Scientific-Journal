import React, { Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';
import loadProfiles from '../../actions-services/profile/LoadAllProfiles';
import MenuItem from '../layout/MenuItem';
import { connect } from 'react-redux';
class Profiles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <section className='container'>
          <h1 className='large text-primary'>Developers</h1>
          <p className='lead'>
            <i className='fab fa-connectdevelop'></i> Browse and connect with
            developers
          </p>
          <div className='profiles'>
            <div className='profile bg-light'>
              <img
                className='round-img'
                src='https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200'
                alt=''
              />
              <div>
                <h2>John Doe</h2>
                <p>Developer at Microsoft</p>
                <p>Seattle, WA</p>
                <Link to='/profile' className='btn btn-primary'>
                  View Profile
                </Link>
              </div>

              <ul>
                <li className='text-primary'>
                  <i className='fas fa-check'></i> HTML
                </li>
                <li className='text-primary'>
                  <i className='fas fa-check'></i> CSS
                </li>
                <li className='text-primary'>
                  <i className='fas fa-check'></i> JavaScript
                </li>
                <li className='text-primary'>
                  <i className='fas fa-check'></i> Python
                </li>
                <li className='text-primary'>
                  <i className='fas fa-check'></i> C#
                </li>
              </ul>
            </div>

            <div className='profile bg-light'>
              <img
                className='round-img'
                src='https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200'
                alt=''
              />
              <div>
                <h2>John Doe</h2>
                <p>Developer at Microsoft</p>
                <p>Seattle, WA</p>
                <Link to='/profile' className='btn btn-primary'>
                  View Profile
                </Link>
              </div>

              <ul>
                <li className='text-primary'>
                  <i className='fas fa-check'></i> HTML
                </li>
                <li className='text-primary'>
                  <i className='fas fa-check'></i> CSS
                </li>
                <li className='text-primary'>
                  <i className='fas fa-check'></i> JavaScript
                </li>
              </ul>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}
export default connect()(Profiles);
