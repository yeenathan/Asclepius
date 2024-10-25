import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { Button, Layout, Text} from '@ui-kitten/components';

import { default as colorTheme } from "@/custom-theme.json"

import { medication, suggestions } from "./medData"

export const ScanScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: "2.5rem", backgroundColor: colorTheme['silver-white'], gap: 10}}>
        <Text category='h1'>scan screen</Text>
        <Button onPress={() => navigation.navigate("Scan 2")}>Go to screen 2</Button>
        <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#D9D9D9', width: 300, height: 500, borderRadius: 30 }} />
        <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#D9EDFF', width: 300, height: 50, borderRadius: 30, marginTop: 20}}>
          <Text category='s1'>Instructions:
            - position
          </Text>
        </View>
      </Layout>
    </SafeAreaView>
  );
};