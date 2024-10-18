import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { AppNavigator } from './navigation.component';
import { default as colorTheme } from '../custom-theme.json';
import { default as mapping } from "../mapping.json"
import {useFonts} from 'expo-font';
import { SafeAreaView, Text } from 'react-native';

export default () => {
  const [loaded, error] = useFonts({
    'Poppins-Regular':require("../assets/fonts/Poppins-Regular.ttf")
  })


  if(!loaded){
    return <SafeAreaView>
      <Text>Loading Fonts...</Text>
    </SafeAreaView>
  }
  
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider
        {...eva}
        theme={{ ...eva.light, ...colorTheme, }}
        customMapping={{ ...eva.mapping, ...mapping }}
      >
        <AppNavigator />
      </ApplicationProvider>
    </>
  )
}