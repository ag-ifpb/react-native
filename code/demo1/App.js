import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {MainLayout} from './src/layout';
import {Avata, TextLabel, Button, ListItem} from './src/components';

function App() {
  // lista de usuários
  const profiles = [
    {img: '', qt: 114, name: 'John Smith'},
    {img: '', qt: 115, name: 'Paulo Silveira'},
    {img: '', qt: 299, name: 'João Marcos'},
    {img: '', qt: 123, name: 'Ana Maria Braga'},
  ];
  //
  return (
    <React.Fragment>
      <MainLayout
        profileName={'Paul Allen'}
        profileUrl={null}
        profiles={profiles}
      />
    </React.Fragment>
  );
}

export default App;
