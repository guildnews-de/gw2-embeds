import React from 'react';
import { TraitLine } from '@discretize/gw2-ui-new';

export default {
  title: 'Professions/TraitLine',
  component: TraitLine,
  argTypes: {
    embed: { control: false },
    id: {
      description: 'TraitLine api-ids',
      control: { type: 'number', min: 1 },
    },
    selected: {
      description: 'TraitLine api-ids',
      control: { type: 'object' },
    },
    editable: { control: 'boolean'},
    className: { control: 'text' },
  },
};

function Template(args) {
  // @ts-ignore
  window.reloadLib();
  const { embed, id, selected, editable, className} = args;
  return (
    <div
      data-gw2-embed={embed}
      data-gw2-id={id}
      data-gw2-traits={selected}
      data-gw2-edit={editable}
      data-gw2-class={className}
    />
  );
}

export const DefaultProf = Template.bind({});
DefaultProf.args = {
  embed: 'traitline',
  id: 41,
  selected: [
    227,
    214,
    1672
  ],
  editable: false,
};
