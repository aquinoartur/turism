

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import appColors from '../styles/colors/colors';
import HomeView, { HomeViewRouteName } from '../modules/Home/view';
import { SettingsScreen, SettingsScreenRouteName } from '../modules/Settings/view';
import { SearchView, SearchViewRouteName } from '../modules/Search/view';


const Tab = createBottomTabNavigator();

export function RootScreens() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: appColors.secondaryDark,
        tabBarInactiveTintColor: appColors.regularGray,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === HomeViewRouteName) {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === SettingsScreenRouteName) {
            iconName = focused ? 'settings' : 'settings-outline';
          } else if (route.name === SearchViewRouteName) {
            iconName = focused ? 'search' : 'search-outline';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name={HomeViewRouteName} component={HomeView} />
      <Tab.Screen name={SearchViewRouteName} component={SearchView} />
      <Tab.Screen name={SettingsScreenRouteName} component={SettingsScreen} />
    </Tab.Navigator>
  );
}

