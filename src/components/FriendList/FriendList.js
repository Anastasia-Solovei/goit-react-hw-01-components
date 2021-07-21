import React from 'react';

import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';

const FriendList = ({ friends }) => {
  return friends.map(friend => (
    <FriendListItem key={friend.id} friend={friend} />
  ));
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

export default FriendList;
