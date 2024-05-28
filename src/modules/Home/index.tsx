
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Container, Divider, ListContainer, Post } from './styles';
import { getCities, getEvents, getPoints } from './store/homeStore';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Loader from '../../components/Loader';
import { Center } from '../../components/Center/styles';


export default function Home() {

  const insets = useSafeAreaInsets();

  const [initial, setInitial] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [cities, setCities] = useState([]);
  const [events, setEvents] = useState([]);
  const [points, setPoints] = useState([]);


  const fecthData = async () => {
    try {
      setInitial(false);
      setLoading(true);
      setCities(await getCities());
      setEvents(await getEvents());
      setPoints(await getPoints());
    } catch (error) {
      setError('Erro ao buscar posts');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fecthData();
  }, []);

  if (initial) {
    return <Center>
      <Text>Inicio</Text>
    </Center>;
  }
  
  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Center>
      <Text>Inicio</Text>
    </Center>;
  }

  return (
    <Container>
      <ListContainer>
        <FlatList
          data={cities}
          keyExtractor={(city) => (city.id as String).toString()}
          contentContainerStyle={({ flexGrow: 0 })}
          renderItem={({ item: city }) => (
            <View>
              <Post>{city.name}{'\n'} </Post>
              <Divider />
            </View>
          )}
        />
      </ListContainer>
      <ListContainer>
        <FlatList
          data={events}
          keyExtractor={(event) => (event.id as String).toString()}
          contentContainerStyle={({ flexGrow: 0 })}
          renderItem={({ item: event }) => (
            <View>
              <Post>{event.name}{'\n'} </Post>
              <Divider />
            </View>
          )}
        />
      </ListContainer>
      <ListContainer>
        <FlatList
          data={points}
          keyExtractor={(points) => (points.id as String).toString()}
          contentContainerStyle={({ flexGrow: 0 })}
          renderItem={({ item: point }) => (
            <View>
              <Post>{point.name}{'\n'} </Post>
              <Divider />
            </View>
          )}
        />
      </ListContainer>
    </Container>
  );
}
