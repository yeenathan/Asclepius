import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab, Layout, Text } from '@ui-kitten/components';
import { HomeScreen } from "./home.component"
import { DetailsScreen } from "./details.component"

const { Navigator, Screen } = createBottomTabNavigator();

const BottomTabBar = ({ navigation, state }) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])}
  >
    <BottomNavigationTab title='Home'/>
    <BottomNavigationTab title='Details'/>
  </BottomNavigation>
);

const TabNavigator = () => (
  <Navigator tabBar={props => <BottomTabBar {...props} />} screenOptions={{tabBarShowLabel: false}}>
    <Screen name='Home' component={HomeScreen} options={{ headerShown: false }}/>
    <Screen name='Details' component={DetailsScreen} options={{ headerShown: false }}/>
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer independent={true}>
    <TabNavigator/>
  </NavigationContainer>
);