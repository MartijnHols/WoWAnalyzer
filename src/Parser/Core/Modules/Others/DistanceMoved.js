import React from 'react';

import Icon from 'common/Icon';
import { formatThousands } from 'common/format';
import { formatPercentage } from 'common/format';

import Analyzer from 'Parser/Core/Analyzer';

import { STATISTIC_ORDER } from 'Main/SmallStatisticBox';
import StatisticBox from 'Main/StatisticBox';


const debug = false;

class DistanceMoved extends Analyzer {
  lastPositionUpdate = null;
  lastPositionChange = null;
  totalDistanceMoved = 0;
  timeSpentMoving = 0;

  // Events
  on_cast(event) {
    if (this.owner.byPlayer(event)) {
      this.updatePlayerPosition(event);
    }
  }

  on_damage(event) {
    if (this.owner.toPlayer(event)) {
      // Damage coordinates are for the target, so they are only accurate when done TO player
      this.updatePlayerPosition(event);
    }
  }

  on_energize(event) {
    if (this.owner.toPlayer(event)) {
      this.updatePlayerPosition(event);
    }
  }

  on_heal(event) {
    if (this.owner.toPlayer(event)) {
      this.updatePlayerPosition(event);
    }
  }

  on_absorbed(event) {
    if (this.owner.toPlayer(event)) {
      this.updatePlayerPosition(event);
    }
  }

  timeSinceLastMovement(){
    return this.owner.timestamp - this.lastPositionChange.timestamp;
  }

  // Data parsing
  calculateDistance(x1, y1, x2, y2) {
    return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2)) / 100;
  }

  updateTotalDistance(event) {
    if (!this.lastPositionUpdate) {
      return;
    }
    const distanceMoved = this.calculateDistance(this.lastPositionUpdate.x, this.lastPositionUpdate.y, event.x, event.y);
    if (distanceMoved !== 0) {
      this.timeSpentMoving += event.timestamp - this.lastPositionUpdate.timestamp;
      this.totalDistanceMoved += distanceMoved;
    }    
  }

  updatePlayerPosition(event) {
    if (!event.x || !event.y) {
      return;
    }
    this.updateTotalDistance(event);
    if (!this.lastPositionChange || event.x !== this.lastPositionChange.x || event.y !== this.lastPositionChange.y) {
      this.lastPositionChange = event;
    }
    this.lastPositionUpdate = event;
  }

  statistic() {
    debug && console.log(`Time spent moving: ${this.timeSpentMoving / 1000} s, Total distance moved: ${this.totalDistanceMoved} yds`);

    return (
      <React.Fragment>
        <StatisticBox
          icon={<Icon icon="spell_fire_burningspeed" />}
          label="Distance moved"
          tooltip={`≈${formatThousands(this.totalDistanceMoved / (this.owner.fightDuration / 1000) * 60)} yards per minute. Consider this when analyzing the fight, as some fights require more movement than others. Unnecessary movement can result in a DPS/HPS loss.`}
          value={`≈${formatThousands(this.totalDistanceMoved)} yards`}
          small
        />
        <StatisticBox
          icon={<Icon icon="inv_misc_pocketwatch_02" />}
          label="Time spent moving"
          tooltip={`In ≈${formatThousands(this.timeSpentMoving / 1000)} seconds of movement you moved ≈${formatThousands(this.totalDistanceMoved)} yards. This statistic is not entirely accurate and may be overstated for fights with lots of problems.`}
          value={`≈${formatPercentage(this.timeSpentMoving / (this.owner.fightDuration))} %`}
          small
        />
      </React.Fragment>
    );
  }
  statisticOrder = STATISTIC_ORDER.UNIMPORTANT(1000);
}

export default DistanceMoved;
