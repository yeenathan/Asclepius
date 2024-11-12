import React, { useState } from 'react';
import { SafeAreaView, View} from "react-native";
import { Text, Layout, Button, } from "@ui-kitten/components";
import { Header } from '@/app/components/header';
import { SuggestionSearch } from '@/app/components/suggestionSearch';
import { default as colorTheme } from "@/custom-theme.json"
import { MyButton } from '@/app/components/MyButton';
import { styles } from '@/app/stylesheet';


export const EditScreen = ({navigation, route}) => {
  const fromManual=route.params.fromManual;
  const obj = route.params.obj;
  const [name, setName] = useState("");
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header navigation={navigation}/>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 40, backgroundColor: colorTheme['silver-white']}}>
        <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'column', flex: 2}}>
          <Text category='h6'>What is the medication name?</Text>
          <Text category='c1'>Search or type your medication name</Text>
        </View>

        <View style={{ flex: 8, width: '70%'}}>
          <SuggestionSearch value={name} setValue={setName}/>
        </View>
        <View style={{ flex: 3, width: '100%'}}>
          <MyButton text="Confirm" styles={{...styles.orangerButton, ...styles.baseBigButton}} press={() => {
              if (fromManual) navigation.navigate("Med Confirm", {obj: {...obj, name: name}});
              else navigation.navigate('Confirm Scan', {obj: {...obj, name: name}});
            }} />
        </View>
      </Layout>
    </SafeAreaView>
  );
};