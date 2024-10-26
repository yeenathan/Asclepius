import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab, IconElement, Icon, Button } from '@ui-kitten/components';
import { HomeScreen } from "@/app/pages/home.component"
import { MedListScreen } from "@/app/pages/medlist.component"
import { AddMedButton } from '@/app/components/addMedButton';

const { Navigator, Screen } = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeIcon = (props) => (
  <Icon
    {...props}
    name='home-outline'
  />
);

const ClipIcon = (props) => (
  <Icon
    {...props}
    name='clipboard-outline'
  />
);

const BottomTabBar = ({ navigation, state }) => (
  <BottomNavigation
    // appearance='noIndicator'
    selectedIndex={state.index}
    onSelect={index => {
      navigation.navigate(state.routeNames[index]);
    }}
    style={{minHeight: "4.5rem"}}
  >
    <BottomNavigationTab style={{flex: 1}} title='HOME' icon={HomeIcon}/>
    <BottomNavigationTab style={{flex: 1}} title='MED LIBRARY' icon={ClipIcon}/>
  </BottomNavigation> 
);

export function AppNavigator({navigation}) {
  return(
    <>
      <AddMedButton navigation={navigation}/>
      <Navigator tabBar={props => <BottomTabBar {...props} />} screenOptions={{tabBarShowLabel: false}}>
        <Screen name='Home' component={HomeScreen} options={{ headerShown: false }}/>
        <Screen name='Med Library' component={MedListScreen} options={{ headerShown: false }}/>
      </Navigator>
    </>
  );
};