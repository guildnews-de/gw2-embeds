import React from 'react';
import { ControlEffect } from '@discretize/gw2-ui-new';

export default {
  title: 'Effects/Control',
  component: ControlEffect,
  argTypes: {
    embed: { control: false },
    name: {
      description: 'control effect name in english',
      control: {
        type: 'select',
      },
      options: [
        'Daze',
        'Float',
        'Knockback',
        'Knockdown',
        'Launch',
        'Pull',
        'Sink',
        'Stun',
      ],
    },
    noTooltip: { control: 'boolean' },
    noText: { control: 'boolean' },
    noLink: { control: 'boolean' },
    noIcon: { control: 'boolean' },
    size: { control: 'boolean' },
    className: { control: 'text' },
  },
};

function Template(args) {
  // @ts-ignore
  window.reloadLib();
  const { embed, name, size, noTooltip, noText, noLink, noIcon } = args;
  return (
    <div
      data-gw2-embed={embed}
      data-gw2-name={name}
      data-gw2-size={size}
      data-gw2-notooltip={noTooltip}
      data-gw2-notext={noText}
      data-gw2-nolink={noLink}
      data-gw2-noicon={noIcon}
    />
  );
}

export const defaultControl = Template.bind({});
defaultControl.args = {
  embed: 'control',
  name: 'Daze',
  size: false,
  noTooltip: false,
  noText: false,
  noLink: false,
  noIcon: false,
};
