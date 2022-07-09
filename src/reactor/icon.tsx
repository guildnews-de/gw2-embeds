import { IconWithText } from '@discretize/gw2-ui-new';
import React, { ReactElement } from 'react';
import EmbedElement from '../shared/embedElement';
import assets from '../assets';

export default function iconReactor(
  props: EmbedElement,
  key: string,
): ReactElement {
  const {
    gw2Name = 'ap',
    gw2Text = undefined,
    gw2DisableText = false,
    gw2DisableIcon = false,
    gw2ClassName = undefined,
    gw2Style = undefined,
  } = props.dataset;

  let iconSrc;
  let iconColor;
  let iconTxt;
  try {
    const { src, color, text } = assets[gw2Name as keyof typeof assets];
    iconSrc = src;
    iconColor = color;
    iconTxt = gw2Text || text;
  } catch (error) {
    console.log(`Icon data not found ${error}`);
  }

  const iconStyle = {
    ...gw2Style,
    color: iconColor,
  };

  return (
    <IconWithText
      icon={iconSrc as string}
      text={iconTxt}
      disableIcon={gw2DisableIcon}
      disableText={gw2DisableText}
      className={gw2ClassName}
      style={iconStyle}
      key={key}
    />
  );
}
