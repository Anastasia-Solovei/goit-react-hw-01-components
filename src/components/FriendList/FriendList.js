import React from 'react';

import s from './FriendList.module.css';
import FriendListItem from './FriendListItem';

const FriendList = ({ friends }) => {
  if (friends.length === 0) {
    return null;
  }

  return <ul className={s.list}>{friends.map(FriendListItem)}</ul>;
};

export default FriendList;
