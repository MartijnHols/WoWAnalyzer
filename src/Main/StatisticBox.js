import React from 'react';
import PropTypes from 'prop-types';

import './StatisticBox.css';

export { default as STATISTIC_ORDER } from './STATISTIC_ORDER';

const StatisticBox = ({ icon, value, tooltip, label, footer, footerStyle, ...others }) => (
  <div className="panel statistic-box" {...others}>
    <div className="panel-body flex">
      <div className="flex-sub">
        <figure>
          {icon}
        </figure>
      </div>
      {footer ? (
        <div className="flex-main">
          <div className="value">
            <div style={{ margin: '8px 0', borderRadius: 5, padding: 0, borderTop: 0, ...footerStyle }}>
              {footer}
            </div>
          </div>
          <div className="slabel">
            {value} {tooltip ? <dfn data-tip={tooltip}>{label}</dfn> : label}
          </div>
        </div>
      ) : (
        <div className="flex-main">
          <div className="value">
            {value}
          </div>
          <div className="slabel">
            {tooltip ? <dfn data-tip={tooltip}>{label}</dfn> : label}
          </div>
        </div>
      )}
    </div>
  </div>
);
StatisticBox.propTypes = {
  icon: PropTypes.node.isRequired,
  value: PropTypes.node.isRequired,
  tooltip: PropTypes.string,
  label: PropTypes.node.isRequired,
  footer: PropTypes.node,
  footerStyle: PropTypes.object,
  alignIcon: PropTypes.string,
};

export default StatisticBox;
