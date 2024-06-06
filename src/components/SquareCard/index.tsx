import React from 'react';
import { NetWorkImage, GradientBackground, Container, EventName } from './styles';
import appColors from '../../styles/colors/colors';
import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
  event: string;
  image: string;
  marginLeft?: number;
  width?: number;
}

const SquareCard = ({ event, image, marginLeft, width, ...rest }: Props) => {
  return <Container marginLeft={marginLeft} {...rest}>
    <NetWorkImage
      source={{ uri: image, }}
      size={width}
    >
      <GradientBackground
        colors={['#00000000', appColors.dark]} >
        <EventName>
          {event}
        </EventName>
      </GradientBackground>
    </NetWorkImage>
  </Container>;
}


export default SquareCard;