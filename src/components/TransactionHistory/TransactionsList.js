import React from 'react';

import PropTypes from 'prop-types';
import TransactionsItem from './TransactionsItem';

const TransactionsList = ({ items }) => {
  return items.map(item => <TransactionsItem key={item.id} item={item} />);
};

TransactionsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default TransactionsList;
