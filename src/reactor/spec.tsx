import { Specialization } from '@discretize/gw2-ui-new';
import React from 'react';
import EmbedElement from '../shared/embedElement';
import idParser from '../shared/idParser';

export default function specializationReactor(
  props: EmbedElement,
  key: string,
) {
  const {
    gw2Id,
    gw2Text = undefined,
    gw2DisableText = false,
    gw2DisableLink = false,
    gw2DisableIcon = false,
    gw2ClassName = undefined,
    gw2Inline = false,
    gw2Style = undefined,
  } = props.dataset;

  const ids = gw2Id ? idParser(gw2Id) : [0];

  const embed = () =>
    ids.map((id, i) => (
      // eslint-disable-next-line react/no-array-index-key
      <span key={`${key}${i}`}>
        <Specialization
          id={id as number}
          text={gw2Text}
          disableText={gw2DisableText}
          disableLink={gw2DisableLink}
          disableIcon={gw2DisableIcon}
          className={gw2ClassName}
          inline={gw2Inline}
          style={gw2Style}
        />{' '}
      </span>
    ));
  return embed();
}
