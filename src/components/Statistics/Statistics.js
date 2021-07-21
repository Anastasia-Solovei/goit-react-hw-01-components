import React from 'react';

import s from './Statistics.module.css';
import PropTypes from 'prop-types';
import StatList from './StatList';

const Statistics = ({ title, stats }) => {
  return (
    <section className={s.container}>
      {title && <h2 className={s.title}>{title}</h2>}

      <ul className={s.list}>
        <StatList items={stats} />
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default Statistics;
