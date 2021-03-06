import React from 'react';

import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';
import TransactionsList from './TransactionsList';

const TransactionHistory = ({ items }) => {
  return (
    <table className={s.table}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        <TransactionsList items={items} />
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape),
};

export default TransactionHistory;
