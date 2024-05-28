import { ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';

export const Center = styled.View`
    justify-content: center;
    align-items: center;
    flex: 1;
`;

type Props = {
  color: string;
};
export const Spinner = styled(ActivityIndicator)<Props>`
    size: large;
    color:  ${({ color }) => color ? color : 'black'};
`;