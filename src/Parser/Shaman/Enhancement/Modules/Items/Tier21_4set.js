import React from 'react';

import Analyzer from 'Parser/Core/Analyzer';
import Enemies from 'Parser/Core/Modules/Enemies';
import SPELLS from 'common/SPELLS';
import SpellIcon from 'common/SpellIcon';
import SpellLink from 'common/SpellLink';
import { formatPercentage } from 'common/format';

class Tier21_4set extends Analyzer {
  static dependencies = {
    enemies: Enemies,
  };

  constructor(...args) {
    super(...args);
    this.active = this.selectedCombatant.hasBuff(SPELLS.ENHANCE_SHAMAN_T21_4SET_EQUIP.id);
  }

  item() {
    const T214setUptime = this.enemies.getBuffUptime(SPELLS.EXPOSED_ELEMENTS_T21_ENHANCER.id) / this.owner.fightDuration;
    return {
      id: `spell-${SPELLS.EXPOSED_ELEMENTS_T21_ENHANCER.id}`,
      icon: <SpellIcon id={SPELLS.EXPOSED_ELEMENTS_T21_ENHANCER.id} />,
      title: <SpellLink id={SPELLS.EXPOSED_ELEMENTS_T21_ENHANCER.id} icon={false} />,
      result: `${formatPercentage(T214setUptime)}% uptime`,
    };
  }
}

export default Tier21_4set;
