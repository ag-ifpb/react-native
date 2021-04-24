import {StyleSheet} from 'react-native';

export const mainStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: '#eee',
  },
  profileContainer: {
    backgroundColor: '#fff',
    padding: 20,
    marginBottom: 5,
  },
  profileImagePanel: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImagePanelText: {
    marginStart: 20,
    color: '#625D8E',
    fontWeight: 'bold',
    fontSize: 30,
  },
  profileButtonsPanel: {
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  listContainer: {
    flex: 1,
  },
  listContainerPanel: {
    flex: 1,
    width: '100%',
  },
  diviser: {
    marginTop: 20,
    marginBottom: 0,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  },
});
