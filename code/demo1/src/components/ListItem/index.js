import React from 'react';
import {View} from 'react-native';
import {ArrowDownIcon, UserPlusIcon} from '../Icons';
import Avata from '../Avata';
import TextLabel from '../TextLabel';
import {styles} from './styles';

export default function ListItem({
  /**
   * image
   */
  image = null,
  /**
   * nome
   */
  name = 'Name',
  /**
   * quantidade de alguma coisa
   */
  quantity = 0,
}) {
  return (
    <View style={styles.container}>
      <Avata name={name} style={styles.avata} source={{uri: image}} />
      <TextLabel style={styles.label}>{name}</TextLabel>
      <View style={styles.qtContainer}>
        <ArrowDownIcon />
        <TextLabel style={styles.quantity}>{quantity}</TextLabel>
      </View>
      <View style={styles.iconContainer}>
        <UserPlusIcon />
      </View>
    </View>
  );
}
