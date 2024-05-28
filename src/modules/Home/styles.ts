import styled from 'styled-components/native';
import { spacing } from '../../styles/spacing/spacing';
import { View } from 'react-native';
import { appConstants } from '../../constants/appConstants';
import { ScrollView } from 'react-native-gesture-handler';






export const Scrollable = styled(ScrollView).attrs({
  showsVerticalScrollIndicator: false,
  bounces: false,
})`

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
