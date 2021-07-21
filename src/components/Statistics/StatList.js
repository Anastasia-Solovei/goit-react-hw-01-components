import React from 'react';

import PropTypes from 'prop-types';
import StatListItem from './StatListItem';

const StatList = ({ items }) => {
  if (items.length === 0) {
    return null;
  }

  return items.map(item => <StatListItem key={item.id} item={item} />);
};

StatList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired }),
  ),
};

export default StatList;
