
import { View, Text, FlatList, ActivityIndicator, StyleSheet, ListRenderItem } from 'react-native';
import React, { useEffect, useState, useLayoutEffect } from 'react';
import { Scrollable, Divider, ListView } from './styles';
import { getCities, getEvents, getPoints } from '../repository/HomeRepository';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Loader from '../../../components/Loader';
import InitialState from '../../../components/InitialState';
import ErrorState from '../../../components/ErrorState';
import CityCard from '../components/CityCard';


import { HeaderContent } from '../components/HeaderContent';
import SquareCard from '../../../components/SquareCard';
import AppLabel from '../../../components/AppLabel';
import { spacing } from '../../../styles/spacing/spacing';
import { CityPoint } from '../../../model/CityPoint/CityPoint';
import PointCard from '../components/PointCard';
import { CityEvent } from '../../../model/CityEvent/CityEvent';
import { EventDetailsScreenRouteName } from '../../EventDetails/view';
import { PointDetailsScreenRouteName } from '../../PointDetails/view';
import { VerticalGap } from '../../../components/Gap';
import { SvgAsset, SvgImage } from '../../../components/SvgImage';

export const HomeViewRouteName = 'Inicio';
export default function HomeView({ navigation }) {

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
    <SquareCard
      event={item.name}
      image={item.photos[0]}
      marginLeft={index == 0 && spacing.s16}
      onPress={() => navigation.navigate(EventDetailsScreenRouteName, { event: item })}
    />
  );

  const renderPoint: ListRenderItem<CityPoint> = ({ item, index }) => (
    <PointCard
      event={item.name}
      image={item.photos[0]}
      marginLeft={index == 0 && spacing.s16}
      onPress={() => navigation.navigate(PointDetailsScreenRouteName, { point: item })}
    />
  );

  return (
    <Scrollable>
      <VerticalGap h={10} />
      <ListView
        data={cities[0].photos}
        renderItem={({ item: photo }) => (
          <CityCard
            city={cities[0].name}
            image={photo as string}
          />
        )}
      />
      <VerticalGap h={20} />
      <AppLabel label='Pontos Turísticos' />
      <ListView
        data={points}
        renderItem={renderPoint}
      />
      <VerticalGap h={20} />
      <AppLabel label='Eventos' />
      <ListView
        data={events}
        renderItem={renderEvent}
      />
      <VerticalGap h={25} />
      <SvgImage
        height={200}
        width={200}
        asset={SvgAsset.Camping}
      />
    </Scrollable >
  );
}
