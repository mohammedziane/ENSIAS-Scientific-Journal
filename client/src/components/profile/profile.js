import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import ProfileTop from './ProfileTop';
import ProfileAbout from './ProfileAbout';
import ProfileExperience from './ProfileExperience';
import ProfileEducation from './ProfileEducation';
import getProfileByUser from '../../actions-services/profile/getprofilebyuser';
const Profile = ({
  getProfileByUser,
  profile: { new_profile },
  auth,
  user,
  match,
}) => {
  useEffect(() => {
    getProfileByUser(match.params.id);
  }, [getProfileByUser, match.params.id]);
  return (
    <Fragment>
      <section className='container'>
        {new_profile === null ? (
          <Spinner />
        ) : (
          <Fragment>
            <Link to='/profiles' className='btn btn-light'>
              Back To Profiles
            </Link>
            {auth.isAuthenticated &&
              auth.loading === false &&
              user.id_user === new_profile.id_user && (
                <Link to='/edit-profile' className='btn btn-dark'>
                  Edit Profile
                </Link>
              )}
            <div className='profile-grid my-1'>
              <ProfileTop profile={new_profile} />
              <ProfileAbout profile={new_profile} />
              <div className='profile-exp bg-white p-2'>
                <h2 className='text-primary'>Experience</h2>
                {new_profile.idExperiences != null ? (
                  <Fragment>
                    {new_profile.idExperiences.map((str) => (
                      <ProfileExperience experience={str.split(',')} />
                    ))}
                  </Fragment>
                ) : (
                  <h4>No experience credentials</h4>
                )}
              </div>

              <div className='profile-edu bg-white p-2'>
                <h2 className='text-primary'>Education</h2>
                {new_profile.idEducations != null ? (
                  <Fragment>
                    {new_profile.idEducations.map((str) => (
                      <ProfileEducation education={str.split(',')} />
                    ))}
                  </Fragment>
                ) : (
                  <h4>No education credentials</h4>
                )}
              </div>
            </div>
          </Fragment>
        )}
      </section>
    </Fragment>
  );
};

Profile.propTypes = {
  getProfileByUser: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profiles,
  auth: state.auth,
  user: state.user,
});

export default connect(mapStateToProps, { getProfileByUser })(Profile);
