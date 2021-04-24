import React from 'react';
import {Text} from 'react-native';
import {NORMAL, styles} from './styles';

export default function TextLabel({
  /**
   * tipo de label (define um tamanho)
   */
  kind = NORMAL,
  /**
   * filho
   */
  ...props
}) {
  // recuperar propriedades nativas do componente
  const {children, style} = props;

  return <Text style={[styles.text(kind), style]}>{children}</Text>;
}
