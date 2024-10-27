import React, { useState } from 'react';
import { SafeAreaView, View, Image, ScrollView } from 'react-native';
import { Button, Layout, Text, Icon} from '@ui-kitten/components';
import { Header } from "@/app/components/header"

import { default as colorTheme } from "@/custom-theme.json"
import { styles } from "@/app/stylesheet"

import { LIBRARY_DATA } from "@/app/data/medData"
import { TimeInterval } from '../components/timeInterval';

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
            <ScrollView contentContainerStyle={{ paddingHorizontal: "2.5rem", marginTop: "2rem", gap: "1rem" }}>
        {
          data.map((med, index) => (
            <Button
              onPress={() => navigation.navigate("Info", { medication: med })}
              style={{ backgroundColor: colorTheme['light-blue'], ...styles.invisBorder }}
              key={index}
              children={() => (
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image source={med.icon} />
                  <Text category='h2'>{med.name}</Text>
                </View>
              )}
            />
          ))
        }
      </ScrollView>
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

  const handleArchive = () => {
    // Handle archiving logic here
    console.log(`${medication.name} archived`);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header navigation={navigation} />
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <Layout style={styles.masterLayout}>
          {/* Medication Header */}
          <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 16 }}>
            <Image 
              source={medication.icon} 
              style={{ width: 40, height: 40, marginRight: 16 }} 
            />
            <Text category="h2">{medication.name}</Text>
          </View>

          {/* Edit Buttons */}
          <View style={{ flexDirection: 'row', gap: 8, marginBottom: 16 }}>
            <Button
              onPress={() => navigation.navigate("Med Stack", { screen: "Edit Reminder", medication })}
              style={{ flex: 1, backgroundColor: colorTheme['persian-green'] }}
              accessoryLeft={(props) => <Icon {...props} name="edit-outline" />}
            >
              Edit Reminder
            </Button>
            <Button
              onPress={() => navigation.navigate("Med Stack", { screen: "Edit Info", medication })}
              style={{ flex: 1, backgroundColor: colorTheme['persian-green'] }}
              accessoryLeft={(props) => <Icon {...props} name="edit-outline" />}
            >
              Edit Info
            </Button>
          </View>

          {/* Reminder Section */}
          <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 8 }}>
            <Icon name="clock-outline" fill={colorTheme['persian-green']} style={{ width: 24, height: 24, marginRight: 8 }} />
            <Text category="h1" style={{ color: colorTheme['persian-green'] }}>Reminder</Text>
          </View>
          <View style={{
            backgroundColor: "#ffffff",
            borderRadius: 10,
            padding: 16,
            marginBottom: 16,
          }}>
            {medication.reminder.map((item, index) => (
              <Text key={index} category="p1" style={{ marginBottom: 4 }}>
                {item}
              </Text>
            ))}
          </View>

          {/* Medication Info Section */}
          <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 8 }}>
            <Icon name="file-text-outline" fill={colorTheme['persian-green']} style={{ width: 24, height: 24, marginRight: 8 }} />
            <Text category="h1" style={{ color: colorTheme['persian-green'] }}>Medication Info</Text>
          </View>
          <View style={{
            backgroundColor: "#ffffff",
            borderRadius: 10,
            padding: 16,
            marginBottom: 16,
          }}>
            <Text category="h3" style={{ color: colorTheme['persian-green'], marginBottom: 8 }}>Description</Text>
            <Text>{medication.description}</Text>

            <Text category="h3" style={{ color: colorTheme['persian-green'], marginTop: 16, marginBottom: 8 }}>Side Effects</Text>
            <View style={{ marginTop: 8 }}>
              {medication.sideEffects.map((effect, index) => (
                <Text key={index}>• {effect}</Text>
              ))}
            </View>

            <Text category="h3" style={{ color: colorTheme['persian-green'], marginTop: 16, marginBottom: 8 }}>Directions for Use</Text>
            <View style={{ marginTop: 8 }}>
              {medication.directions.map((direction, index) => (
                <Text key={index}>• {direction}</Text>
              ))}
            </View>

            {/* Medication Summary */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 24 }}>
              <View>
                <Text category="h5" style={{ color: colorTheme['persian-green'], marginBottom: 8 }}>
                  Drug Strength
                </Text>
                <Text category="h5" style={{ color: colorTheme['persian-green'], marginBottom: 8 }}>
                  Dosage Type
                </Text>
                <Text category="h5" style={{ color: colorTheme['persian-green'], marginBottom: 8 }}>
                  Quantity Prescribed
                </Text>
                <Text category="h5" style={{ color: colorTheme['persian-green'], marginBottom: 8 }}>
                  Number of Refills
                </Text>
              </View>
              <View>
                <Text style={{ marginBottom: 8 }}>{medication.strength}</Text>
                <Text style={{ marginBottom: 8 }}>{medication.type}</Text>
                <Text style={{ marginBottom: 8 }}>{medication.quantity}</Text>
                <Text style={{ marginBottom: 8 }}>{medication.refills}</Text>
              </View>
            </View>
          </View>

          {/* Archive Button */}
          <Button 
            size="giant"
            style={{ backgroundColor: colorTheme['persian-green'], borderRadius: 10, marginTop: 16 }}
            onPress={handleArchive}
          >
            Archive This Med
          </Button>
        </Layout>
      </ScrollView>
    </SafeAreaView>
  );
};

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