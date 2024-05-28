import { ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';

type Props = {
  color: string;
};

export const Spinner = styled(ActivityIndicator)<Props>`
    size: large;
    color:  ${({ color }) => color ? color : 'black'};
`;