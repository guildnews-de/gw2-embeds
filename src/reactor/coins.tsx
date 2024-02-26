import { Coin } from '@discretize/gw2-ui-new';
import React, { ReactElement } from 'react';
import { EmbedProps } from '../shared/embedElement';

export default function coinReactor(props: EmbedProps): ReactElement {
  const { gw2Value } = props.dataset;
  const { hash } = props;

  return (
    <Coin
      value={gw2Value as number}
      //style={gw2Style}
      key={`${hash}`}
      {...props}
    />
  );
}
