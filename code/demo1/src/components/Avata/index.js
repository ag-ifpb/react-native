import React from 'react';
import {Image} from 'react-native';
import {styles} from './styles';

export default function Avata({
  /**
   * name (apenas para gerar o avata)
   */
  name = 'User Name',
  /**
   * url da imagem
   */
  source = null,
  /**
   * outas propriedades
   */
  ...props
}) {
  // propriedades nativas
  const {style} = props;
  return (
    <Image
      style={[styles.container, style]}
      width={style?.width || 100}
      height={style?.height || 100}
      source={{
        uri: `https://ui-avatars.com/api/?name=${name}&background=0D8ABC&color=fff`,
      }}
    />
  );
}
