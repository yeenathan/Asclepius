import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import { Button, Icon, Layout, Text} from '@ui-kitten/components';
import { View } from 'react-native';
import { HorizontalCalendar } from "@/app/components/horizontalCalendar"

import { styles } from "../stylesheet"
import { default as colorTheme } from '../../custom-theme.json';

export const HomeScreen = ({ }) => {
  // const navigateDetails = () => {
  //   navigation.navigate('Details');
  // };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: "4rem"}}>
        <View style={{...styles.rowContainer, width: "100%"}}>
          <Text category='h2' style={{color: colorTheme['persian-green']}}>Good morning, Nathan.</Text>
          <Icon style={{width: "40px"}} name="settings-2-outline"></Icon>
        </View>
        <View>
          <HorizontalCalendar/>
        </View>
      </Layout>
    </SafeAreaView>
  );
};