import { TraitLine } from '@discretize/gw2-ui-new';
import React, { ReactElement } from 'react';
import EmbedElement from '../shared/embedElement';
import idParser from '../shared/idParser';

export default function traitlineReactor(
  props: EmbedElement,
  key: string,
): ReactElement {
  const {
    gw2Id,
    gw2Traits = undefined,
    gw2Edit = undefined,
    gw2Class = undefined,
    gw2Style = undefined,
  } = props.dataset;

  const id = parseInt(gw2Id as string, 10);
  const selection = gw2Traits
    ? (idParser(gw2Traits as string) as number[])
    : undefined;

  return (
    <TraitLine
      id={id}
      selected={gw2Edit && gw2Edit !== 'false' ? undefined : selection}
      defaultSelected={gw2Edit && gw2Edit !== 'false' ? selection : undefined}
      resettable={!!(gw2Edit && gw2Edit !== 'false')}
      selectable={!!(gw2Edit && gw2Edit !== 'false')}
      className={gw2Class}
      style={gw2Style}
      key={key}
    />
  );
}
