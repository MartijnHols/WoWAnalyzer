import React from 'react';

import Analyzer from 'Parser/Core/Analyzer';
import { STATISTIC_ORDER } from 'Main/Indicators/Standard';

import FillerCastRatio from './FillerCastRatio';
import InfusionOfLightCastRatio from './InfusionOfLightCastRatio';

class CastBehavior extends Analyzer {
  static dependencies = {
    infusionOfLightCastRatio: InfusionOfLightCastRatio,
    fillerCastRatio: FillerCastRatio,
  };

  statistic() {
    return (
      <React.Fragment>
        {this.infusionOfLightCastRatio.subStatistic()}
        {this.fillerCastRatio.subStatistic()}
      </React.Fragment>
    );
  }
  statisticOrder = STATISTIC_ORDER.CORE(199);
}

export default CastBehavior;
