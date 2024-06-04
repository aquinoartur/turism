import styled from 'styled-components/native';
import { ScrollView } from 'react-native';


export const Scrollable = styled(ScrollView).attrs({
  showsVerticalScrollIndicator: false,
  bounces: true,
})``;


export const ListView = styled.FlatList.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})``;


export const Divider = styled.View`
border-bottom-color: gray;
border-bottom-width: 0.5px;
`;
