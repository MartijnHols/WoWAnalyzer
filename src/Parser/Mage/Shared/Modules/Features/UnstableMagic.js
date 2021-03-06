import React from 'react';
import SPELLS from 'common/SPELLS';
import SpellIcon from 'common/SpellIcon';
import { formatPercentage } from 'common/format';
import StatisticBox, { STATISTIC_ORDER } from 'Interface/Others/StatisticBox';
import Analyzer from 'Parser/Core/Analyzer';

// Unstable Magic cleaves don't always hit on identical timestamps, so we're giving a 100ms buffer
const PROC_WINDOW_MS = 100;

const PROCCERS = [
  SPELLS.FROSTBOLT_DAMAGE.id,
  SPELLS.FIREBALL.id,
  SPELLS.ARCANE_BLAST.id,
];

const PROCS = [
  SPELLS.UNSTABLE_MAGIC_DAMAGE_FIRE.id,
  SPELLS.UNSTABLE_MAGIC_DAMAGE_FROST.id,
  SPELLS.UNSTABLE_MAGIC_DAMAGE_ARCANE.id,
];

class UnstableMagic extends Analyzer {
  proccerHits = 0;
  damage = 0;
  hits = 0;
  procs = 0;
  hitTimestamp;

  constructor(...args) {
    super(...args);
	   this.active = this.selectedCombatant.hasTalent(SPELLS.UNSTABLE_MAGIC_TALENT.id);
  }

  on_byPlayer_damage(event) {
    const spellId = event.ability.guid;
    if(PROCS.includes(spellId)) {
      this.damage += event.amount + (event.absorbed || 0);
      this.hits += 1;
      if(!this.hitTimestamp || this.hitTimestamp + PROC_WINDOW_MS < this.owner.currentTimestamp) {
        this.hitTimestamp = this.owner.currentTimestamp;
        this.procs += 1;
      }
    } else if(PROCCERS.includes(spellId)) {
      this.proccerHits += 1;
    }
  }


  get damagePercent() {
    return this.owner.getPercentageOfTotalDamageDone(this.damage);
  }


  get averageHits() {
    return (this.hits / this.procs) || 0;
  }

  get procRate() {
    return (this.procs / this.proccerHits) || 0;
  }

  statistic() {
    return (
      <StatisticBox
        icon={<SpellIcon id={SPELLS.UNSTABLE_MAGIC_TALENT.id} />}
        value={`${formatPercentage(this.damagePercent)} %`}
        label="Unstable Magic damage"
        tooltip={`This is the portion of your total damage attributable to Unstable Magic.
          <ul>
          <li>Targets Hit per Proc: <b>${this.averageHits.toFixed(2)}</b> (including primary target)</li>
          <li>Proc Rate: <b>${formatPercentage(this.procRate)}%</b></li>
          </ul>`}
      />
    );
  }
  statisticOrder = STATISTIC_ORDER.OPTIONAL(100);
}

export default UnstableMagic;
