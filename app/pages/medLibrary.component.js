import React, { useEffect } from 'react';
import { SafeAreaView, View } from 'react-native';
import { Button, Layout, Text, Icon} from '@ui-kitten/components';
import { Header } from "@/app/components/header"

import { default as colorTheme } from "@/custom-theme.json"
import { styles } from "@/app/stylesheet"

export const MedFolder = ({navigation}) => { // med folder component
  
  const TabSwitch = () => {
    return (
      <View style={{flexDirection: "row", gap: 6}}>
        <Button style={{flex: 1}}>Current</Button>
        <Button style={{flex: 1}}>Archive</Button>
      </View>
    )
  }

  return (
    <Layout style={{flex: "1", backgroundColor: colorTheme['silver-white']}}>
      <TabSwitch />
    </Layout>
  )
}

export const EditReminderScreen = ({navigation}) => { // edit reminder screen
  return (
    <SafeAreaView style={{ flex: 1}}>
      <Header navigation={navigation}/>
      <Layout style={styles.masterLayout}>
        <Text>Edit Reminder</Text>
      </Layout>
    </SafeAreaView>
  )
}

export const EditInfoScreen = ({navigation}) => { // edit info screen
  return (
    <SafeAreaView style={{ flex: 1}}>
      <Header navigation={navigation}/>
      <Layout style={styles.masterLayout}>
        <Text>Edit Info</Text>
      </Layout>
    </SafeAreaView>
  )
}

export const InfoScreen = ({navigation}) => { // info screen
  return (
    <SafeAreaView style={{ flex: 1}}>
      <Header navigation={navigation}/>
      <Layout style={styles.masterLayout}>
        <Text>Info</Text>
        <Button onPress={() => navigation.navigate("Med Stack", {screen: "Edit Reminder"})}>Reminder</Button>
        <Button onPress={() => navigation.navigate("Med Stack", {screen: "Edit Info"})}>Edit</Button>
      </Layout>
    </SafeAreaView>
  )
}

export const MedLibraryScreen = ({navigation}) => { // main med library screen
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Layout style={{...styles.masterLayout, flex: "none"}}>
        <View style={styles.rowContainer}>
          <Text category='h1' style={{color: colorTheme['persian-green']}}>Med Library</Text>
          <Icon style={{width: "40px"}} name="settings-2-outline"></Icon>
        </View>
      </Layout>
      <MedFolder navigation={navigation} />
    </SafeAreaView>
  );
};