import { View, Text } from 'react-native';
import { CityPoint } from '../../../model/CityPoint/CityPoint';

export const PointDetailsScreenRouteName = 'PointDetails';
export function PointDetailsScreen({ route, navigation }) {
  const cityPoint: CityPoint = route.params.point;
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{cityPoint.name}</Text>
    </View>
  );
}