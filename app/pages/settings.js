
import { SafeAreaView, Switch, View } from "react-native";
import { Text, Button, Layout } from "@ui-kitten/components";
import { useContext, useState } from "react";
import { Header } from "@/app/components/header"
import { styles } from "@/app/stylesheet"
import { default as theme } from "@/custom-theme.json";
import { ThemeContext } from "../theme-context";

export const SettingsScreen = ({navigation}) => {
  const _themeContext = useContext(ThemeContext);
  const colorTheme = theme[_themeContext.theme];
  const [switchValue, setSwitchValue] = useState(() => {
      if (_themeContext.theme === "light") {
        return false;
      }
      return true;
    });
  
  function handleSwitch() {
    _themeContext.toggleTheme();
    setSwitchValue(!switchValue);
  }

  return(
    <SafeAreaView style={{ flex: 1 }}>
      <Header navigation={navigation} title={"Settings"}/>
      <Layout style={{...styles.masterLayout, backgroundColor: colorTheme["generic-bg"], justifyContent: "flex-start", gap: 8}}>
        <View style={{flexDirection: "row", width: "100%", justifyContent: "space-between", borderColor: colorTheme["text-grey"], borderWidth: .5, padding: 16, borderRadius: 12, backgroundColor: colorTheme["form-field"]}}>
          <Text category="p1">Profile Settings</Text>
        </View>
        <View style={{flexDirection: "row", width: "100%", justifyContent: "space-between", borderColor: colorTheme["text-grey"], borderWidth: .5, padding: 16, borderRadius: 12, backgroundColor: colorTheme["form-field"]}}>
          <Text category="p1">Text Settings </Text>
        </View>
        <View style={{flexDirection: "row", width: "100%", justifyContent: "space-between", alignItems: "center", borderColor: colorTheme["text-grey"], borderWidth: .5, padding: 16, borderRadius: 12, backgroundColor: colorTheme["form-field"]}}>
          <Text category="p1">Dark Mode</Text>
          <Switch onValueChange={handleSwitch} value={switchValue}/>
        </View>
      </Layout>
    </SafeAreaView>
  )
}