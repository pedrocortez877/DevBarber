import React from 'react';
import { Text, StatusBar } from 'react-native';

import { Container } from './styles';

export default () => {
  return (
    <Container>
      <StatusBar backgroundColor="#63c2d1"/>
      <Text>Appointments</Text>
    </Container>
  );
}