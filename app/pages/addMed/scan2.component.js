import React from 'react';
import { SafeAreaView } from 'react-native';
import { Button, Layout, Text} from '@ui-kitten/components';

import { default as colorTheme } from "@/custom-theme.json"

export const ScanScreenTwo = ({navigation}) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: "2.5rem", backgroundColor: colorTheme['silver-white'], gap: 10}}>
        <Text category='h1'>scan screen 2</Text>
        
      </Layout>
    </SafeAreaView>
  );
};