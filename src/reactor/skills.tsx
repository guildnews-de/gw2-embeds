import { Skill } from '@discretize/gw2-ui-new';
import React from 'react';
import EmbedElement from '../shared/embedElement';
import idParser from '../shared/idParser';

export default function skillReactor(props: EmbedElement, key: string) {
  const {
    gw2Id,
    gw2Text = undefined,
    gw2Notooltip = undefined,
    gw2Notext = undefined,
    gw2Nolink = undefined,
    gw2Noicon = undefined,
    gw2Class = undefined,
    gw2Inline = undefined,
    gw2Style = undefined,
  } = props.dataset;

  const ids = gw2Id ? idParser(gw2Id) : [0];

  const embed = () =>
    ids.map((id, i) => (
      // eslint-disable-next-line react/no-array-index-key
      <span key={`${key}${i}`}>
        <Skill
          id={id as number}
          text={gw2Text}
          disableTooltip={gw2Notooltip !== undefined && gw2Notooltip !== 'false'}
          disableText={gw2Notext !== undefined && gw2Notext !== 'false'}
          disableLink={gw2Nolink !== undefined && gw2Nolink !== 'false'}
          disableIcon={gw2Noicon !== undefined && gw2Noicon !== 'false'}
          inline={gw2Inline !== undefined && gw2Inline !== 'false'}
          className={gw2Class}
          style={gw2Style}
        />{' '}
      </span>
    ));
  return embed();
}
