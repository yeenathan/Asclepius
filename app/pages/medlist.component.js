import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import { Button, Layout, Text} from '@ui-kitten/components';

import { default as colorTheme } from "@/custom-theme.json"
import { styles } from "@/app/stylesheet"

export const MedListScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Layout style={styles.masterLayout}>

      </Layout>
    </SafeAreaView>
  );
};