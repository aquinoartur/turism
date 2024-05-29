

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import appColors from '../styles/colors/colors';
import Home, { HomeScreenRouteName } from '../modules/Home';
import { SettingsScreen, SettingsScreenRouteName } from '../modules/Settings/screen';


const Tab = createBottomTabNavigator();

export function RootScreens() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: appColors.secondaryDark,
        tabBarInactiveTintColor: appColors.regularGray,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === HomeScreenRouteName) {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === SettingsScreenRouteName) {
            iconName = focused ? 'settings' : 'settings-outline';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name={HomeScreenRouteName} component={Home} />
      <Tab.Screen name={SettingsScreenRouteName} component={SettingsScreen} />
    </Tab.Navigator>
  );
}

