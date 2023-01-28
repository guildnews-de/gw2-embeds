import { Coin } from '@discretize/gw2-ui-new';
import React, { ReactElement } from 'react';
import EmbedElement from '../shared/embedElement';

export default function coinReactor(
  props: EmbedElement,
  key: string,
): ReactElement {
  const {
    gw2Value,
    gw2Class = undefined,
    gw2Style = undefined,
  } = props.dataset;

  return (
    <Coin
      value={gw2Value as number}
      className={gw2Class}
      style={gw2Style}
      key={`${key}`}
    />
  );
}
