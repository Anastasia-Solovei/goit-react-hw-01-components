import React from 'react';

import s from './FriendList.module.css';
import PropTypes from 'prop-types';
import FriendList from './FriendList';

const Friends = ({ friends }) => {
  if (friends.length === 0) {
    return null;
  }

  return (
    <ul className={s.list}>
      <FriendList friends={friends} />
    </ul>
  );
};

Friends.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape),
};

export default Friends;
