
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import React, { useEffect, useState, useLayoutEffect } from 'react';
import { Container, Divider, ListView } from './styles';
import { getCities, getEvents, getPoints } from './store/homeStore';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Loader from '../../components/Loader';
import { Center } from '../../components/Center/styles';
import InitialState from '../../components/InitialState';
import ErrorState from '../../components/ErrorState';
import CityCard from './components/CityCard';

import { HeaderContent } from './components/HeaderContent';
import EventCard from './components/EventCard';


export default function Home({ navigation }) {

  const insets = useSafeAreaInsets();

  const [initial, setInitial] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [cities, setCities] = useState([]);
  const [events, setEvents] = useState([]);
  const [points, setPoints] = useState([]);

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


  return (
    <Container>
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
      <ListView
        data={events[0].photos}
        keyExtractor={(photo) => photo.toString()}
        renderItem={({ item: photo }) => (
          <EventCard
            event={events[0].name}
            image={photo as string}
          />
        )}
      />
      <FlatList
        data={points}
        keyExtractor={(points) => (points.id as String).toString()}
        renderItem={({ item: point }) => (
          <View>
            <Text>{point.name}{'\n'} </Text>
            <Divider />
          </View>
        )}
      />
    </Container>
  );
}
