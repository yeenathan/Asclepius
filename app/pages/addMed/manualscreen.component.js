import React from 'react';
import { SafeAreaView } from 'react-native';
import { Button, Layout, Text} from '@ui-kitten/components';

import { Header } from "@/app/components/header"

import { default as colorTheme } from "@/custom-theme.json"
import { styles } from '@/app/stylesheet';

import { medication, suggestions } from "./medData"

export const ManualScreen = ({navigation}) => {
  console.log(navigation);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header navigation={navigation}/>
      <Layout style={styles.masterLayout}>
      </Layout>
    </SafeAreaView>
  )
}