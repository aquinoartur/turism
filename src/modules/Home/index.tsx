
import { View, Text, FlatList, ActivityIndicator, StyleSheet, ListRenderItem } from 'react-native';
import React, { useEffect, useState, useLayoutEffect } from 'react';
import { Scrollable, Divider, ListView } from './styles';
import { getCities, getEvents, getPoints } from './repository/HomeRepository';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Loader from '../../components/Loader';
import InitialState from '../../components/InitialState';
import ErrorState from '../../components/ErrorState';
import CityCard from './components/CityCard';
import { CityEvent } from "../../model/CityEvent/CityEvent";


import { HeaderContent } from './components/HeaderContent';
import EventCard from './components/EventCard';
import AppLabel from '../../components/AppLabel';
import { spacing } from '../../styles/spacing/spacing';
import { ScrollView } from 'react-native-gesture-handler';
import { CityPoint } from '../../model/CityPoint/CityPoint';
import PointCard from './components/PointCard';

export const HomeScreenRouteName = 'Home';
export default function Home({ navigation }) {

  const insets = useSafeAreaInsets();

  const [initial, setInitial] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [cities, setCities] = useState([]);
  const [events, setEvents] = useState<CityEvent[]>([]);
  const [points, setPoints] = useState<CityPoint[]>([]);

  const [headerTitle, setTitle] = useState('');

  useEffect(() => {
    const fecthData = async () => {
      try {
        setInitial(false);
        setLoading(true);

        let response = await getCities();
        if (response.length > 0) {
          setTitle(response[0].name);
        }
        setCities(response);
        setEvents(await getEvents());
        setPoints(await getPoints());
      } catch (error) {
        setError('Erro ao buscar posts');
      } finally {
        setLoading(false);
      }
    };

    fecthData();
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTransparent: true,
      animationEnabled: true,
      tabBarLabel: 'Início',
      header: () => <HeaderContent title={headerTitle}>
      </HeaderContent>,
    });
  }, [navigation, cities]);


  if (initial)
    return <InitialState />;

  if (loading)
    return <Loader />;

  if (error)
    return <ErrorState />;

  const renderEvent: ListRenderItem<CityEvent> = ({ item, index }) => (
    <EventCard
      event={item.name}
      image={item.photos[0]}
      marginLeft={index == 0 && spacing.s16}
    />
  );
  const renderPoint: ListRenderItem<CityPoint> = ({ item, index }) => (
    <PointCard
      event={item.name}
      image={item.photos[0]}
      marginLeft={index == 0 && spacing.s16}
    />
  );

  return (
    <Scrollable>
      <ListView
        data={cities[0].photos}
        keyExtractor={(photo) => photo.toString()}
        renderItem={({ item: photo }) => (
          <CityCard
            city={cities[0].name}
            image={photo as string}
          />
        )}
      />
      <AppLabel label='Pontos Turísticos' />
      <ListView
        data={points}
        renderItem={renderPoint}
      />
      <AppLabel label='Eventos' />
      <ListView
        data={events}
        renderItem={renderEvent}
      />

    </Scrollable>
  );
}
