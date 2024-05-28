import React from 'react';

import { Spinner } from './styles';
import { Center } from '../Center/styles';

const Loader = () => {
 return <Center>
  <Spinner color='#1680eb' />
 </Center>;
}

export default Loader;