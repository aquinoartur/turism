

import HomeView from './src/modules/Home/view';
import { StatusBar, } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { RootScreens } from './src/routes/Routes';
import { SplashScreen } from './src/modules/Splash/view';
import { useEffect, useState } from 'react';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      {showSplash ? <SplashScreen onCompleted={setShowSplash} /> :
        <NavigationContainer>
          <RootScreens />
        </NavigationContainer>
      }
    </SafeAreaProvider>
  );
}




