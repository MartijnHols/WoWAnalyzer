import React from 'react';

import ITEMS from 'common/ITEMS';
import SPELLS from 'common/SPELLS';
import Analyzer from 'Parser/Core/Analyzer';
import ItemDamageDone from 'Interface/Others/ItemDamageDone';

/**
 * Gorshalach's Legacy -
 * Equip: Your melee attacks have a chance to grant an Echo of Gorshalach. On reaching 15 applications, you lash out with a devastating combination of attacks, critically striking enemies in a 15 yd cone in front of you for (578175 + 1349069) Fire damage.
 */
class GorshalachsLegacy extends Analyzer {
  damage = 0;

  constructor(...args) {
    super(...args);
    this.active = this.selectedCombatant.hasTrinket(ITEMS.GORSHALACHS_LEGACY.id);
  }

  on_byPlayer_damage(event) {
    const spellId = event.ability.guid;
    if (spellId === SPELLS.GORSHALACHS_LEGACY_FIRST_HIT.id || spellId === SPELLS.GORSHALACHS_LEGACY_SECOND_HIT.id) {
      this.damage += event.amount + (event.absorbed || 0);
    }
  }

  item() {
    return {
      item: ITEMS.GORSHALACHS_LEGACY,
      result: <ItemDamageDone amount={this.damage} />,
    };
  }
}

export default GorshalachsLegacy;
