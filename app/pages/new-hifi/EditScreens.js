import { Layout, Text, Button } from "@ui-kitten/components";
import { SafeAreaView, View } from "react-native";
import { Header } from '@/app/components/header';
import { useState } from "react";
import { SuggestionSearch } from "@/app/components/suggestionSearch";

import { styles } from "@/app/stylesheet";
import { default as colorTheme } from "@/custom-theme.json";

export function EditName({navigation, route}) {
  const [name, setName] = useState("");
  const drug = route.params.drug;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header navigation={navigation} title={"Edit Name"}/>
      <Layout style={styles.masterLayout}>
        <View style={{flex: 4}}>
          <SuggestionSearch value={name} setValue={setName}/>
        </View>
        <View style={{flex: 1, width: "100%"}}>
          <Button size="large" style={{width: "100%"}} onPress={() => navigation.navigate("Form", {drug: {...drug, name: name}})}>Confirm</Button>
        </View>
      </Layout>
    </SafeAreaView>
  )
}