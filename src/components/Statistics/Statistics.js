import React from 'react';

import s from './Statistics.module.css';
import PropTypes from 'prop-types';
import randomBgColor from './random-bg-color';

const StatListItem = ({ item }) => {
  return (
    <>
      <span className={s.label}>{item.label}</span>
      <span className={s.percentage}>{item.percentage}%</span>
    </>
  );
};

const StatList = ({ items }) => {
  if (items.length === 0) {
    return null;
  }

  return (
    <ul className={s.list}>
      {items.map(item => (
        <li
          className={s.item}
          key={item.id}
          style={{ backgroundColor: randomBgColor() }}
        >
          <StatListItem item={item} />
        </li>
      ))}
    </ul>
  );
};

const Statistics = ({ title, stats }) => {
  return (
    <section className={s.container}>
      {title && <h2 className={s.title}>{title}</h2>}

      <StatList items={stats} />
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape),
};

StatList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string })),
};

StatListItem.propTypes = {
  item: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};

export default Statistics;
