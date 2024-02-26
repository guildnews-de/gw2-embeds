import { IconWithText } from '@discretize/gw2-ui-new';
import React, { ReactElement } from 'react';
import { EmbedProps } from '../shared/embedElement';
import assets from '../assets';

export default function iconReactor(props: EmbedProps): ReactElement {
  const {
    gw2Name = 'ap',
    gw2Count = undefined,
    gw2Text = undefined,
    gw2Notext = undefined,
    gw2Noicon = undefined,
  } = props.dataset;
  const { hash } = props;

  let iconSrc;
  let iconColor;
  let iconTxt;
  try {
    const { src, color, text } = assets[gw2Name as keyof typeof assets];
    iconSrc = src;
    iconColor = color;
    const descr = gw2Text || text;
    iconTxt = gw2Count ? `${gw2Count} ${descr}` : descr;
  } catch (error) {
    console.log(`Icon data not found ${error}`);
  }

  const iconStyle = {
    color: iconColor,
  };

  return (
    <IconWithText
      icon={iconSrc as string}
      text={iconTxt}
      disableIcon={gw2Noicon !== undefined && gw2Noicon !== 'false'}
      disableText={gw2Notext !== undefined && gw2Notext !== 'false'}
      style={iconStyle}
      key={hash}
      {...props}
    />
  );
}
