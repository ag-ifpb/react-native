import {StyleSheet} from 'react-native';

export const NORMAL = 'normal';
export const BIG = 'big';

export const styles = StyleSheet.create({
  // kind is [normal, big]
  text: (kind) => ({
    color: '#000',
    fontSize: kind === BIG ? 20 : 12,
  }),
});
