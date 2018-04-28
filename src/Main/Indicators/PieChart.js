import React from 'react';
import PropTypes from 'prop-types';

import '../StatisticBox.css';
import './Indicators.css';
import './Horizontal.css';
import './Vertical.css';
import './PieChart.css';

export { default as STATISTIC_ORDER } from '../STATISTIC_ORDER';

const PieChart = ({ chart, title, legend, direction, small, medium }) => (
  <div className={`indicator -pie-chart -${direction} ${small ? '-small' : ''} ${medium ? '-medium' : ''}`}>
    <div>
      <figure>
        {chart}
      </figure>
    </div>
    <div>
      <div className="value">
        {title}
      </div>
      <div className="sub-label">
        {legend}
      </div>
    </div>
  </div>
);
PieChart.propTypes = {
  chart: PropTypes.node.isRequired,
  title: PropTypes.node.isRequired,
  legend: PropTypes.node,
  direction: PropTypes.oneOf(['horizontal', 'vertical']).isRequired,
  small: PropTypes.bool,
  medium: PropTypes.bool,
};

export default PieChart;
