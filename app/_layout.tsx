import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { default as colorTheme } from '../custom-theme.json';
import { default as mapping } from "../mapping.json"
import { useFonts } from 'expo-font';
import { Image, SafeAreaView, Text } from 'react-native';
import { MainNavigator } from "@/app/navigators/mainnavigator.component"
import { ThemeContext } from './theme-context'
import { LogBox } from 'react-native';

LogBox.ignoreAllLogs();

export default () => {
  const [loaded, error] = useFonts({
    'Poppins-Medium':require("@/assets/fonts/Poppins-Medium.ttf"),
    'Poppins-SemiBold':require("@/assets/fonts/Poppins-SemiBold.ttf"),
    'Poppins-Bold':require("@/assets/fonts/Poppins-Bold.ttf"),
    "Poppins-Regular":require("@/assets/fonts/Poppins-Regular.ttf"),
    "PublicSans-Bold":require("@/assets/fonts/PublicSans-Bold.ttf"),
    "PublicSans-Regular":require("@/assets/fonts/PublicSans-Regular.ttf"),
    "PublicSans-Semibold":require("@/assets/fonts/PublicSans-SemiBold.ttf"),
    "PublicSans-Medium":require("@/assets//fonts/PublicSans-Medium.ttf")
  })

  const [theme, setTheme] = React.useState('light');

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
  };

  if(!loaded){
    return (
      <SafeAreaView style={{flex: 1, justifyContent: "center", alignItems: "center", padding: 32}}>
        <Image style={{maxWidth: "100%"}} source={require("@/assets/graphics/logomark.png")} resizeMode='contain'/>
      </SafeAreaView>
    )
  }
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ThemeContext.Provider value={{theme, toggleTheme}}>
        <ApplicationProvider
          {...eva}
          theme={{ ...eva[theme], ...colorTheme[theme] }}
          customMapping={mapping}
        >
          <MainNavigator />
        </ApplicationProvider>
      </ThemeContext.Provider>
    </>
  )
}