import React from 'react';
import { SafeAreaView } from "react-native";
import { Text, Layout, Button } from "@ui-kitten/components";
import { Header } from '@/app/components/header';
import { SuggestionSearch } from '@/app/components/suggestionSearch';

import { default as colorTheme } from "@/custom-theme.json"

export const EditScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header navigation={navigation}/>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: "2.5rem", backgroundColor: colorTheme['silver-white']}}>
        <Text category='h1'>Medication</Text>
        <SuggestionSearch />
        <Button size='giant'>Confirm</Button>
      </Layout>
    </SafeAreaView>
  );
};