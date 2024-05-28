import React from 'react';
import { NetWorkImage, GradientBackground } from './styles';
import appColors from '../../../../styles/colors/colors';

type Props = {
  city: string;
  image: string;
}

const CityCard = (props: Props) => {
  return <NetWorkImage
    source={{ uri: props.image }}>
    <GradientBackground
      colors={['#00000000', appColors.dark]} />
  </NetWorkImage>;
}

export default CityCard;