import React from 'react';
import { Link } from 'react-router-dom';

import ChecklistIcon from 'Icons/Checklist';
import PerformanceIcon from 'Icons/Performance';
import MoreIcon from 'Icons/More';

import makeAnalyzerUrl from 'Main/makeAnalyzerUrl';

import './ResultsNavigation.css';

class ResultsNavigation extends React.PureComponent {
  static propTypes = {
  };

  render() {
    return (
      <nav className="results">
        <ul>
          <li>
            <Link to={makeAnalyzerUrl()}>
              <ChecklistIcon /> Checklist
            </Link>
          </li>
          <li>
            <Link to={makeAnalyzerUrl()}>
              <PerformanceIcon /> Statistics
            </Link>
          </li>
          <li>
            <Link to={makeAnalyzerUrl()}>
              <MoreIcon /> Miscellaneous
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default ResultsNavigation;
