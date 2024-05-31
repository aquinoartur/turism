import { View, Text } from 'react-native';
import { searchEventsViewModel } from '../models/view.model';
import Loader from '../../../components/Loader';
import ErrorState from '../../../components/ErrorState';

export const SearchViewRouteName = 'Search';
export function SearchView() {
  const { events, eventsIsLoading, error, fetchEvents } = searchEventsViewModel()
  // const { points, setPoints, pointsIsLoading} =  searchPointsViewModel()


  if (eventsIsLoading) {
    return <Loader />;
  } else if (error) {
    return <ErrorState />;
  } else {
    console.log(events)
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>{events[0].name}</Text>
      </View>
    );
  }
}