import React, { useEffect } from 'react';

import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

import { Container, LoadingIcon } from './styles';
import BarberLogo from '../../assets/barber.svg';

export default () => {
  const navigation = useNavigation();

  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('token');
      if(token){
        //validar
      }else {
        navigation.navigate('SignIn');
      }
    }

    checkToken();
  }, [])

  return (
    <Container>
      <BarberLogo width="100%" height="160px"/>
      <LoadingIcon size="large" color="#FFFFFF"/>
    </Container>
  );
}