import { ControlEffect } from '@discretize/gw2-ui-new';
import React, { ComponentProps, ReactElement } from 'react';
import EmbedElement from '../shared/embedElement';

export default function controlReactor(
  props: EmbedElement,
  key: string,
): ReactElement {
  const {
    gw2Name,
    gw2DisableTooltip = false,
    gw2DisableText = false,
    gw2DisableLink = false,
    gw2ClassName = undefined,
    gw2Style = undefined,
  } = props.dataset;

  type ControlEffectProps = ComponentProps<typeof ControlEffect>;

  return (
    <ControlEffect
      name={gw2Name as ControlEffectProps['name']}
      disableTooltip={gw2DisableTooltip}
      disableText={gw2DisableText}
      disableLink={gw2DisableLink}
      className={gw2ClassName}
      style={gw2Style}
      key={`${key}`}
    />
  );
}
