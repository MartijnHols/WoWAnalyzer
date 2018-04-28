import React from 'react';
import PropTypes from 'prop-types';

import './StatisticBox.css';
import Indicator from './Indicators/Standard';

export { default as STATISTIC_ORDER } from './STATISTIC_ORDER';

const StatisticBox = ({ direction, ...others }) => (
  <Indicator direction={direction} {...others} />
);
StatisticBox.propTypes = {
  direction: PropTypes.string,
};
StatisticBox.defaultProps = {
  direction: 'horizontal',
};

export default StatisticBox;
