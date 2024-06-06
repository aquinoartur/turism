import { styled } from "styled-components/native";
import { Dimensions, View } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity } from 'react-native';

const screenWidth = Dimensions.get('window').width * 0.4;
const screenHeight = Dimensions.get('window').height * 0.3;

type Props = {
  marginLeft?: number;
}

export const Container = styled(TouchableOpacity) <Props>`
 margin-top: 20px;
 margin-right: 10px;
 margin-bottom: 10px;
 margin-left:  ${props => props.marginLeft ? props.marginLeft : 0}px;
`;

export const NetWorkImage = styled.ImageBackground.attrs({
  resizeMode: 'cover',
  borderRadius: 10,
})`
 height: ${screenHeight}px;
 width: ${screenWidth}px;

`;

export const EventName = styled.Text`
  font-size: 14px;
  color: white;
  font-weight: 500;
  position: absolute;
  bottom: 10px;
  left: 10px;
`;

export const GradientBackground = styled(LinearGradient).attrs({
  start: { x: 0, y: 0.3 },
  end: { x: 0, y: 1 },
  locations: [.6, 1],
})`
  height: 100%;
  width: 100%;
  position: absolute;
  border-radius: 10px;
 `;