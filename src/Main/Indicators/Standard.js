import React from 'react';
import PropTypes from 'prop-types';

import '../StatisticBox.css';
import './Indicators.css';
import './Horizontal.css';
import './Vertical.css';

export { default as STATISTIC_ORDER } from '../STATISTIC_ORDER';

const Statistic = ({ icon, value, tooltip, label, subStat, footer, footerStyle, direction, small, medium }) => (
  <div className={`indicator -${direction} ${small ? '-small' : ''} ${medium ? '-medium' : ''}`}>
    <div>
      <figure>
        {icon}
      </figure>
    </div>
    <div>
      <div className="value">
        {value}
      </div>
      <div className="sub-label">
        {tooltip ? <dfn data-tip={tooltip}>{label}</dfn> : label}
      </div>
      {subStat && (
        <div className="sub-stat">
          {subStat}
        </div>
      )}
      {footer && (
        <div style={{ margin: '8px 0', borderRadius: 5, padding: 0, borderTop: 0, ...footerStyle }}>
          {footer}
        </div>
      )}
    </div>
  </div>
);
Statistic.propTypes = {
  icon: PropTypes.node.isRequired,
  value: PropTypes.node.isRequired,
  tooltip: PropTypes.string,
  label: PropTypes.node.isRequired,
  subStat: PropTypes.node.isRequired,
  footer: PropTypes.node,
  footerStyle: PropTypes.object,
  direction: PropTypes.oneOf(['horizontal', 'vertical']).isRequired,
  small: PropTypes.bool,
  medium: PropTypes.bool,
};

export default Statistic;
