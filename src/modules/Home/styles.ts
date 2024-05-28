import styled from 'styled-components/native';
import { spacing } from '../../styles/spacing/spacing';
import { View } from 'react-native';
import { appConstants } from '../../constants/appConstants';




type Props = {
  padding?: number;
}

export const Container = styled(View) <Props>`
  justify-content: top;
`;


export const ListView = styled.FlatList.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`

`;


export const Divider = styled.View`
border-bottom-color: gray;
border-bottom-width: 0.5px;
`;
