import React from 'react';
import { Button, SafeAreaView } from 'react-native';
import { Divider, Icon, Layout, Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components';

export const DetailsScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text category='h1'>DETAILS</Text>
      </Layout>
    </SafeAreaView>
  );
};