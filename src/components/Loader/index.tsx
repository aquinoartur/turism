import React from 'react';

import { Spinner } from './styles';
import { Center } from '../Center/styles';
import appColors from '../../styles/colors/colors';

const Loader = () => {
 return <Center>
  <Spinner />
 </Center>;
}

export default Loader;