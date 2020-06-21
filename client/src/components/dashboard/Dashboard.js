import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DashboardActions from './DashboardActions';
import Experience from './Experience';
import Education from './Education';
//import getCurrentExperience from '../../actions-services/profile/getexperience';

const Dashboard = ({
  user: { username },
  profile: { experience, education },
}) => {
  return (
    <Fragment>
      <section className='container'>
        <h1 className='large text-primary'>Dashboard</h1>
        <p className='lead'>
          <i className='fas fa-user' /> Welcome {username}
        </p>
        {experience !== null && education !== null ? (
          <Fragment>
            <DashboardActions />
            <Experience experience={experience} />
            <Education education={education} />

            <div className='my-2'>
              <button className='btn btn-danger'>
                <i className='fas fa-user-minus' /> Delete My Account
              </button>
            </div>
          </Fragment>
        ) : (
          <Fragment>
            <p>You have not yet setup a profile, please add some info</p>
            <Link to='/create-profile' className='btn btn-primary my-1'>
              Create Profile
            </Link>
          </Fragment>
        )}
      </section>
    </Fragment>
  );
};

Dashboard.propTypes = {
  user: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
  profile: state.profile,
});

export default connect(mapStateToProps)(Dashboard);
