import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab, IconElement, Icon, Button } from '@ui-kitten/components';
import { HomeScreen } from "./pages/home.component"
import { MedListScreen } from "./pages/medlist.component"
import { AddScreen } from "./pages/addmed.component"
import { Image } from 'react-native';

const { Navigator, Screen } = createBottomTabNavigator();

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
        console.log(navigation);
      }}
    >
      <BottomNavigationTab style={{flex: 1}} title='HOME' icon={HomeIcon}/>
      <BottomNavigationTab style={{flex: 1}} title='MED LIBRARY' icon={ClipIcon}/>
    </BottomNavigation>
  </>  
);

// const CustomTabBar = ({navigation, state}) => (
//   <View style={{flexDirection: "row"}}>
//     <Button style={{flex: 3}} onPress={() => navigation.navigate("Home")}>Home</Button>
//     <Image
//         source={require("@/assets/icons/button.svg")}
//         onClick={() => navigation.navigate("Add Med")}
//         style={{position: "absolute", bottom: "3rem", margin: "auto"}}
//       />
//     <Button style={{flex: 3}} onPress={() => navigation.navigate("Med Libary")}>Med Libary</Button>
//   </View>
// );

const TabNavigator = () => (
  <Navigator tabBar={props => <BottomTabBar {...props} />} screenOptions={{tabBarShowLabel: false}}>
    <Screen name='Home' component={HomeScreen} options={{ headerShown: false }}/>
    <Screen name='Med Library' component={MedListScreen} options={{ headerShown: false }}/>
    <Screen name='Add Med' component={AddScreen} options={{ headerShown: false }}/>
  </Navigator>
);


export function AppNavigator() {
  return(
    <NavigationContainer independent={true}>
      <TabNavigator/>
    </NavigationContainer>
  );
};