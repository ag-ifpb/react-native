import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';

export default function Button({
  /**
   * nome do botão
   */
  name = 'Button',
  /**
   * define o tipo de botão (ação primária ou secudário)
   * - action pode ser 'primary'ou 'secondary'
   */
  action = 'primary',
  /**
   * propaga o evento de toque
   */
  onPress,
}) {
  //manipula a ação de toque no botão
  function handlePress() {
    if (onPress) {
      onPress();
    }
  }
  return (
    <TouchableOpacity onPress={() => handlePress()}>
      <View style={styles.container(action)}>
        <Text style={styles.text(action)}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
}
