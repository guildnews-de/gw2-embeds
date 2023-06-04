import { Aura } from '@discretize/gw2-ui-new';
import React, { ComponentProps, ReactElement } from 'react';
import { EmbedProps } from '../shared/embedElement';

export default function auraReactor(props: EmbedProps): ReactElement {
  const {
    gw2Name,
    gw2Notooltip = undefined,
    gw2Notext = undefined,
    gw2Nolink = undefined,
    gw2Noicon = undefined,
  } = props.dataset;

  type AuraProps = ComponentProps<typeof Aura>;
  const { hash } = props;

  return (
    <Aura
      name={gw2Name as AuraProps['name']}
      disableTooltip={gw2Notooltip !== undefined && gw2Notooltip !== 'false'}
      disableText={gw2Notext !== undefined && gw2Notext !== 'false'}
      disableLink={gw2Nolink !== undefined && gw2Nolink !== 'false'}
      disableIcon={gw2Noicon !== undefined && gw2Noicon !== 'false'}
      //style={style}
      key={`${hash}`}
      {...props}
    />
  );
}
