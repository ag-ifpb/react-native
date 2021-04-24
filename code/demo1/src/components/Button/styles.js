import {StyleSheet} from 'react-native';

export const primaryColor = '#719A70';
export const seconryColor = '#ccc';

export const styles = StyleSheet.create({
  container: (act) => ({
    width: 150,
    color: act === 'primary' ? '#fff' : '#ccc',
    borderRadius: 3,
    textTransform: 'capitalize',
    fontSize: 12,
    backgroundColor: act === 'primary' ? primaryColor : seconryColor,
    alignItems: 'center',
    paddingVertical: 10,
  }),
  text: (act) => ({
    color: act === 'primary' ? '#fff' : '#888',
    textTransform: 'capitalize',
    fontSize: 12,
  }),
});
