import { Condition } from '@discretize/gw2-ui-new';
import React, { ComponentProps, ReactElement } from 'react';
import EmbedElement from '../shared/embedElement';

export default function condiReactor(
  props: EmbedElement,
  key: string,
): ReactElement {
  const {
    gw2Name,
    gw2Count = undefined,
    gw2DisableTooltip = false,
    gw2DisableText = false,
    gw2DisableLink = false,
    gw2ClassName = undefined,
    gw2Style = undefined,
  } = props.dataset;

  type ConditionProps = ComponentProps<typeof Condition>;

  return (
    <Condition
      name={gw2Name as ConditionProps['name']}
      count={gw2Count}
      disableTooltip={gw2DisableTooltip}
      disableText={gw2DisableText}
      disableLink={gw2DisableLink}
      className={gw2ClassName}
      style={gw2Style}
      key={`${key}`}
    />
  );
}
