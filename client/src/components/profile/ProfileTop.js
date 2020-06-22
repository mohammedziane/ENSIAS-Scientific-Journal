import React from 'react';
import PropTypes from 'prop-types';

const ProfileTop = ({
  profile: { status, company, location, website, username },
}) => {
  return (
    <div className='profile-top bg-primary p-2'>
      <img className='round-img my-1' alt='' />
      <h1 className='large'>{username}</h1>
      <p className='lead'>
        {status} {company && <span> at {company}</span>}
      </p>
      <p>{location && <span>{location}</span>}</p>
      <div className='icons my-1'>
        {website && (
          <a href={website} target='_blank' rel='noopener noreferrer'>
            <i className='fas fa-globe fa-2x' />
          </a>
        )}
      </div>
    </div>
  );
};

ProfileTop.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileTop;
