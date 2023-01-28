import React from 'react';
import { Skill } from '@discretize/gw2-ui-new';

export default {
  title: 'UI-Elements/Skill',
  component: Skill,
  argTypes: {
    embed: { control: false },
    id: {
      description: 'skill api-ids',
      control: { type: 'number', min: 1 },
    },
    text: { control: 'text'},
    inline: { control: 'boolean' },
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
  const {
    embed,
    id,
    text,
    size,
    inline,
    noTooltip,
    noText,
    noLink,
    noIcon,
  } = args;
  return (
    <div
      data-gw2-embed={embed}
      data-gw2-id={id}
      data-gw2-text={text}
      data-gw2-size={size}
      data-gw2-inline={inline}
      data-gw2-notooltip={noTooltip}
      data-gw2-notext={noText}
      data-gw2-nolink={noLink}
      data-gw2-noicon={noIcon}
    />
  );
}

export const DefaultItem = Template.bind({});
DefaultItem.args = {
  embed: 'skills',
  id: 5548,
  inline: false,
  noTooltip: false,
  noText: false,
  noLink: false,
  noIcon: false,
};

export const MultipleItems = Template.bind({});
MultipleItems.args = {
  embed: 'skills',
  id: '5548 ; 5564 ; 1175',
  inline: false,
  noText: true,
};