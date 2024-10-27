import React from 'react';
import { SafeAreaView, View, ScrollView, } from 'react-native';
import { Button, Layout, Text} from '@ui-kitten/components';
import { MyButton } from '@/app/components/MyButton';
import { styles } from '@/app/stylesheet';

import { default as colorTheme } from "@/custom-theme.json"

import { Header } from '@/app/components/header';

export const ScanScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header navigation={navigation} />
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: "2.5rem", backgroundColor: colorTheme['silver-white'], gap: 10}}>
        <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#D9D9D9', flex: 9, width: '80%', borderRadius: 20 }}>
          <Text category='h1'>Camera</Text>
        </View>
        <View style={{ flex: 2, justifyContent: 'center', paddingHorizontal: "1rem", alignContent: 'center', alignItems: 'center', backgroundColor: '#D9EDFF', borderRadius: 20, marginBottom: 20, marginTop: 10}}>
          <Text category='s1'> Instructions:</Text>
          <Text category='s1'> Position your camera over the label</Text>
          <Text category='s1'> Ensure the label is clear and well-lit</Text>
        </View>

        <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
          <MyButton text="Confirm" styles={{...styles.orangerButton, ...styles.baseBigButton}} press={() => navigation.navigate('Confirm Med')} />
        </View>

      </Layout>
    </SafeAreaView>
  );
};