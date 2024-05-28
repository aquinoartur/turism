import styled from 'styled-components/native';
import { spacing } from '../../styles/spacing/spacing';

export const Container = styled.View`
  padding: ${spacing.s16}px;
  top: ${spacing.s20}px;
  justify-content: top;
  flex:1;
`;

export const ListContainer = styled.View`
  flex-shrink: 1, 
`;


export const Post = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: black;
  text-align: left;
  top: 10px;
  padding: 10px;
  gap: 10px;
`;

export const Divider = styled.View`
border-bottom-color: gray;
border-bottom-width: 0.5px;
`;
