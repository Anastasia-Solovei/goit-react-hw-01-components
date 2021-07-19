import React from 'react';

import PropTypes from 'prop-types';

const TransactionHistoryItem = ({ item }) => {
  if (item.length === 0) {
    return null;
  }

  return (
    <>
      <td>{item.type}</td>
      <td>{item.amount}</td>
      <td>{item.currency}</td>
    </>
  );
};

TransactionHistoryItem.propTypes = {
  item: PropTypes.shape({
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }),
};

export default TransactionHistoryItem;
