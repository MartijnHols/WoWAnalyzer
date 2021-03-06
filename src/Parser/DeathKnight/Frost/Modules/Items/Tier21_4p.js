import React from 'react';

import Analyzer from 'Parser/Core/Analyzer';

import SPELLS from 'common/SPELLS';
import SpellLink from 'common/SpellLink';
import SpellIcon from 'common/SpellIcon';
import ItemDamageDone from 'Interface/Others/ItemDamageDone';

/**
 * When you deal Frost damage, you have a chance to release a barrage of icy spikes at your target dealing (210% * 3) Frost damage.
 */

class Tier21_4p extends Analyzer {
  damage = 0;

  constructor(...args) {
    super(...args);
    this.active = this.selectedCombatant.hasBuff(SPELLS.FROST_DEATH_KNIGHT_T21_4SET_BONUS.id);
  }

  on_byPlayer_damage(event){
    const spellId = event.ability.guid;
    if(spellId !== SPELLS.FREEZING_DEATH.id){
      return;
    }
    this.damage += event.amount + (event.absorbed || 0);
  }

  item() {
    return {
      id: `spell-${SPELLS.FROST_DEATH_KNIGHT_T21_4SET_BONUS.id}`,
      icon: <SpellIcon id={SPELLS.FREEZING_DEATH.id} />,
      title: <SpellLink id={SPELLS.FROST_DEATH_KNIGHT_T21_4SET_BONUS.id} icon={false} />,
      result: <ItemDamageDone amount={this.damage} />,
    };
  }
}

export default Tier21_4p;
