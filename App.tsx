

import Home from './src/pages/Home';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <Home />
    </SafeAreaProvider>
  );
}


