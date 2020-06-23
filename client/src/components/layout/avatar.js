//import { Avatar } from 'antd';
import React from 'react';
import PropTypes from 'prop-types';
import Avatar from 'react-avatar';
const AvatarForm = (current) => {
  const element = JSON.stringify(current);
  return (
    <Avatar
      color={Avatar.getRandomColor('sitebase', ['red', 'green', 'blue'])}
      name={element.current}
    />
  );
};
AvatarForm.propTypes = {
  current: PropTypes.object.isRequired,
};
export default AvatarForm;
