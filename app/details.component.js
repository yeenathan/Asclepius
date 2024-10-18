import React from 'react';
import { SafeAreaView, styles, StyleSheet } from 'react-native';
import { Divider, Icon, Layout, Text, TopNavigation, TopNavigationAction, Button, container, withStyles } from '@ui-kitten/components';

export const DetailsScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <Layout style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text category='h1'>DETAILS</Text>
      </Layout>

      <Layout style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 5, marginLeft: 20, }}>
        <Button style={{  }} size='tiny'>Tiny</Button>
        <Button style={{  }} size='small'>Small</Button>
        <Button style={{  }} size='medium'>Medium</Button>
        <Button style={{  }} size='large'>Large</Button>
        <Button style={{  }} size='giant'>Giant</Button>
      </Layout> 
    </SafeAreaView>
    
  );
};