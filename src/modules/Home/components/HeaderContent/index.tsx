import React from 'react';
import { View, Text } from 'react-native';

import { Container, Label } from './styles';

type Props = {
 title: string;
}
export const HeaderContent = (props: Props) => {
 return <Container>
  <Label>{props.title}</Label>
 </Container>;
}
