import styled from "styled-components/native";
import appColors from "../../styles/colors/colors";
import { spacing } from "../../styles/spacing/spacing";


export const Label = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${appColors.regularGray};
  text-align: left;
  margin-left: ${spacing.s16}px;
  margin-top: ${spacing.s16}px;
`;