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
    gw2DefaultSelected = undefined,
    gw2Selectable = false,
    gw2Resettable = false,
    gw2ClassName = undefined,
    gw2Style = undefined,
  } = props.dataset;

  const id = parseInt(gw2Id as string, 10);
  const selection = gw2DefaultSelected
    ? (idParser(gw2DefaultSelected as string) as number[])
    : undefined;

  return (
    <TraitLine
      id={id}
      defaultSelected={selection}
      resettable={gw2Resettable}
      selectable={gw2Selectable}
      className={gw2ClassName}
      style={gw2Style}
      key={key}
    />
  );
}
