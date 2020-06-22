import { Avatar } from 'antd';
import React from 'react';
import { connect } from 'react-redux';

const AvatarForm = (current) => {
  const colors = [
    '#F44336',
    '#e91e63',
    '#9c27b0',
    '#673ab7',
    '#ff9800',
    '#ff5722',
    '#795548',
    '#607d8b',
    '#3f51b5',
    '#2196F3',
    '#00bcd4',
    '#009688',
    '#2196F3',
    '#32c787',
    '#00BCD4',
    '#ff5652',
    '#ffc107',
    '#ff85af',
    '#FF9800',
    '#39bbb0',
    '#4CAF50',
    '#ffeb3b',
    '#ffc107',
  ];

  const getAvatarColor = (name) => {
    if (name != undefined) {
      name = name.substr(0, 6);
      var hash = 0;
      for (var i = 0; i < name.length; i++) {
        hash = 31 * hash + name.charCodeAt(i);
      }
      var index = Math.abs(hash % colors.length);
      return colors[index];
    }
  };

  return (
    <Avatar
      className=''
      style={{ backgroundColor: getAvatarColor(current.username) }}
    >
      {current.username != undefined && current.username.toUpperCase()}
    </Avatar>
  );
};
const mapStateToProps = (state) => ({
  current: state.user,
});
export default connect(mapStateToProps)(AvatarForm);
