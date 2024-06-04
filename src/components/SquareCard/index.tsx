import React from 'react';
import { NetWorkImage, GradientBackground, Container, EventName } from './styles';
import appColors from '../../styles/colors/colors';
import { Text } from 'react-native';

type Props = {
  event: string;
  image: string;
  marginLeft?: number;
  width?: number;
}

const SquareCard = (props: Props) => {
  return <Container marginLeft={props.marginLeft}>
    <NetWorkImage
      source={{ uri: props.image, }}
      size={props.width}
    >
      <GradientBackground
        colors={['#00000000', appColors.dark]} >
        <EventName>
          {props.event}
        </EventName>
      </GradientBackground>
    </NetWorkImage>
  </Container>;
}


export default SquareCard;