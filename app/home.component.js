import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import { Button, Layout, Text} from '@ui-kitten/components';
import {useFonts} from 'expo-font';

export const HomeScreen = ({ navigation }) => {
  // const [loaded, error] = useFonts({
  //   'Poppins-Regular':require("../assets/fonts/Poppins-Regular.ttf")
  // })

  const navigateDetails = () => {
    navigation.navigate('Details');
  };

  // if(!loaded){
  //   return <SafeAreaView>
  //     <Text>Loading Fonts...</Text>
  //   </SafeAreaView>
  // }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center', fontFamily: 'Poppins-Regular'}}>
        <Button onPress={navigateDetails}>OPEN DETAILS</Button>
        <Text style={{fontFamily:"Poppins-Regular"}}>TEST FONT</Text>
      </Layout>
    </SafeAreaView>
  );
};