import React from 'react';
import { Profession } from '@discretize/gw2-ui-new';
import profNames from './helper/profNames';

const profArr = Object.values(profNames);
const profValues = (() => {
  const values: string[] = [];
  profArr.forEach((value) => values.push(value[0]))
  return values;
})();

export default {
  title: 'Professions/Profession',
  component: Profession,
  argTypes: {
    embed: { control: false },
    name: {
      description: 'profession or elite-spec name in english',
      control: {
        type: 'select',
      },
      options: [
        ...Object.keys(profNames),
        ...profValues
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

export const DefaultProf = Template.bind({});
DefaultProf.args = {
  embed: 'prof',
  name: 'Harbinger',
  size: false,
  noTooltip: false,
  noText: false,
  noLink: false,
  noIcon: false,
};
