import React from 'react';

import s from './Profile.module.css';
import Stats from './Stats';
import PropTypes from 'prop-types';
import defaultImage from './default.jpg';

const Profile = ({ name, tag, location, avatar = defaultImage, stats }) => {
  return (
    <div className={s.container}>
      <div className={s.description}>
        <img src={avatar ?? defaultImage} alt={name} className={s.avatar} />
        <p className={s.name}>{name}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
      </div>

      <Stats {...stats} />
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default Profile;
