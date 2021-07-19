import React from 'react';

import s from './FriendList.module.css';
import PropTypes from 'prop-types';
import defaultImage from './default.jpg';

const FriendListItem = ({ avatar = defaultImage, name, isOnline }) => {
  return (
    <>
      <span
        className={s.status}
        style={{ backgroundColor: isOnline ? 'green' : 'red' }}
      >
        {isOnline}
      </span>
      <img
        className={s.avatar}
        src={avatar ?? defaultImage}
        alt={name}
        width="48"
      />
      <p className={s.name}>{name}</p>
    </>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
