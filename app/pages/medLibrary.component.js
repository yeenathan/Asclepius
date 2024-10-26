import React, { useState } from 'react';
import { SafeAreaView, View, Image } from 'react-native';
import { Button, Layout, Text, Icon} from '@ui-kitten/components';
import { Header } from "@/app/components/header"

import { default as colorTheme } from "@/custom-theme.json"
import { styles } from "@/app/stylesheet"

import { LIBRARY_DATA } from "@/app/data/medData"

export const MedFolder = ({navigation}) => { // med folder component
  const [data, setData] = useState(LIBRARY_DATA);

  function handleSwitch(value) {
    if (value) {
      setData(LIBRARY_DATA);
    }
    else {
      setData([LIBRARY_DATA[LIBRARY_DATA.length-1]]);
    }
  }

  const TabSwitch = () => {
    return (
      <View style={{flexDirection: "row", gap: 6}}>
        <Button onPress={() => handleSwitch(1)} style={{flex: 1}}>Current</Button>
        <Button onPress={() => handleSwitch(0)} style={{flex: 1}}>Archive</Button>
      </View>
    )
  }

  return (
    <Layout style={{flex: "1", backgroundColor: colorTheme['silver-white']}}>
      <TabSwitch />
      <View style={{paddingHorizontal: "2.5rem", marginTop: "2rem", gap: "1rem"}}>
        {
          data.map((med, index) => {
            return (
              <Button
                onPress={() => navigation.navigate("Info", {medication: med})}
                style={{backgroundColor: colorTheme['light-blue'], ...styles.invisBorder}}
                key={index}
                children={() => (
                  <View style={{flexDirection: "row", alignItems: "center"}}>
                    <Image source={med.icon}/>
                    <Text category='h2'>{med.name}</Text>
                  </View>
                )}
              />
            )
          })
        }
      </View>
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

export const InfoScreen = ({navigation, route}) => { // info screen
  const medication = route.params.medication;

  return (
    <SafeAreaView style={{ flex: 1}}>
      <Header navigation={navigation}/>
      <Layout style={styles.masterLayout}>
        <Text>{medication.name} Info</Text>
        <Button onPress={() => navigation.navigate("Med Stack", {screen: "Edit Reminder", medication: medication})}>Reminder</Button>
        <Button onPress={() => navigation.navigate("Med Stack", {screen: "Edit Info", medication: medication})}>Edit</Button>
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
      <MedFolder navigation={navigation}/>
    </SafeAreaView>
  );
};