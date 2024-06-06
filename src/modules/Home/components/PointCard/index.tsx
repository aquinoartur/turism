import React from 'react';
import { NetWorkImage, GradientBackground, Container, EventName } from './styles';
import appColors from '../../../../styles/colors/colors';
import { TouchableOpacityProps } from "react-native";

type Props =  TouchableOpacityProps & {
  event: string;
  image: string;
  marginLeft?: number;
}

const PointCard = ({event, image, marginLeft, ...rest}: Props) => {
  return <Container marginLeft={marginLeft} {...rest}>
    <NetWorkImage
      source={{ uri: image }}>
      <GradientBackground
        colors={['#00000000', appColors.dark]} >
        <EventName>
          {event}
        </EventName>
      </GradientBackground>
    </NetWorkImage>
  </Container>;
}

export default PointCard;