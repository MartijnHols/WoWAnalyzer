import React from 'react';
import PropTypes from 'prop-types';

import './StatisticBox.css';

export { default as STATISTIC_ORDER } from './STATISTIC_ORDER';

const StatisticsListBox = ({ title, tooltip, children, bodyStyle, ...others }) => (
  <div className="panel statistic-box statistic-list" {...others}>
    {title && (
      <div className="panel-heading">
        <h2>{tooltip ? <dfn data-tip={tooltip}>{title}</dfn> : title}</h2>
      </div>
    )}
    <div className="panel-body items" style={bodyStyle}>
      {children}
    </div>
  </div>
);
StatisticsListBox.propTypes = {
  title: PropTypes.node,
  children: PropTypes.node.isRequired,
  tooltip: PropTypes.string,
  bodyStyle: PropTypes.object,
};

export default StatisticsListBox;
