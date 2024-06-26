import { StyleSheet, Dimensions, FlatList, ListRenderItem, View } from 'react-native';
import { searchEventsViewModel, searchPointsViewModel } from '../models/view.model';
import Loader from '../../../components/Loader';
import ErrorState from '../../../components/ErrorState';
import SquareCard from '../../../components/SquareCard';
import { Scrollable } from '../../Home/view/styles';
import AppLabel from '../../../components/AppLabel';
import { CityPoint } from '../../../model/CityPoint/CityPoint';
import { useLayoutEffect } from 'react';
import { CityEvent } from '../../../model/CityEvent/CityEvent';
import { EventDetailsScreenRouteName } from '../../EventDetails/view';
import { PointDetailsScreenRouteName } from '../../PointDetails/view';

const numColumns = 2;
const screenWidth = Dimensions.get('window').width;

export const SearchViewRouteName = 'Explorar';
export function SearchView({ navigation }) {
  const { events, eventsIsLoading, eventsError, fetchEvents } = searchEventsViewModel()
  const { points, pointsIsLoading, pointsError, fetchPoints } = searchPointsViewModel()


  useLayoutEffect(() => {
    navigation.setOptions({
      headerTransparent: false,
      headerTitle: 'Explorar',
    });
  }, []);



  if (eventsIsLoading || pointsIsLoading) {
    return <Loader />;
  } else if (eventsError || pointsError) {
    return <ErrorState />;
  } else {

    const cardSize = screenWidth * 0.9 / numColumns;

    const renderEvent: ListRenderItem<CityEvent> = ({ item, index }) => (
      <SquareCard
        event={item.name}
        image={item.photos[0]}
        width={cardSize}
        onPress={() => {
          navigation.navigate(EventDetailsScreenRouteName, { event: item })
        }}
      />
    );

    const renderPoint: ListRenderItem<CityPoint> = ({ item, index }) => (
      <SquareCard
        event={item.name}
        image={item.photos[0]}
        width={cardSize}
        onPress={() => {
          navigation.navigate(PointDetailsScreenRouteName, { point: item })
        }}
      />
    );

    const Events = () => (<FlatList
      data={events}
      style={styles.listView}
      renderItem={renderEvent}
      numColumns={numColumns}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      scrollEnabled={false}
    />)

    const Points = () => (<FlatList
      data={points}
      style={styles.listView}
      renderItem={renderPoint}
      numColumns={numColumns}
      keyExtractor={(item) => item.id}
      scrollEnabled={false}
    />)

    return (
      <Scrollable >
        <View style={styles.container} >
          <AppLabel label='Eventos' />
          <Events />
          <AppLabel label='Pontos Turísticos' />
          <Points />
        </View>
      </Scrollable>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listView: {
    margin: 10
  }
});