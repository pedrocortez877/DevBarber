import React from 'react';
import { Text, Button, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Container } from './styles';

import Api from '../../Api';

export default () => {
  const navigation = useNavigation();

  const handleLogoutClick = async() => {
    await Api.logout();
    navigation.reset({
      routes:[{name: 'SignIn'}]
    });
  }
  return (
    <Container>
      <StatusBar backgroundColor="#63c2d1"/>
      <Text>Profile</Text>
      <Button  title="sair" onPress={handleLogoutClick}/>
    </Container>
  );
}