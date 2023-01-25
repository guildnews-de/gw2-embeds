import React from 'react';
import { Coin } from '@discretize/gw2-ui-new';

export default {
  title: 'UI-Elements/Coins',
  component: Coin,
  argTypes: {
    embed: { control: false },
    value: {
      control: { type: 'number', min:1 }
    },
    size: { control: 'boolean' },
    className: { control: false },
  },
};

function Template(args) {
  // @ts-ignore
  window.reloadLib();
  const { embed, value, size } = args;
  return (
    <div
      className="gw2-embed"
      data-gw2-embed={embed}
      data-gw2-value={value}
      data-gw2-size={size}
    />
  );
}

export const defaultCoin = Template.bind({});
defaultCoin.args = {
  embed: 'coins',
  value: 1234567,
  size: false,
};
