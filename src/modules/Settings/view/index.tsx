import { View, Text } from 'react-native';
import { SvgAsset, SvgImage } from '../../../components/SvgImage';

export const SettingsScreenRouteName = 'Ajustes';
export function SettingsScreen() {
  return (
    <View style={{ flex: 1, }}>
      <SvgImage
        height={200}
        width={200}
        asset={SvgAsset.Profile}
      />
    </View>
  );
}