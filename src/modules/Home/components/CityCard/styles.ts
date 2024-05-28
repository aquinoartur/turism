import { styled } from "styled-components/native";
import { Dimensions } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";

const screenWidth = Dimensions.get('window').width * 0.9;
const screenHeight = Dimensions.get('window').height * 0.6;

export const NetWorkImage = styled.ImageBackground.attrs({
  resizeMode: 'cover',
})`
 height: ${screenHeight}px;
 width: ${screenWidth}px;
`;

export const GradientBackground = styled(LinearGradient).attrs({
  start: { x: 0, y: 0.3 },
  end: { x: 0, y: 1 },
  locations: [.6, 1],
})`
  height: 100%;
  width: 100%;
  position: absolute;
 `;