import React from 'react';
import { SafeAreaView, Image, View } from 'react-native';
import { Button, Layout, Text} from '@ui-kitten/components';

import { default as colorTheme } from "@/custom-theme.json"
import { Header } from '@/app/components/header';
import { MyButton } from "@/app/components/MyButton"
import { styles } from "@/app/stylesheet"

export const AddScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header navigation={navigation} />
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: "2.5rem", backgroundColor: colorTheme['silver-white'], gap: 10}}>
        <Image source={require("@/assets/icons/Scan.svg")} style={{minWidth: "10rem", minHeight: "10rem", marginBottom: "2rem"}}/>
        <View style={{marginVertical: "3rem"}}>
          <Text style={{marginBottom: "1rem"}} category='h2'>Scan your medication</Text>
          <Text category='p1'>Scan the label from your pharmacist or the medication package to set reminders.</Text>
        </View>
        <MyButton text="Scan" styles={{...styles.orangerButton, ...styles.baseBigButton}} press={() => navigation.navigate('Scan')}/>
        <MyButton text="or Manual Input" styles={{...styles.orangeBorder, ...styles.baseBigButton, backgroundColor: "#ffffff"}} press={() => navigation.navigate('Manual Name')}/>
      </Layout>
    </SafeAreaView>
  );
};