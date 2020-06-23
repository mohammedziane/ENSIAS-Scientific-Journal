//import { Avatar } from 'antd';
import React from 'react';
import { connect } from 'react-redux';
import Avatar from 'react-avatar';
const AvatarForm = (current) => {

  return (

    <Avatar color={Avatar.getRandomColor('sitebase', ['red', 'green', 'blue'])} name={current.username != undefined && current.username.toUpperCase()} />
  );
};
const mapStateToProps = (state) => ({
  current: state.user,
});
export default connect(mapStateToProps)(AvatarForm);
