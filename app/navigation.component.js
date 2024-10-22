import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab, IconElement, Icon, Button } from '@ui-kitten/components';
import { HomeScreen } from "./pages/home.component"
import { MedListScreen } from "./pages/medlist.component"
import { AddScreen } from "./pages/addmed.component"
import { View } from 'react-native';

const { Navigator, Screen } = createBottomTabNavigator();

const PersonIcon = (props): IconElement => (
  <Icon
    {...props}
    name='person-outline'
  />
);

const BellIcon = (props): IconElement => (
  <Icon
    {...props}
    name='bell-outline'
  />
);

const BottomTabBar = ({ navigation, state }) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])}
  >
    <BottomNavigationTab title='HOME' icon={PersonIcon}/>
    <BottomNavigationTab title="add med"/>
    <BottomNavigationTab title='MED LIBRARY' icon={BellIcon}/>
  </BottomNavigation>
);

const TabNavigator = () => (
  <Navigator tabBar={props => <BottomTabBar {...props} />} screenOptions={{tabBarShowLabel: false}}>
    <Screen name='Home' component={HomeScreen} options={{ headerShown: false }}/>
    <Screen name='Add Med' component={AddScreen} options={{ headerShown: false }}/>
    <Screen name='Med Library' component={MedListScreen} options={{ headerShown: false }}/>
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer independent={true}>
    <TabNavigator/>
  </NavigationContainer>
);