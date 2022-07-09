import { Item } from '@discretize/gw2-ui-new';
import React, { ComponentProps } from 'react';
import EmbedElement from '../shared/embedElement';
import idParser from '../shared/idParser';

export default function itemReactor(props: EmbedElement, key: string) {
  const {
    gw2Id,
    gw2Count = undefined,
    gw2Upgrades = undefined,
    gw2Stat = undefined,
    gw2DisableTooltip = false,
    gw2DisableText = false,
    gw2DisableLink = false,
    gw2ClassName = undefined,
    gw2Inline = false,
    gw2Style = undefined,
  } = props.dataset;

  const ids = gw2Id ? idParser(gw2Id) : [0];
  const upgrades = gw2Upgrades ? idParser(gw2Upgrades) : undefined;

  type ItemProps = ComponentProps<typeof Item>;

  const embed = () =>
    ids.map((id, i) => (
      // eslint-disable-next-line react/no-array-index-key
      <span key={`${key}${i}`}>
        <Item
          id={id as number}
          count={gw2Count}
          upgrades={
            upgrades ? (upgrades[i] as ItemProps['upgrades']) : undefined
          }
          stat={gw2Stat}
          disableTooltip={gw2DisableTooltip}
          disableText={gw2DisableText}
          disableLink={gw2DisableLink}
          className={gw2ClassName}
          inline={gw2Inline}
          style={gw2Style}
        />{' '}
      </span>
    ));
  return embed();
}
