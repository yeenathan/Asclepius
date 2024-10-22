import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import { Button, Layout, Text} from '@ui-kitten/components';
import {useFonts} from 'expo-font';

export const HomeScreen = ({ navigation }) => {
  // const navigateDetails = () => {
  //   navigation.navigate('Details');
  // };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center', fontFamily: 'Poppins-Regular'}}>
      </Layout>
    </SafeAreaView>
  );
};