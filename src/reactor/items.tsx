import { Item } from '@discretize/gw2-ui-new';
import React, { ComponentProps } from 'react';
import { EmbedProps } from '../shared/embedElement';
import idParser from '../shared/idParser';
import upgradeParser from '../shared/upgradeParser';

export default function itemReactor(props: EmbedProps) {
  const {
    gw2Id,
    gw2Count = undefined,
    gw2Upgrades = undefined,
    gw2Stats = undefined,
    gw2Notooltip = undefined,
    gw2Notext = undefined,
    gw2Nolink = undefined,
    gw2Noicon = undefined,
    gw2Inline = undefined,
  } = props.dataset;
  const { hash } = props;

  const ids = gw2Id ? idParser(gw2Id) : [0];
  const upgrades = gw2Upgrades ? upgradeParser(gw2Upgrades) : undefined;

  type ItemProps = ComponentProps<typeof Item>;

  const embed = () =>
    ids.map((id, i) => (
      // eslint-disable-next-line react/no-array-index-key
      <span key={`${hash}${i}`}>
        <Item
          id={id as number}
          count={gw2Count}
          upgrades={
            upgrades ? (upgrades[i] as ItemProps['upgrades']) : undefined
          }
          stat={gw2Stats}
          disableTooltip={
            gw2Notooltip !== undefined && gw2Notooltip !== 'false'
          }
          disableText={gw2Notext !== undefined && gw2Notext !== 'false'}
          disableLink={gw2Nolink !== undefined && gw2Nolink !== 'false'}
          disableIcon={gw2Noicon !== undefined && gw2Noicon !== 'false'}
          inline={gw2Inline !== undefined && gw2Inline !== 'false'}
          //style={gw2Style}
          {...props}
        />{' '}
      </span>
    ));
  return embed();
}
