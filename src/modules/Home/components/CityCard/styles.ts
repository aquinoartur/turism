import { styled } from "styled-components/native";
import { Dimensions } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import appColors from "../../../../styles/colors/colors";


const size = 80;
const borderRadius = size / 2;
const borderWidth = 4;

export const Container = styled.View`
  margin-top:100px;
  margin-right: 10px;
  margin-left: 10px;
  height:${size}px;
 width: ${size}px;
 border-radius:${borderRadius}px;
  overflow: hidden;
  align-items: center;
  border-color: ${appColors.gray};
  border-width: 3px;
  align-content: center;
`;

export const NetWorkImage = styled.ImageBackground.attrs({
  resizeMode: 'cover',
  borderRadius: borderRadius,
})`
 height:${size}px;
 width: ${size}px;
`;

export const GradientBackground = styled(LinearGradient).attrs({
  start: { x: 0, y: 0.3 },
  end: { x: 0, y: 1 },
  locations: [.6, 1],
})`
  height: ${size}px;
  width:${size}px;
  border-radius:${borderRadius}px;
  position: absolute;
 `;