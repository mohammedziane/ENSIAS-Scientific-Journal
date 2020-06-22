import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import moment from 'moment';

const ProfileExperience = ({ experience }) => (
  <div>
    <h3 className='text-dark'>{experience[1]}</h3>
    <p>
      <Moment format='YYYY/MM/DD'>{moment.utc(experience[6])}</Moment> -{' '}
      {!experience[5] ? (
        ' Now'
      ) : (
        <Moment format='YYYY/MM/DD'>{moment.utc(experience[5])}</Moment>
      )}
    </p>
    <p>
      <strong>Position: </strong> {experience[2]}
    </p>
    <p>
      <strong>Location: </strong> {experience[3]}
    </p>
    <p>
      <strong>Description: </strong> {experience[7]}
    </p>
  </div>
);

ProfileExperience.propTypes = {
  experience: PropTypes.object.isRequired,
};

export default ProfileExperience;
