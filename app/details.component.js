import React from 'react';
import { SafeAreaView, styles, StyleSheet } from 'react-native';
import { Divider, Icon, Layout, Text, TopNavigation, TopNavigationAction, Button, container, withStyles } from '@ui-kitten/components';

export const DetailsScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <Layout style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text category='h1'>DETAILS</Text>
      </Layout>

      <Layout style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 5, marginLeft: 20, marginTop: 50}}>
        <Button style={{  }} size='tiny'>Tiny</Button>
        <Button style={{  }} size='small'>Small</Button>
        <Button style={{  }} size='medium'>Medium</Button>
        <Button style={{  }} size='large'>Large</Button>
        <Button style={{  }} size='giant'>Giant</Button>
      </Layout> 

      <Layout style={{flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start', marginLeft: 20, gap: 5, marginTop: -300 }}>
        <Text category='h1'>H1</Text>
        <Text category='h2'>H2</Text>
        <Text category='h3'>H3</Text>
        <Text category='h4'>H4</Text>
        <Text category='h5'>H5</Text>
        <Text category='h6'>H6</Text>
        <Text category='S1'>S1</Text>
        <Text category='S2'>S2</Text>
        <Text category='p1'>p1</Text>
        <Text category='p2'>p2</Text>
        <Text category='c1'>C1</Text>
        <Text category='c2'>C2</Text>
        <Text category='label'>LABEL</Text>
      </Layout>

    </SafeAreaView>
    
  );
};
