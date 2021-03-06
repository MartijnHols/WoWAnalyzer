import CoreAlwaysBeCasting from 'Parser/Core/Modules/AlwaysBeCasting';
import { STATISTIC_ORDER } from 'Interface/Others/StatisticBox';

class AlwaysBeCasting extends CoreAlwaysBeCasting {
  suggestions(when) {
    // override the suggestions from CoreAlwaysBeCasting so there's never any generated, but we still get the statistic.
    return null;
  }
  statisticOrder = STATISTIC_ORDER.CORE(1);
}

export default AlwaysBeCasting;
