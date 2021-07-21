import React from 'react';

import s from './Statistics.module.css';
import PropTypes from 'prop-types';
import randomBgColor from './random-bg-color';

const StatListItem = ({ item }) => {
  const bgColor = randomBgColor();

  return (
    <li className={s.item} style={{ backgroundColor: bgColor }}>
      <span className={s.label}>{item.label}</span>
      <span className={s.percentage}>{item.percentage}%</span>
    </li>
  );
};

StatListItem.propTypes = {
  item: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};

export default StatListItem;
