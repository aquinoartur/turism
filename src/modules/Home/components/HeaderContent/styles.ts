import styled from "styled-components/native";
import appColors from "../../../../styles/colors/colors";

export const Container = styled.View`
 width: 20%;
 justify-content: center;
 align-items: center;
 align-self: center;
 background-color:rgba(0, 0, 0, 0.5);
 border-radius: 16px;
 margin-top: 56px;
 padding: 4px;
`;



export const Label = styled.Text`
 color: ${appColors.light};
 font-size: 14px;
 font-weight:  700;
 text-align: center;
`;