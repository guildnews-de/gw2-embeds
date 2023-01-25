import React from 'react';
import { Item } from '@discretize/gw2-ui-new';
import itemStatNames from './helper/ItemStatNames';

export default {
  title: 'UI-Elements/Items',
  component: Item,
  argTypes: {
    embed: { control: false },
    id: {
      description: 'item api-ids',
      control: { type: 'number', min: 1 },
    },
    stats: {
      description: 'stat name in english',
      control: {
        type: 'select',
      },
      options: Object.values(itemStatNames),
    },
    upgrades: { control: 'text' },
    count: {
      control: { type: 'range', min: 1, max: 250 },
    },
    noTooltip: { control: 'boolean' },
    noText: { control: 'boolean' },
    noLink: { control: 'boolean' },
    noIcon: { control: 'boolean' },
    size: { control: 'boolean' },
    className: { control: false },
  },
};

function Template(args) {
  // @ts-ignore
  window.reloadLib();
  const {
    embed,
    id,
    stats,
    upgrades,
    count,
    size,
    noTooltip,
    noText,
    noLink,
    noIcon,
  } = args;
  return (
    <div
      className="gw2-embed"
      data-gw2-embed={embed}
      data-gw2-id={id}
      data-gw2-stats={stats}
      data-gw2-upgrades={upgrades}
      data-gw2-count={count}
      data-gw2-size={size}
      data-gw2-notooltip={noTooltip}
      data-gw2-notext={noText}
      data-gw2-nolink={noLink}
      data-gw2-noicon={noIcon}
    />
  );
}

export const DefaultItem = Template.bind({});
DefaultItem.args = {
  embed: 'items',
  id: 75187,
  stats: 'Berserker',
  upgrades: '86303, 86303',
  size: false,
  noTooltip: false,
  noText: false,
  noLink: false,
  noIcon: false,
};

export const MultipleItems = Template.bind({});
MultipleItems.args = {
  embed: 'items',
  id: '75187 ; 45079',
  stats: 'Destroyer',
  upgrades: '86303,49443 ; 87528',
};

export const MultiTierRunes = Template.bind({});
MultiTierRunes.args = {
  embed: 'items',
  id: '45079',
  stats: 'Valkyrie',
  upgrades: '89999+3',
};