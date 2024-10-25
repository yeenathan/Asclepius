import React from 'react';
import { SafeAreaView } from 'react-native';
import { Button, Layout, Text} from '@ui-kitten/components';

import { Header } from "@/app/components/header"

import { styles } from '@/app/stylesheet';
import { SuggestionSearch } from "@/app/components/suggestionSearch"

export const ManualScreen = ({navigation}) => {
  console.log(navigation);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header navigation={navigation}/>
      <Layout style={styles.masterLayout}>
        <SuggestionSearch />
      </Layout>
    </SafeAreaView>
  )
}