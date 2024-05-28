
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Container, Divider, Post } from './styles';
import { fetchData } from '../../services/api';

export default function Home() {
  const [initial, setInitial] = useState(true);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getPosts = async () => {
    try {
      setInitial(false);
      setLoading(true);
      setPosts(await fetchData());
    } catch (error) {
      setError('Erro ao buscar posts');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  if (initial) {
    return <Container>
      <Text>Inicio</Text>
    </Container>;
  }
  if (loading) {
    return <Container>
      <ActivityIndicator size="large" color="#6565c9" />
    </Container>;
  }
  if (error) {
    return <Container>
      <Text>Erro</Text>
    </Container>;
  }

  return (
    <Container>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Post>{item.title}{'\n'} </Post>
            <Divider />
          </View>
        )}
      />
    </Container>
  );
}
