import Camping from '../../../assets/images/camping5.svg';
import Profile from '../../../assets/images/profile.svg';

import React from 'react';
import { View, StyleSheet } from 'react-native';

export enum SvgAsset {
 Camping = 'Camping',
 Profile = 'Profile',
}
type SvgImageProps = {
 width: number;
 height: number;
 asset: SvgAsset;
};

export const SvgImage = ({ width, height, asset }: SvgImageProps) => {
 const renderSvg = (type: SvgAsset) => {
  switch (type) {
   case SvgAsset.Camping:
    return <Camping width={width} height={height} />;
   case SvgAsset.Profile:
    return <Profile width={width} height={height} />;
   default:
    return null;
  }
 };

 return <View style={styles.container}>
  {renderSvg(asset)}
 </View>;
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
 },
});
