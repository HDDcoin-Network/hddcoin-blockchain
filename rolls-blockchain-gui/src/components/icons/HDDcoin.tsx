import React from 'react';
import { SvgIcon, SvgIconProps } from '@material-ui/core';
import { ReactComponent as PecanRollsIcon } from './images/rolls.svg';

export default function Keys(props: SvgIconProps) {
  return <SvgIcon component={PecanRollsIcon} viewBox="0 0 150 58" {...props} />;
}
