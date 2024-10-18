import React from 'react';
import { SafeAreaView } from 'react-native';
import { ApplicationProvider, Button, Divider, Layout, TopNavigation } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { default as theme } from './theme.json'; 
import { default as mapping } from './mapping.json'; 

export const HomeScreen = ({ navigation }) => {

  const navigateDetails = () => {
    navigation.navigate('Details');
  };

  return (
    <ApplicationProvider 
    {...eva}
    theme={{ ...eva.dark, ...theme }}
    customMapping={mapping}>
    <SafeAreaView style={{ flex: 1 }}>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center', fontFamily: 'Poppins-Regular'}}>
        <Button onPress={navigateDetails}>OPEN DETAILS</Button>
      </Layout>
    </SafeAreaView>
    </ApplicationProvider>
  );
};