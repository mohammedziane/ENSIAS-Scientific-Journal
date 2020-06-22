import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../layout/avatar';
import PropTypes from 'prop-types';

const ProfileItem = ({
  profile: { idUser, username, status, company, location, skills },
}) => {
  return (
    <div className='profile bg-light'>
      <img src={Avatar} alt='' className='round-img' />
      <div>
        <h2>{username}</h2>
        <p>
          {status} {company && <span> at {company}</span>}
        </p>
        <p className='my-1'>{location && <span>{location}</span>}</p>
        <Link to={`/profile/${idUser}`} className='btn btn-primary'>
          View Profile
        </Link>
      </div>
      <ul>
        {skills &&
          skills.split(',').map((skill, index) => (
            <li key={index} className='text-primary'>
              <i className='fas fa-check' /> {skill}
            </li>
          ))}
      </ul>
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileItem;
