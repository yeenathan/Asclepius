import React, { useState, useContext, useCallback } from "react";
import { SafeAreaView, StyleSheet, View, ViewProps, Image, ScrollView, TouchableOpacity } from "react-native";
import {
  Button,
  Layout,
  Text,
  Icon,
  IndexPath,
  Select,
  SelectItem,
  Modal,
  Input,
  Datepicker,
  TopNavigationAction,
  Card
} from "@ui-kitten/components";
import { Header } from "@/app/components/header";
import ViewMoreText from 'react-native-view-more-text'

import { default as colorTheme } from "@/custom-theme.json";
import { styles } from "@/app/stylesheet";

import { LIBRARY_DATA } from "@/app/data/medData";
import { ThemeContext } from "../theme-context";
import { default as theme } from "@/custom-theme.json";
import { useFocusEffect } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ArchiveModal = ({ open, close, actionWord, onPress, description }) => {
  return (
    <Modal
      visible={open}
      backdropStyle={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      onBackdropPress={() => close()}
      pointerEvent="box-none"
    >
      <View
        style={{
          backgroundColor: "white",
          justifyContent: "center",
          padding: 40,
          paddingTop: 48,
          width: "90%",
          position: "fixed",
          top: "40%",
          left: 15,
          right: 15,
          borderRadius: 20,
        }}
      >
        <Text
          style={{ marginBottom: 18, paddingHorizontal: 32 }}
          category="h2"
        >
          {actionWord} This Medication?
        </Text>
        <Text style={{ width: 270, margin: "auto", marginBottom: 15 }}>
          {description}
        </Text>
        <View style={{ flexDirection: "row", gap: 16 }}>
          <Button
            size="small"
            onPress={() => close()}
            style={{
              flex: 1,
              backgroundColor: colorTheme["white"],
              borderColor: colorTheme["hunyadi-yellow"],
              borderRadius: 16,
            }}
            children={() => <Text category="h2">Cancel</Text>}
          />
          <Button
            size="small"
            onPress={onPress}
            style={{
              flex: 1,
              backgroundColor: colorTheme["hunyadi-yellow"],
              borderColor: colorTheme["hunyadi-yellow"],
              borderRadius: 16,
            }}
            children={() => <Text category="h2">{actionWord}</Text>}
          />
        </View>
      </View>
    </Modal>
  );
};

const MedButton = ({ index, med, onPress, handleArchive, handleDelete, icon }) => {
  const [showArchiveBottomModal, setShowArchiveBottomModal] = useState(false);
  const [showArchiveModal, setShowArchiveModal] = useState(false);
  const toggleArchiveBottomModal = () => {
    setShowArchiveBottomModal((prev) => !prev);
  };
  const actionWord = med.isArchive ? "Delete" : "Archive";
  const description = med.isArchive
    ? "Are you sure you want to delete this medication from the archive?"
    : "This medication will be marked as inactive and stored in the archive for future reference.";
  const colorTheme = theme[useContext(ThemeContext).theme];
  
  return (
    <>
      <Modal
        visible={showArchiveBottomModal}
        backdropStyle={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        onBackdropPress={toggleArchiveBottomModal}
        pointerEvents="box-none"
        style={{width: "100%", justifyContent: "flex-end", position: "fixed", bottom: 0}}
      >
        <View
          style={{
            backgroundColor: "white",
            justifyContent: "center",
            padding: 40,
            paddingTop: 48,
            width: "100%",
            height: "25%",
            position: "fixed",
            bottom: "0",
            left: "0",
            borderTopLeftRadius: 80,
            borderTopRightRadius: 80,
          }}
        >
          <Text
            style={{ marginBottom: 32, paddingHorizontal: 32, color: colorTheme ["black"]}}
            category="h2"
          >
            {med.name}
          </Text>
          <Button
            size="giant"
            onPress={() => setShowArchiveModal(true)}
            style={{
              backgroundColor: colorTheme["hunyadi-yellow"],
              borderColor: colorTheme["hunyadi-yellow"],
              borderRadius: 16,
            }}
            children={() => <Text category="h2">{actionWord} This Med</Text>}
          />
        </View>
      </Modal>
      <ArchiveModal
        open={showArchiveModal}
        close={() => setShowArchiveModal(false)}
        actionWord={actionWord}
        onPress={() => {
          // archive logic
          med.isArchive ? handleDelete(med) : handleArchive(med);
          setShowArchiveModal(false);
          setShowArchiveBottomModal(false);
        }}
        description={description}
      />
      <Button
        onPress={onPress}
        style={{
          backgroundColor: med.isArchive
            ? colorTheme["hunyadi-yellow"]
            : colorTheme["light-blue"],
          ...styles.invisBorder,
          boxShadow : "1px 3px 6px 0px rgba(0, 0, 0, 0.10)"
        }}
        key={index}
        children={() => (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
              paddingVertical: 10,  
              paddingHorizontal: 15,
              padding: 10,
              borderRadius: 15,
            }}
          > 
            <View
            style={{
              backgroundColor: colorTheme["white"],
              borderRadius: 50,
              width: 65,  
              height: 65,
              alignItems: "center",
            }}
            ><View>
            <Image source={med.icon} style={{
              width: 40, 
              height: 40,
              marginTop: 10
            }}/>
          </View>
        </View>
        <View style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "90%",
              alignItems: "center",
              paddingVertical: 10,  
              paddingHorizontal: 25,
            }}>
            <Text style={{fontSize: 20, fontFamily: "Poppins-SemiBold", color: colorTheme ["generic-text"]}}>{med.name}</Text>
            <Text
              style={{ fontWeight: "bold" }}
              onPress={() => {
                toggleArchiveBottomModal();
              }}
            >
            </Text>
            </View>
            </View>
        )}
      />
    </>
  );
};

export const MedFolder = ({ navigation }) => {
  // med folder component
  useFocusEffect(
    useCallback(() => {
      async function loadData() {
        const keys = JSON.parse(await AsyncStorage.getItem("KEYS"));
        let meds = []
        if (keys) {
          for (let key of keys) {
            let med = JSON.parse(await AsyncStorage.getItem(key));
            meds.push({
              name: med.name,
              nickname: med.nickname,
              icon: med.icon,
              ingredient: med.ingredient,
              DIN: med.DIN,
              description: med.description,
              sideEffects: med.sideEffects,
              duration: med.duration,
              reminder: ["reminder"],
              directions: ["step 1", "step 2"],
              strength: med.strength,
              type: "med type",
              quantity: "quantity",
              refills: "refills"
            });
          }
        }
        setData(meds);
      }
      loadData();
    }, [])
  )
  const [data, setData] = useState(null);
  const [selectedTab, setSelectedTab] = useState(1);
  const colorTheme = theme[useContext(ThemeContext).theme];

  function handleSwitch(value) {

    setSelectedTab(value);
  }

  const TabSwitch = () => {
    return (
      <View style={{ backgroundColor: colorTheme["medfolder-background"]}}>
      <View style={{ flexDirection: "row", gap: 0 }}>
        <Text
          onPress={() => handleSwitch(1)}
          style={{
            flex: 1,
            backgroundColor:
              selectedTab === 1 ? colorTheme["dark-green"] : colorTheme["button-color"],
            borderColor: colorTheme["border-color"],
            textAlign: "center",
            border: `solid ${colorTheme["green"]} 3`,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            height: 64,
            lineHeight: 64,
            borderWidth: 0.5,
            color:
              selectedTab === 1 ? colorTheme["white"] : colorTheme["text-disabled-black"],
            fontFamily: selectedTab === 1 ? "PublicSans-Bold" : "PublicSans-Regular",
          }}
        >
          Current
        </Text>
        <Text
          onPress={() => handleSwitch(0)}
          style={{
            flex: 1,
            backgroundColor:
              selectedTab === 1 ? colorTheme["button-color"] : colorTheme["green"],
            textAlign: "center",
            borderColor: "#DEDEDE",
            border: `solid ${colorTheme["green"]} 3`,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            height: 64,
            lineHeight: 64,
            color:
              selectedTab === 1 ? "#6E6E6E" : "white",
              borderWidth: 0.5,
            fontFamily: selectedTab === 1 ? "PublicSans-Regular" : "PublicSans-Bold",
          }}
        >
          Archive
        </Text>
      </View>
      </View>
    );
  };

  const handleDelete = (med) => {
    setData((prev) => prev.filter((m) => m.name !== med.name));
  };
  const handleArchive = (med) => {
    setData((prev) => {
      const newData = prev.map((m) => {
        const c = {...m}
        if(m.name === med.name) {
        c.isArchive = true;
        }
        return c;
      });
      return newData
    });
  };
  return (
    <View style={{backgroundColor: colorTheme["medfolder-background2"], flex: 1}}>
      <TabSwitch />
        <View
          style={{
            paddingHorizontal: 40,
            marginTop: 32,
            gap: 16,
          }}
        >
          {data && data.filter((med)=> {
            if(selectedTab === 1) {
              return !med.isArchive
            } else {
              return med.isArchive === true
            }
          }).map((med, index) => (
            <MedButton
              key={med.name}
              med={med}
              index={index}
              icon={med.icon}
              onPress={() =>
                navigation.navigate('Info', {
                  medication: med,
                  handleDelete,
                  handleArchive,
                })
              }
              handleArchive={handleArchive}
              handleDelete={handleDelete}
            />
          ))}
      </View>
      </View>
  );
};

export const MedDescription = ({ navigation, route }) => {
  const medication = route.params.medication;
  const colorTheme = theme[useContext(ThemeContext).theme];
  const BackAction = () => (
    <View style={{height: 80}}>
    <TopNavigationAction
      onPress={() => navigation.goBack()}
      icon={(props) => <Icon {...props} name="arrow-ios-back-outline" fill="#ffffff" style={{width: 45, height: 45}} />}
      style={{
        width: "100%",
        Color: colorTheme["white"],
        paddingVertical: 40,
        paddingHorizontal: 8,
      }}
    />
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colorTheme['green'] }}>
      <BackAction />
      <ScrollView contentContainerStyle={{ alignItems: 'center', padding: 20 }}>
        <Text style={{ fontSize: 26, fontFamily: 'Poppins-SemiBold', color: colorTheme['silver-white'] }}>
          {medication.name}, {medication.refills}
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontFamily: 'PublicSans-Regular',
            color: 'white',
            marginTop: 20,
            textAlign: 'center',
          }}
        >
          {medication.directions}
        </Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 30, marginTop: 30 }}>
          <Image source={medication.icon} style={{ width: 180, height: 180 }} />
        </View>
        <Text
          style={{
            fontSize: 16,
            fontFamily: 'PublicSans-Bold',
            color: 'white',
            marginTop: 5,
            marginBottom: 8,
            marginRight: 206,
          }}
        >
          Description
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontFamily: 'PublicSans-Regular',
            color: 'white',
            marginBottom: 20,
            textAlign: 'center',
            width: 300,
          }}
        >
          {medication.description}
        </Text>
        <Button
          style={{
            backgroundColor: colorTheme['green'],
            borderColor: colorTheme['white'],
            borderRadius: 20,
            width: '80%',
            borderWidth: 3,
          }}
          onPress={() =>
            navigation.navigate('Info', {
              medication: medication,
              handleArchive: route.params.handleArchive,
              handleDelete: route.params.handleDelete,
            })
          }
        >
          <Text style={{ color: 'green' }}>View & Edit Details</Text>
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
};



export const InfoScreen = ({ navigation, route }) => {
  const [showArchiveModal, setShowArchiveModal] = useState(false);
  // info screen
  const medication = route.params.medication;
  const handleDelete = route.params.handleDelete;
  const handleArchive = route.params.handleArchive;
  const actionWord = medication.isArchive ? "Delete" : "Archive";
  const description = medication.isArchive
    ? "Are you sure you want to delete this medication from the archive?"
    : "This medication will be marked as inactive and stored in the archive for future reference.";
  const colorTheme = theme[useContext(ThemeContext).theme];

  const onPress = () => {
    // Handle archiving logic here
    setShowArchiveModal(true);
  };

  const medHeader = (props) => (
    <View {...props} style={{ flexDirection: "row", gap: 10, alignItems: "center", padding: 10, borderRadius: 20, backgroundColor: colorTheme["card-color"], }}>
      <View
        style={{
          marginTop: 10,
          marginBottom:10,
          backgroundColor: colorTheme["green"],
          borderRadius: "50%",
          justifyContent: "center",
          alignItems: "center",
          padding: 10,
          width: 50,
          height: 50,
          marginLeft: 10,
          marginBottom: 65,
        }}
      >
        <View>
        <Image
          source={medication.icon}
          style={{ width: 35, height: 35, marginBottom: 65, marginTop: 65}}
        /> 
        </View>
      </View>
      <View style={{ flexDirection: "column", flex: 1, marginright: 20 }}>
        <Text style={{ fontSize: 16, fontFamily: "PublicSans-SemiBold", color: colorTheme["card-text"], marginBottom:7}}>
          {medication.name}, {medication.refills} units
        </Text>
        <Text style={{ fontSize: 14, fontFamily: "PublicSans-SemiBold", color: colorTheme["text-gray"]}}>
          {medication.directions}
        </Text>
      </View>
      <TouchableOpacity
  onPress={() =>
    navigation.navigate("Med Stack", {
      screen: "Edit Reminder",
      medication,
    })
  }
  style={{ position: "absolute", top: 10, right: 10 }}
>
  <Text style={{ fontSize: 14, fontFamily: "PublicSans-Regular", color: colorTheme["green"], textDecorationLine: 'underline' }}>Edit Info</Text>
</TouchableOpacity>
    </View>
  );
  
  const [visible, setVisible] = useState(false);
  const [directionsVisible, setDirectionsVisible] = useState(false);
  const [fullText, setFullText] = useState('');

  const renderViewMore = (onPress) => (
    <TouchableOpacity onPress={() => {
      setFullText('This is the full text to display in the overlay.');
      setDirectionsVisible(true);
    }}>
      <Text category="s1" style={{ color: "white", marginTop: 20, textDecorationLine: 'underline' }}>View More</Text>
    </TouchableOpacity>
  );
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header navigation={navigation} />
      <Layout style={{...styles.masterLayout, backgroundColor: colorTheme["background"]}}>
        <ArchiveModal
          open={showArchiveModal}
          close={() => setShowArchiveModal(false)}
          actionWord={actionWord}
          onPress={() => {
            // archive logic
            if (medication.isArchive) {
              handleDelete(medication);
            } else {
              handleArchive(medication);
              navigation.navigate("Med Folder");
            }
            setShowArchiveModal(false);
          }}
          description={description}
        />
        <ScrollView style={{
            width: "100%",
            flexDirection: "column",
            gap: 12,
            marginBottom: 12, 
            flex: 1,
          }}
          contentContainerStyle={{justifyContent: "flex-start"}}
        >
            <View style={{flexDirection: "row", alignItems:'center', textAlign: 'center', marginLeft: 115}}>
            <Text style={{fontSize: 22, fontFamily: "Poppins-SemiBold"}}>
              Madication <Text style={{ fontSize: 22, fontFamily: "Poppins-SemiBold", color: colorTheme["green"], }}>Info</Text>
              </Text>
            </View>
            <View style={{ marginTop: 20,}}>
            <Card style={{ backgroundColor: colorTheme["card-color"]}} header={medHeader}>
              <View style={{ flexDirection: "row", alignItems: "center", gap: 6, }}>
                <Text style={{ fontSize: 14, fontFamily: "Poppins-Medium", color: colorTheme["text-gray"]}}>Duration</Text>
                <Text style={{ fontSize: 14, fontFamily: "Poppins-Medium", color: colorTheme["text-gray"]}}>Dose</Text>
                <Text style={{ fontSize: 14, fontFamily: "Poppins-Medium", color: colorTheme["text-gray"]}}>Frequency</Text>      
              </View>
            </Card>
            </View>
            {/* reminder part */}
            {/* <View style={{ flexDirection: "row", gap: 8, marginBottom: 16 }}>
              <Button
                onPress={() =>
                  navigation.navigate("Med Stack", {
                    screen: "Edit Reminder",
                    medication,
                  })
                }
                style={{
                  flex: 1,
                  backgroundColor: colorTheme["green"],
                }}
                accessoryLeft={(props) => (
                  <Icon {...props} name="edit-outline" />
                )}
              >
                Edit info
              </Button>
              <Button
                onPress={() =>
                  navigation.navigate("Med Stack", {
                    screen: "Edit Info",
                    medication,
                  })
                }
                style={{
                  flex: 1,
                  backgroundColor: colorTheme["green"],
                }}
                accessoryLeft={(props) => (
                  <Icon {...props} name="edit-outline" />
                )}
              >
                Info
              </Button>
            </View> */}
            {/* <View style={{ flexDirection: "column", gap: 6 }}>
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 6 }}
              >
                <Icon style={{ width: 40 }} name="clock"></Icon>
                <Text style={{ color: colorTheme["green"] }}>
                  Reminder
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: "#fff",
                  padding: 32,
                  borderRadius: 20,
                }}
              >
                <Text>{medication.reminder}</Text>
              </View>
            </View> */}

            {/* <View
                style={{ flexDirection: "row", alignItems: "center", gap: 6 }}
              >
                <Icon style={{ width: 40 }} name="edit"></Icon>
                <Text style={{ color: colorTheme["persian-green"] }}>
                  Medication Info
                </Text>
              </View> */}
              
            
            <View style={{ flexDirection: "column", gap: 6, marginTop: 20 }}>

              <View
                style={{
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: 6,
                  backgroundColor: '#fff',
                  borderRadius: 20,
                  padding: 20,
                  shadowColor: "#000", 
                  shadowOffset: { width: 4, height: 4 }, 
                  shadowOpacity: 0.25, 
                  shadowRadius: 3.84, 
                  elevation: 5,
                  backgroundColor: "#007972"
                }}
              >
                <Text style={{ color: colorTheme["direction"] }}>
                  Active Ingredient
                </Text>

                <Text style={{ color: "#fff", fontSize: 26, textAlign: 'center' }}>{medication.ingredient}</Text>
              </View>

              <View style={{ flexDirection: "column", width: "100%", gap: 20 }}>    
                <View
                  style={{
                    flexDirection: "column",
                    backgroundColor: "#fff",
                    padding: 20,
                    borderRadius: 20,
                    shadowColor: "#000", 
                    shadowOffset: { width: 4, height: 4 }, 
                    shadowOpacity: 0.25, 
                    shadowRadius: 3.84, 
                    elevation: 5,
                  }}
                >
                <Text
                  style={{ color: colorTheme["direction"], fontWeight: "bold", marginBottom:7, fontSize: 20 }}
                  onPress={() => setDirectionsVisible(true)}
                >
                  Description
                </Text>
                <Text style={{ marginBottom: 10, color: "#A0A0A0", fontSize: 18 }}>{medication.description}</Text>
              </View>


              <View
                style={{
                  flexDirection: "column",
                  backgroundColor: colorTheme["card-color"],
                  padding: 20,
                  borderRadius: 20,
                  shadowColor: "#000", 
                  shadowOffset: { width: 4, height: 4 }, 
                  shadowOpacity: 0.25, 
                  shadowRadius: 3.84, 
                  elevation: 5,
                  width: "100%",
                }}
              >
                <Text
                  style={{ color: "#8FBAB3" , fontSize: 28, fontFamily: "Poppins-SemiBold", marginBottom: 10 }}
                >
                  Side Effects
                </Text>
                <View style={{ flexDirection: "column" }}>
                  {medication.sideEffects.map((effect, index) => (
                  <Text key={index} style={{ marginBottom: 5, fontFamily: "Poppins-SemiBold", fontSize: 18, color:"#A0A0A0" }}>
                    • {effect}
                  </Text>
                  ))}
                </View>
              </View>
                


                 <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 6,
                  }}
                >

                  
                  <Text style={{ color: colorTheme["persian-green"] }}>
                    Drug Strength
                  </Text>
                  <Text>{medication.strength}</Text>
                </View> 

                 <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  <Text style={{ color: colorTheme["persian-green"] }}>
                    Dosage Type
                  </Text>
                  <Text>{medication.type}</Text>
                </View> 

                

                
                 <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  <Text style={{ color: colorTheme["persian-green"] }}>
                    Number of Refills
                  </Text>
                  <Text>{medication.refills}</Text>
                </View> *
              </View>
            </View>
            <Text style={{ color: colorTheme["text-gray"], fontSize: 10, marginTop: 15, alignItems: "center"}}>*This app is not a substitute for professional medical advice; always consult your healthcare provider for guidance.</Text>
            <Button
              size="giant"
              onPress={onPress}
              style={{
                backgroundColor: colorTheme["archive"],
                borderColor: colorTheme["archive-border"],
                borderRadius: 20,
                marginTop: 15
              }}
              children={() => <Text category="h2">{actionWord} This Med</Text>}
            />
        </ScrollView>
      </Layout>
    </SafeAreaView>
  );
};

export const EditReminderScreen = ({ route, navigation }) => {
  // edit reminder screen
  const [selectedIndex, setSelectedIndex] = useState(new IndexPath(0));
  const strengthOptions = ["2.5mg", "5mg", "10mg", "20mg", "30mg", "40mg"];
  const typeOptions = [
    "Pill",
    "Capsule",
    "Liquid",
    "Spray",
    "Drops",
    "Injection",
    "Cream",
  ];
  const refillsOptions = ["1", "2", "3", "4"];
  const [date, setDate] = React.useState(new Date());
  const colorTheme = theme[useContext(ThemeContext).theme];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header navigation={navigation} />
      <Layout style={{...styles.masterLayout, backgroundColor: colorTheme["generic-bg"]}}>
        <View style={{ flex: 1, justifyContent: "flex-start", width: "95%" }}>
          <Icon style={{ width: 40 }} name="clock"></Icon>
          <Text>
            Lisinoprill
            {medication.name}
          </Text>
          <View style={{ gap: 20, margin: 20 }}>
            <View>
              <Text category="p2">Time</Text>
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "row",
                  backgroundColor: "white",
                  width: "90%",
                  borderRadius: 20,
                }}
              >
                <Input style={{ flex: 6 }} placeholder="10: 30pm" />
              </View>
            </View>
            <View>
              <Text category="p2">Time Interval</Text>
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "row",
                  backgroundColor: "sliver-white",
                  width: "90%",
                  borderRadius: 20,
                }}
              >
                <Input style={{ flex: 6 }} placeholder="Every 2 hours" />
                <Button
                  style={{ flex: 3 }}
                  onPress={() => navigation.navigate("TimeIntervaledit")}
                >
                  Edit
                </Button>
              </View>
            </View>
            <View>
              <Text category="p2">Treatment Start Date</Text>
            </View>
            <Datepicker
              date={date}
              onSelect={(nextDate) => setDate(nextDate)}
            />
            <View>
              <Text category="p2">Treatment End Date</Text>
            </View>
            <Datepicker
              date={date}
              onSelect={(nextDate) => setDate(nextDate)}
            />
            <View>
              <Text category="p2">Refill Reminder</Text>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', backgroundColor: "sliver-white", width: '90%', borderRadius: 20 }}>
          <Input style={{ flex: 6}} placeholder='10 pill(s) left'/>
          <Button style={{ flex: 3 }} onPress={() => navigation.navigate("Current Pill Number")}>Edit</Button>
          </View>
          <View style={{ gap: 6 }}>
            <Button
              onPress={() => navigation.goBack()}
              size="giant"
              style={{ ...styles.orangerButton, borderRadius: 16 }}
              children={() => <Text category="h2">Confirm</Text>}
            />
              <Button
                onPress={() => navigation.goBack()}
                size="giant"
                style={{
                  backgroundColor: colorTheme["silver-white"],
                  borderColor: colorTheme["princeton-orange"],
                  borderRadius: 16,
                }}
                children={() => <Text category="h2">Cancel</Text>}
              />
            </View>
          </View>
        </View>
      </Layout>
    </SafeAreaView>
  );
};

export const EditInfoScreen = ({ navigation, route }) => {
  // edit info screen
  // const med = route.params.medication; //not working
  // console.log(medication);
  const [directions, setDirections] = useState("");
  // function handleEditDirections(e) {
  //   setDirections(e.target.value);
  // }

  const [selectedIndex, setSelectedIndex] = useState(new IndexPath(0));
  const strengthOptions = ["2.5mg", "5mg", "10mg", "20mg", "30mg", "40mg"];
  const typeOptions = [
    "Pill",
    "Capsule",
    "Liquid",
    "Spray",
    "Drops",
    "Injection",
    "Cream",
  ];
  const refillsOptions = ["1", "2", "3", "4"];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header navigation={navigation} />
      <Layout style={{...styles.masterLayout, backgroundColor: colorTheme["generic-bg"]}}>
        <View style={{ flex: 1, justifyContent: "flex-start", width: "95%" }}>
          <Icon style={{ width: 40 }} name="edit"></Icon>
          <Text>Edit medication Info</Text>
          <Text>
            Lisinoprill
             {medication.name} 
          </Text>
          <View style={{ gap: 20, margin: 20 }}>
            <View>
              <Text category="p2">Directions for Use</Text>
              <textarea
                name="directions"
                style={{
                  border: `solid ${colorTheme["light-green"]} 3`,
                  borderRadius: 20,
                  padding: 16,
                }}
              ></textarea>
            </View>
            <View>
              <Text category="p2">Drug Strength</Text>
              <Select
                selectedIndex={selectedIndex}
                onSelect={(index) => setSelectedIndex(index)}
                value={strengthOptions[selectedIndex - 1]}
              >
                {strengthOptions.map((i, index) => (
                  <SelectItem key={index} title={i} />
                ))}
              </Select>
            </View>
            <View>
              <Text category="p2">Dosage Type</Text>
              <Select
                selectedIndex={selectedIndex}
                onSelect={(index) => setSelectedIndex(index)}
                value={typeOptions[selectedIndex - 1]}
              >
                {typeOptions.map((i, index) => (
                  <SelectItem key={index} title={i} />
                ))}
              </Select>
            </View>
            <View>
              <Text category="p2">Quantity Prescribed</Text>
              <View
                style={{ flexDirection: "row", alignItems: "flex-end", gap: 6 }}
              >
                <input
                  type="number"
                  style={{
                    border: `solid ${colorTheme["light-green"]} 3`,
                    borderRadius: 10,
                    padding: 8,
                  }}
                ></input>
                <Text>Tablets</Text>
              </View>
            </View>
            <View>
              <Text category="p2">Number of Refills</Text>
              <Select
                selectedIndex={selectedIndex}
                onSelect={(index) => setSelectedIndex(index)}
                value={refillsOptions[selectedIndex - 1]}
              >
                {refillsOptions.map((i, index) => (
                  <SelectItem key={index} title={i} />
                ))}
              </Select>
            </View>
          </View>
          <View style={{ gap: 6 }}>
            <Button
            onPress={() => navigation.goBack()}
              // onPress={() => navigation.navigate("Info", { medication: med })}
              size="giant"
              style={{ ...styles.orangerButton, borderRadius: 16 }}
              children={() => <Text category="h2">Confirm</Text>}
            />
            <Button
              onPress={() => navigation.navigate("Med Stack", {screen: "Scan"})}
              size="giant"
              style={{
                backgroundColor: colorTheme["silver-white"],
                borderColor: colorTheme["princeton-orange"],
                borderRadius: 16,
              }}
              children={() => <Text category="h2">Scan Med Again</Text>}
            />
          </View>
        </View>
      </Layout>
    </SafeAreaView>
  );
};

export const MedLibraryScreen = ({ navigation }) => {
  const colorTheme = theme[useContext(ThemeContext).theme];
  // main med library screen
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Layout
        style={{
          ...styles.masterLayout,
          flex: "none",
          backgroundColor: colorTheme["MedLibraryScreen-color"],
        }}
      >
        <View style={{...styles.rowContainer}}>
          <Text style={{ fontSize: 22, marginTop: 30, fontFamily: "Poppins-SemiBold"}}>
            Medication <Text style={{ fontSize: 22, color: colorTheme["persian-green"], fontFamily: "Poppins-SemiBold" }}>Library</Text>
          </Text>
        </View>
      </Layout>
      <View style={{flex: 8}}>
        <MedFolder navigation={navigation} />
      </View>
    </SafeAreaView>
  );
};
