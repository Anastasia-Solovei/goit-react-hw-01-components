import React from 'react';

import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';
import TransactionHistoryItem from './TransactionHistoryItem';

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
        {items.map(item => (
          <tr key={item.id}>
            <TransactionHistoryItem item={item} />
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default TransactionHistory;
