import React from 'react';
import { NetWorkImage, GradientBackground, Container, EventName } from './styles';
import appColors from '../../../../styles/colors/colors';
import { Text } from 'react-native';

type Props = {
  event: string;
  image: string;
  padding?: number;
}

const EventCard = (props: Props) => {
  return <Container padding={props.padding}>
    <NetWorkImage
      source={{ uri: props.image }}>
      <GradientBackground
        colors={['#00000000', appColors.dark]} >
        <EventName>
          {props.event}
        </EventName>
      </GradientBackground>
    </NetWorkImage>
  </Container>;
}

export default EventCard;