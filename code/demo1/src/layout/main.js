import React from 'react';
import {FlatList, View} from 'react-native';
import {Avata, Button, ListItem, TextLabel} from '../components';
import {mainStyles} from './styles';

export default function MainLayout({
  /**
   * Nome do usuário
   */
  profileName = 'Profile Name',
  /**
   * Image do usuário
   */
  profileUrl = 'https://image.freepik.com/vetores-gratis/avata-da-cabeca-do-gato-abyssinian_73950-151.jpg',
  /**
   * lista de usuários
   */
  profiles = [],
}) {
  return (
    <View style={mainStyles.mainContainer}>
      {/* card para o profile e dois botões */}
      <View style={mainStyles.profileContainer}>
        {/* parte da image e nome */}
        <View style={mainStyles.profileImagePanel}>
          <Avata name={profileName} source={{uri: profileUrl}} />
          <TextLabel style={mainStyles.profileImagePanelText} kind={'big'}>
            {profileName}
          </TextLabel>
        </View>
        {/* diviser */}
        <View style={mainStyles.diviser} />
        {/* botoes */}
        <View style={mainStyles.profileButtonsPanel}>
          <Button name={'View Profile'} action={'secondary'} />
          <Button name={'Add User'} />
        </View>
      </View>
      {/* lista */}
      <View style={mainStyles.listContainer}>
        <FlatList
          style={mainStyles.listContainerPanel}
          data={profiles}
          renderItem={({item}) => (
            <ListItem name={item.name} image={item.img} quantity={item.qt} />
          )}
          keyExtractor={(item) => item.name}
        />
      </View>
    </View>
  );
}
