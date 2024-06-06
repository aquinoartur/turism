import { View, Text } from 'react-native';
import { CityEvent } from '../../../model/CityEvent/CityEvent';

export const EventDetailsScreenRouteName = 'EventDetails';
export function EventDetailsScreen({ route, navigation }) {
  const cityEvent: CityEvent = route.params.event;
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{cityEvent.name}</Text>
    </View>
  );
}