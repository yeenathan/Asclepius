import React from 'react';
import { SafeAreaView, View, ScrollView, } from 'react-native';
import { Button, Layout, Text} from '@ui-kitten/components';
import { MyButton } from '@/app/components/MyButton';
import { styles } from '@/app/stylesheet';
import { TimeInterval } from '../../components/timeInterval';

import { default as colorTheme } from "@/custom-theme.json"

import { Header } from '@/app/components/header';

export const SetTime = ({navigation}) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header navigation={navigation} />
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: "2.5rem", backgroundColor: colorTheme['silver-white'], gap: 10}}>

        <TimeInterval />
      </Layout>
    </SafeAreaView>
  );
};