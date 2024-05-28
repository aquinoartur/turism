import React from 'react';
import { View } from 'react-native';

import { Label } from './styles';


const AppLabel = ({ label }: { label: string }) => {
 return <Label>{label}</Label>;
}

export default AppLabel;