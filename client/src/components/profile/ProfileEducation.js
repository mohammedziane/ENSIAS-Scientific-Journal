import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import moment from 'moment';

const ProfileEducation = ({ education }) => (
  <div>
    <h3 className='text-dark'>{education[1]}</h3>
    <p>
      <Moment format='YYYY/MM/DD'>{moment.utc(education[6])}</Moment> -{' '}
      {!education[5] ? (
        ' Now'
      ) : (
        <Moment format='YYYY/MM/DD'>{moment.utc(education[5])}</Moment>
      )}
    </p>
    <p>
      <strong>Degree: </strong> {education[2]}
    </p>
    <p>
      <strong>Field Of Study: </strong> {education[3]}
    </p>
    <p>
      <strong>Description: </strong> {education[7]}
    </p>
  </div>
);

ProfileEducation.propTypes = {
  education: PropTypes.object.isRequired,
};

export default ProfileEducation;
