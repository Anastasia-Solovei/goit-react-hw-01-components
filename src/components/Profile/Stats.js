import React from 'react';

import s from './Stats.module.css';
import PropTypes from 'prop-types';

const Stats = ({ followers, views, likes }) => {
  return (
    <>
      <li className={s.item}>
        <span className={s.label}>Followers</span>
        <span className={s.quantity}>{followers}</span>
      </li>
      <li className={s.item}>
        <span className={s.label}>Views</span>
        <span className={s.quantity}>{views}</span>
      </li>
      <li className={s.item}>
        <span className={s.label}>Likes</span>
        <span className={s.quantity}>{likes}</span>
      </li>
    </>
  );
};

Stats.propTypes = {
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};

export default Stats;
