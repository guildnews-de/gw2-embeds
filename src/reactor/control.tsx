import { ControlEffect } from '@discretize/gw2-ui-new';
import React, { ComponentProps, ReactElement } from 'react';
import { EmbedProps } from '../shared/embedElement';

export default function controlReactor(props: EmbedProps): ReactElement {
  const {
    gw2Name,
    gw2Notooltip = undefined,
    gw2Notext = undefined,
    gw2Nolink = undefined,
    gw2Noicon = undefined,
  } = props.dataset;
  const { hash } = props

  type ControlEffectProps = ComponentProps<typeof ControlEffect>;

  return (
    <ControlEffect
      name={gw2Name as ControlEffectProps['name']}
      disableTooltip={gw2Notooltip !== undefined && gw2Notooltip !== 'false'}
      disableText={gw2Notext !== undefined && gw2Notext !== 'false'}
      disableLink={gw2Nolink !== undefined && gw2Nolink !== 'false'}
      disableIcon={gw2Noicon !== undefined && gw2Noicon !== 'false'}
      //style={gw2Style}
      key={`${hash}`}
      {...props}
    />
  );
}
