
import { SafeAreaView, View, Layout } from "react-native";
import { Text, Button } from "@ui-kitten/components";
import { useContext } from "react";
import { Header } from "@/app/components/header"
import { styles } from "@/app/stylesheet"
import { default as theme } from "@/custom-theme.json";
import { ThemeContext } from "../theme-context";

export const SettingsScreen = ({navigation}) => {
  const colorTheme = theme[useContext(ThemeContext).theme];

  return(
    <SafeAreaView style={{ flex: 1 }}>
      <Layout style={{...styles.masterLayout, backgroundColor: colorTheme["generic-bg"]}}>
        <Header navigation={navigation} title={"Settings"}/>
        <Text category="h1">abc</Text>
      </Layout>
    </SafeAreaView>
  )
}