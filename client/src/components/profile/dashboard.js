import React from 'react';

import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import store from '../../store';
import loadProfile from '../../actions-services/profile.service';
class Dashbord extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <section className='container'>
        <h1 className='large text-primary'>Dashboard</h1>
        <p className='lead'>
          <i className='fas fa-user'></i> Welcome {this.props.username}
        </p>
        <div className='dash-buttons'>
          <Link to='/dashboard/edit-profile' className='btn btn-light'>
            <i className='fas fa-user-circle text-primary'></i> Edit Profile
          </Link>
          <Link to='/dashboard/add-experience' className='btn btn-light'>
            <i className='fab fa-black-tie text-primary'></i> Add Experience
          </Link>
          <Link to='/dashboard/add-education' className='btn btn-light'>
            <i className='fas fa-graduation-cap text-primary'></i> Add Education
          </Link>
        </div>
        <h2 className='my-2'>Experience Credentials</h2>
        <table className='table'>
          <thead>
            <tr>
              <th>Company</th>
              <th className='hide-sm'>Title</th>
              <th className='hide-sm'>Years</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tech Guy Web Solutions</td>
              <td className='hide-sm'>Senior Developer</td>
              <td className='hide-sm'>02-03-2009 - 01-02-2014</td>
              <td>
                <button className='btn btn-danger'>Delete</button>
              </td>
            </tr>
            <tr>
              <td>Traversy Media</td>
              <td className='hide-sm'>Instructor & Developer</td>
              <td className='hide-sm'>02-03-2015 - Now</td>
              <td>
                <button className='btn btn-danger'>Delete</button>
              </td>
            </tr>
          </tbody>
        </table>

        <h2 className='my-2'>Education Credentials</h2>
        <table className='table'>
          <thead>
            <tr>
              <th>School</th>
              <th className='hide-sm'>Degree</th>
              <th className='hide-sm'>Years</th>
              <th />
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Northern Essex</td>
              <td className='hide-sm'>Associates</td>
              <td className='hide-sm'>02-03-2007 - 01-02-2009</td>
              <td>
                <button className='btn btn-danger'>Delete</button>
              </td>
            </tr>
          </tbody>
        </table>

        <div className='my-2'>
          <button className='btn btn-danger'>
            <i className='fas fa-user-minus'></i>
            Delete My Account
          </button>
        </div>
      </section>
    );
  }
}
/*
const mapDispatchToProps = (dispatch) => {
  dispatch(loadProfile());
};*/
const mapStateToProps = (state) => ({
  username: state.user.username,
});
export default connect(mapStateToProps)(Dashbord);
