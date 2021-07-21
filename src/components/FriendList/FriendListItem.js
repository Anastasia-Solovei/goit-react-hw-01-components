import React from 'react';

import s from './FriendList.module.css';
import PropTypes from 'prop-types';
import defaultImage from './default.jpg';

const FriendListItem = ({ friend }) => {
  return (
    <li className={s.container}>
      <span
        className={s.status}
        style={{ backgroundColor: friend.isOnline ? 'green' : 'red' }}
      >
        {friend.isOnline}
      </span>
      <img
        className={s.avatar}
        src={friend.avatar}
        alt={friend.name}
        width="48"
      />
      <p className={s.name}>{friend.name}</p>
    </li>
  );
};

FriendListItem.defaultProps = {
  avatar: defaultImage,
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};

export default FriendListItem;
