import React from 'react';

import './StatisticBox.css';
import Indicator from './Indicators/Standard';

export { default as STATISTIC_ORDER } from './STATISTIC_ORDER';

const StatisticBox = props => (
  <Indicator direction="horizontal" {...props} />
);

export default StatisticBox;
