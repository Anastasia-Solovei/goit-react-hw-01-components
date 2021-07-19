import React from 'react';

import s from './FriendList.module.css';
import FriendListItem from './FriendListItem';

const FriendList = ({ friends }) => {
  if (friends.length === 0) {
    return null;
  }

  return (
    <ul className={s.list}>
      {friends.map(friend => (
        <li className={s.container} key={friend.id}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
