import React from 'react';
import { SafeAreaView, styles, StyleSheet, ScrollView } from 'react-native';
import { Divider, Icon, Layout, Text, TopNavigation, TopNavigationAction, Button, container, withStyles } from '@ui-kitten/components';
import { View } from 'react-native';

export const DetailsScreen = ({ navigation }) => {
  return (
    <Layout style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#f8f8f8", gap: 10}}>
      {/* <ScrollView className="scrollview"> */}
        <Text category='h1'>Components</Text>
        
        <View style={{ flexDirection: "column", alignItems: "center", gap: 10}}>
          <Text category='h1'>H1 Header One</Text>
          <Text category='h2'>H2</Text>
          <Text category='h3'>H3</Text>
          <Text category='h4'>H4</Text>
          <Text category='h5'>H5</Text>
          <Text category='h6'>H6</Text>
        </View>

        <View style={{ flexDirection: "row", gap: 5 }}>
          <Text category='S1'>S1</Text>
          <Text category='S2'>S2</Text>
        </View>

        <View style={{ flexDirection: "row", gap: 5 }}>
          <Text category='p1'>p1</Text>
          <Text category='p2'>p2</Text>
        </View>

        <View style={{ flexDirection: "row", gap: 5 }}>
          <Text category='c1'>C1</Text>
          <Text category='c2'>C2</Text>
        </View>

        <View style={{ flexDirection: "row"}}>
          <Text category='label'>LABEL</Text>
        </View> 

        <View>
          <Text>Default Text. Hello</Text>
          <Text appearance='hint'>Hint Text :3</Text>
          <Text appearance='alternative'>Alternative Text.....</Text>
        </View>

        <View style={{ }}>
          <Text status='primary'>Primary yipee</Text>
        </View>

      {/* </ScrollView> */}
    </Layout>
  );
};

{/* <View style={{flexDirection: "row", alignItems: "center", flexWrap: "wrap", gap: 5}}>
          <Button style={{  }} size='tiny'>Tiny</Button>
          <Button style={{  }} size='small'>Small</Button>
          <Button style={{  }} size='medium'>Medium</Button>
          <Button style={{  }} size='large'>Large</Button>
          <Button style={{  }} size='giant'>Giant</Button>
        </View> */}

