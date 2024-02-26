import { Trait } from '@discretize/gw2-ui-new';
import React from 'react';
import { EmbedProps } from '../shared/embedElement';
import idParser from '../shared/idParser';

export default function traitReactor(props: EmbedProps) {
  const {
    gw2Id,
    gw2Text = undefined,
    gw2Notooltip = undefined,
    gw2Notext = undefined,
    gw2Nolink = undefined,
    gw2Noicon = undefined,
    gw2Inline = undefined,
  } = props.dataset;
  const { hash } = props;

  const ids = gw2Id ? idParser(gw2Id) : [0];

  const embed = () =>
    ids.map((id, i) => (
      // eslint-disable-next-line react/no-array-index-key
      <span key={`${hash}${i}`}>
        <Trait
          id={id as number}
          text={gw2Text}
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
