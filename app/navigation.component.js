import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab, IconElement, Icon, Button } from '@ui-kitten/components';
import { HomeScreen } from "@/app/pages/home.component"
import { MedListScreen } from "@/app/pages/medlist.component"
import { MedNavigator } from "@/app/pages/addMed/mednavigator.component"
import { AddScreen } from "@/app/pages/addMed/addmed.component"
import { ScanScreen } from "@/app/pages/addMed/scanscreen.component"
import { ManualScreen } from "@/app/pages/addMed/manualscreen.component"
import { Image } from 'react-native';

const { Navigator, Screen } = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeIcon = (props): IconElement => (
  <Icon
    {...props}
    name='home-outline'
  />
);

const ClipIcon = (props): IconElement => (
  <Icon
    {...props}
    name='clipboard-outline'
  />
);

const BottomTabBar = ({ navigation, state }) => (
  <>
    <Image
      source={require("@/assets/icons/button.svg")}
      onClick={() => navigation.navigate("Add Med")}
      style={{position: "absolute", bottom: "3rem", left: "0", right: "0", margin: "auto", zIndex: "1"}}
    />
    <BottomNavigation
      appearance='noIndicator'
      selectedIndex={state.index}
      onSelect={index => {
        navigation.navigate(state.routeNames[index]);
      }}
    >
      <BottomNavigationTab style={{flex: 1}} title='HOME' icon={HomeIcon}/>
      <BottomNavigationTab style={{flex: 1}} title='MED LIBRARY' icon={ClipIcon}/>
    </BottomNavigation>
  </>  
);

const TabNavigator = () => (
  <Navigator tabBar={props => <BottomTabBar {...props} />} screenOptions={{tabBarShowLabel: false}}>
    <Screen name='Home' component={HomeScreen} options={{ headerShown: false }}/>
    <Screen name='Med Library' component={MedListScreen} options={{ headerShown: false }}/>
    <Screen name='Add Med' component={MedNavigator} options={{ headerShown: false }}/>
  </Navigator>
);

export function AppNavigator() {
  return(
    <NavigationContainer independent={true}>
      {/* <Stack.Navigator>
        <Stack.Screen name="Add Med" component={AddScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Scan" component={ScanScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Manual" component={ManualScreen} options={{headerShown: false}}/>
      </Stack.Navigator> */}
      <TabNavigator/>
    </NavigationContainer>
  );
};