import React from 'react';
import {Svg, Circle, Path, Line} from 'react-native-svg';

export default function UserPlusIcon({
  /**
   * cor do ícone
   */
  color = 'black',
  /**
   * tamanho do ícone
   */
  size = 16,
}) {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size}>
      <Circle cx="15" cy="8" r="4" fill={color} />
      <Path
        d="M15,14c-6.1,0-8,4-8,4v2h16v-2C23,18,21.1,14,15,14z"
        fill={color}
      />
      <Line
        fill="none"
        stroke={color}
        stroke-miterlimit="10"
        stroke-width="2"
        x1="5"
        x2="5"
        y1="7"
        y2="15"
      />
      <Line
        fill="none"
        stroke={color}
        stroke-miterlimit="10"
        stroke-width="2"
        x1="9"
        x2="1"
        y1="11"
        y2="11"
      />
    </Svg>
  );
}
