import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab, IconElement, Icon} from '@ui-kitten/components';
import { HomeScreen } from "./home.component"
import { DetailsScreen } from "./details.component"
import { ThirdScreen} from "./third.component"

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
    <BottomNavigationTab title='DETAILS' icon={BellIcon}/>
    <BottomNavigationTab title="THIRD" icon={BellIcon}/>
  </BottomNavigation>
);

const TabNavigator = () => (
  <Navigator tabBar={props => <BottomTabBar {...props} />} screenOptions={{tabBarShowLabel: false}}>
    <Screen name='Home' component={HomeScreen} options={{ headerShown: false }}/>
    <Screen name='Details' component={DetailsScreen} options={{ headerShown: false }}/>
    <Screen name="Third" component={ThirdScreen} options={{headerShown: false }}/>
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer independent={true}>
    <TabNavigator/>
  </NavigationContainer>
);