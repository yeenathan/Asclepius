import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { default as colorTheme } from '../custom-theme.json';
import { default as mapping } from "../mapping.json"
import { useFonts } from 'expo-font';
import { SafeAreaView, Text } from 'react-native';
import { MainNavigator } from "@/app/navigators/mainnavigator.component"
import { NavigationContainer } from '@react-navigation/native';

export default () => {
  const [loaded, error] = useFonts({
    'Poppins-Medium':require("@/assets/fonts/Poppins-Medium.ttf"),
    'Poppins-SemiBold':require("@/assets/fonts/Poppins-SemiBold.ttf"),
    'Poppins-Bold':require("@/assets/fonts/Poppins-Bold.ttf"),
    "Poppins-Regular":require("@/assets/fonts/Poppins-Regular.ttf"),
    "PublicSans-Bold":require("@/assets/fonts/PublicSans-Bold.ttf"),
    "PublicSans-Regular":require("@/assets/fonts/PublicSans-Regular.ttf"),
    "PublicSans-Semibold":require("@/assets/fonts/PublicSans-SemiBold.ttf"),
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
        <NavigationContainer independent={true}>
          <MainNavigator />
        </NavigationContainer>
      </ApplicationProvider>
    </>
  )
}