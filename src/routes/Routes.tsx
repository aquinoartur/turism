
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import appColors from '../styles/colors/colors';
import HomeView, { HomeViewRouteName } from '../modules/Home/view';
import { SettingsScreen, SettingsScreenRouteName } from '../modules/Settings/view';
import { SearchView, SearchViewRouteName } from '../modules/Search/view';
import { EventDetailsScreen, EventDetailsScreenRouteName } from '../modules/EventDetails/view';
import { PointDetailsScreen, PointDetailsScreenRouteName } from '../modules/PointDetails/view';

// STACKS NAVIGATORS
const HomeStack = createStackNavigator();
const HomeStackName = 'Home';
function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        cardStyle: { backgroundColor: appColors.background },
      }}
    >
      <HomeStack.Screen name={HomeViewRouteName} component={HomeView} />
      <HomeStack.Screen name={EventDetailsScreenRouteName} component={EventDetailsScreen} />
      <HomeStack.Screen name={PointDetailsScreenRouteName} component={PointDetailsScreen} />
    </HomeStack.Navigator>
  );
}
const SearchStack = createStackNavigator();
const SearchStackName = 'Search';
function SearchStackScreen() {
  return (
    <SearchStack.Navigator
      screenOptions={{
        cardStyle: { backgroundColor: appColors.background },
      }}
    >
      <SearchStack.Screen name={SearchViewRouteName} component={SearchView} />
    </SearchStack.Navigator>
  );
}

const SettingsStack = createStackNavigator();
const SettingsStackName = 'Settings';
function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator
      screenOptions={{
        cardStyle: { backgroundColor: appColors.background },
      }}
    >
      <SettingsStack.Screen name={SettingsScreenRouteName} component={SettingsScreen} />
    </SettingsStack.Navigator>
  );
}


// TABS NAVIGATOR
const Tab = createBottomTabNavigator();
export function RootScreens() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: appColors.secondaryDark,
        tabBarInactiveTintColor: appColors.regularGray,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === HomeStackName) {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === SettingsStackName) {
            iconName = focused ? 'settings' : 'settings-outline';
          } else if (route.name === SearchStackName) {
            iconName = focused ? 'search' : 'search-outline';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name={HomeStackName}
        component={HomeStackScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name={SearchStackName}
        component={SearchStackScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name={SettingsStackName}
        component={SettingsStackScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

