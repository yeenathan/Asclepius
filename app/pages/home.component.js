import React, { useState, useEffect, useCallback, } from "react";
import { SafeAreaView, SectionList, TouchableOpacity } from "react-native";
import {
  Button,
  Icon,
  Layout,
  Text,
  Modal,
  ModalService,
  Input,
} from "@ui-kitten/components";
import { View, Image, ScrollView } from "react-native";
import { HorizontalCalendar } from "@/app/components/horizontalCalendar";
import { ModalContainer } from "@/app/components/modalContainer";
import { Scroll } from "@/app/components/scrollPicker";
import { useFocusEffect } from "@react-navigation/native";

import { styles } from "@/app/stylesheet";
import { default as colorTheme } from "@/custom-theme.json";

import AsyncStorage from "@react-native-async-storage/async-storage";
// ---------------------------------------------------- COMPONENTS ----------------------------------------------------
/**
 * look at MedList first
 * this is a react component created for react native's FlatList/SectionList to render
 * is a singular item in the list
 */
const MedCard = (props) => {
  const data = props.data;
  const [menuVisible, setMenuVisible] = useState(false);
  const toggleMenuVisible = () => {
    setMenuVisible(!menuVisible);
    setReschedule(false);
  };

  const [reschedule, setReschedule] = useState(false);

  async function handleTaken(data) {
    let newData = {...data, taken: true, timeTaken: formatTime()};
    await AsyncStorage.mergeItem(data.key, JSON.stringify(newData));
  }

  const defaultView = (
    <View style={{ flexDirection: "row", gap: 8, justifyContent: "center" }}>
      <Button style={{ flex: 3 }} size="small">
        Skip
      </Button>
      <Button style={{ flex: 8 }} size="medium" onPress={() => setReschedule(true)}>
        Reschedule
      </Button>
      <Button
        style={{ flex: 4 }}
        size="small"
        onPress={() => {
          handleTaken(data);
          toggleMenuVisible();
        }}
      >
        Take
      </Button>
    </View>
  );
  const formatTime = () => {
    const t = new Date(data.time);
    let minutes = t.getMinutes().toString().length < 2 ? `0${t.getMinutes()}` : t.getMinutes();
    return `${t.getHours()}:${minutes}`;
  } 
  return (
    <>
      <Modal
        visible={menuVisible}
        backdropStyle={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        onBackdropPress={toggleMenuVisible}
        pointerEvents="box-none"
        style={{width: "100%", height: "100%", justifyContent: "flex-end"}}
      >
        <View
          style={{
            backgroundColor: "#ffffff",
            justifyContent: "center",
            padding: 40,
            paddingTop: 48,
            borderTopLeftRadius: 80,
            borderTopRightRadius: 80,
          }}
        >
          <Text style={{ marginBottom: 32, paddingHorizontal: 32 }} category="h2">
            {data.name}
          </Text>
          {!reschedule ? defaultView : null}
        </View>
      </Modal>
      <TouchableOpacity onPress={!data.taken ? () => toggleMenuVisible() : null}>
        <View
          style={
            !data.taken
              ? {
                  ...styles.rowContainer,
                  padding: 16,
                  borderRadius: 32,
                  justifyContent: "center",
                  marginVertical: 24,
                  backgroundColor: colorTheme["light-blue"],
                }
              : {
                  ...styles.rowContainer,
                  padding: 16,
                  borderRadius: 32,
                  justifyContent: "center",
                  marginVertical: 8,
                  backgroundColor: colorTheme["light-blue-80"],
                }
          }
        >
          <View style={{ flex: 3, alignItems: "center" }}>
            {/* <Image source={data.icon} /> */}
            {/* {data.icon} */}
          </View>
          <View style={{ flex: 7, paddingVertical: 16 }}>
            <Text category="p1">{formatTime()}</Text>
            <Text category="h2">{data.name}</Text>
            <View style={{ alignItems: "flex-end" }}>
              {data.taken ? (
                <Text category="p1">Taken at {data.timeTaken}</Text>
              ) : (
                <Button
                  size="small"
                  onPress={() => handleTaken(data)}
                  style={{
                    ...styles.orangeButton,
                    borderRadius: 64,
                    marginTop: 8,
                    position: "absolute",
                  }}
                  children={() => (
                    <Text style={{ margin: "none", paddingHorizontal: 8 }} category="p2">
                      Mark as Taken
                    </Text>
                  )}
                />
              )}
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
};

/**
 * generates the list of medications. uses react native's SectionList (a variation of FlatList) that has section headers. useful cuz we have time values
 * but made the data so complex i got lost trying to change the taken status
 *
 * renderItem is a required property, and its value is the thing you want to render in the list
 *    - in this case, it's MedCard above
 * sections (SectionList) or data (FlatList) is required too, as its the data it requires to build the list. specific format is needed check the docs
 * theres a FlatList example in components/horizontalCalendar.js
 */
const MedList = ({ dayData }) => {
  return (
    <SectionList
      style={{ flex: 1, width: "100%" }}
      sections={dayData}
      renderItem={({ item }) => (
        <MedCard data={item} />
      )}
      renderSectionHeader={({ section: { title } }) => (
        <Text category="p2">{title}</Text>
      )}
      ListHeaderComponent={<Text style={{ fontSize: 20, fontWeight: "bold" }}>My Medications</Text>}
      ListFooterComponent={<View style={{ height: 20 }} />}
      contentContainerStyle={{ padding: 10 }}
    />
  );
};

/**
 * example of styling a button with more freedom. has to have children prop which takes a react component (stick to Views i think)
 */
const Important = (props) => (
  <Button
    onPress={props.toggleOverlayVisible}
    style={{ ...styles.orangeButton, width: "100%", marginVertical: 8 }}
    children={() => (
      <View style={{}}>
        <Text category="p2">1 serious drug interaction</Text>
      </View>
    )}
  ></Button>
);
// ---------------------------------------------------- COMPONENTS ----------------------------------------------------

/**
 * main page component
 */
export const HomeScreen = ({ route, navigation }) => {
  const [addedMedModalVisible, setAddedMedModalVisible] = useState(route.params.justAdded);
  const [onboarding, setOnboarding] = useState(route.params.onboarding);
  const [data, setData] = useState(null);

  const [dayData, setDayData] = useState([]);
  const [day, setDay] = useState(1);

  useEffect(() => {
    // fetchData()
    if (onboarding) navigation.navigate("Med Stack", { screen: "Onboarding" });
  }, []);

  const init = async () => {
    const _day = await loadDay() || 1;
    const _data = await fetchData();
    handleSetDay(Number(_day), _data);
  }
  
  useFocusEffect(
    useCallback(() => {
      const init = async () => {
        const _day = await loadDay() || 1;
        const _data = await fetchData();
        handleSetDay(Number(_day), _data);
      }
      init();
    }, [])
  )

  async function fetchData() {
    try {
      const keys = JSON.parse(await AsyncStorage.getItem("KEYS"));
      
      let meds = []
      if (keys) {
        for (let key of keys) {
          let med = JSON.parse(await AsyncStorage.getItem(key)) ;
          meds.push(med);
        }
      }
      return meds;
    }
    catch (e) {
      console.log("error", e.message);
    }
  }
  const loadDay = async () => {
    try {
      const day = await AsyncStorage.getItem("Day");
      if (day) {
        setDay(JSON.parse(day));
        return day;
      }
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    saveDay();
    init();
  }, [day])
  
  const saveDay = async () => {
      try {
        await AsyncStorage.setItem("Day", JSON.stringify(day));
      } catch (e) {
        console.log(e);
      }
    }

  const [overlayVisible, setOverlayVisible] = useState(false);
  const toggleOverlayVisible = () => {
    setOverlayVisible(!overlayVisible);
  };

  const handleSetDay = (day, data=null) => {
    setDay(day);
    setDayData(() => {
      if (data) {
        return data.filter((med) => { // array [med1, med2]
          const date = new Date(med.date);
          if (date.getDay() === day) {
            return med;
          };
        })
      } else return [];
    });
  };

  function format(data) {
    const groupedData = data.reduce((sections, item) => {
      const time = new Date(item.time);
      const hour = `${time.getHours()}:00`;
      if (!sections[hour]) {
        sections[hour] = [];
      }
      sections[hour].push(item);
      return sections;
    }, {});

    const sections = Object.keys(groupedData).map((time) => {
      return (
        {
          title: time,
          data: groupedData[time]
        }
      )
    })
    return sections;
  }

  return (
    <>
      <Modal
        visible={addedMedModalVisible}
        backdropStyle={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        onBackdropPress={() => setAddedMedModalVisible(false)}
      >
        <View
          style={{
            backgroundColor: "#ffffff",
            justifyContent: "center",
            padding: 40,
            paddingTop: 48,
            width: "100vw",
            position: "fixed",
            bottom: "0",
            left: "0",
            borderTopLeftRadius: 80,
            borderTopRightRadius: 80,
          }}
        >
          <Text style={{ marginBottom: 32, paddingHorizontal: 32 }} category="h2">
            {route.params.medication}
          </Text>
        </View>
      </Modal>
      <SafeAreaView style={{ flex: 1 }}>
        <Layout style={styles.masterLayout}>
          <Modal
            visible={overlayVisible}
            backdropStyle={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
            onBackdropPress={toggleOverlayVisible}
          >
            <ModalContainer
              title="1 serious drug interaction"
              body={
                <>
                  <View style={{ alignItems: "center", marginVertical: 32 }}>
                    <Text category="p2">Medication 1</Text>
                    <Text category="p2">Medication 2</Text>
                    <Text style={{ marginVertical: 16 }} category="p1">
                      has a drug interaction with
                    </Text>
                    <Text style={{ marginVertical: 16 }} category="p1">
                      Consult your doctor or pharmacist.
                    </Text>
                  </View>
                </>
              }
              toggleOverlayVisible={toggleOverlayVisible}
            />
          </Modal>

          <View style={styles.rowContainer}>
            <Text onPress={() => AsyncStorage.clear()} category="h2" style={{ color: colorTheme["persian-green"] }}>
              Good morning, Nathan.
            </Text>
            <Icon style={{ width: 40 }} name="settings-2-outline"></Icon>
          </View>

          <View style={{ width: "100%" }}>
            <HorizontalCalendar handleSetDay={handleSetDay} currentDay={day} />
          </View>

          <Text category="h1" style={{ justifyContent: "flex-start", width: "100%" }}>
            Today's Meds
          </Text>

          {dayData.length > 0 ? (
            <>
              <Important toggleOverlayVisible={toggleOverlayVisible} />
              <MedList dayData={format(dayData)} />
            </>
          ) : (
            <View style={{ ...styles.container, flex: 1, justifyContent: "center", gap: 32 }}>
              <View
                style={{
                  alignItems: "center",
                  backgroundColor: "#ffffff",
                  borderRadius: 16,
                  padding: 48,
                }}
              >
                <Text category="p1">Input your medication to view schedule</Text>
              </View>
              <Button
                size="giant"
                style={{ ...styles.orangeButton, borderRadius: 16 }}
                onPress={() => navigation.navigate("Med Stack", { screen: "Add Med" })}
                children={() => <Text category="h2">Add Medication</Text>}
              />
            </View>
          )}
        </Layout>
      </SafeAreaView>
    </>
  );
};

// onboarding
export const Onboarding = ({ navigation }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [userName, setUserName] = useState("");
  const onNameSubmit = (name) => setUserName(name);

  const onboardingPages = [
    {
      id: 0,
      render: () => {
        return (
          <Layout
            style={{
              flex: 1,
              width: "100%",
              alignItems: "center",
              justifyContent: "space-between",
              paddingVertical: 40,
            }}
          >
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
              <Image
                source={require("@/assets/graphics/Logo.svg")}
                style={{ width: 300, marginBottom: 20 }}
                resizeMode="contain"
              />
              <Text category="h1" style={{ fontSize: 32, fontWeight: "bold", color: colorTheme["light-green"]}}></Text>
              <Text category="p" style={{ fontSize: 8, fontWeight: "bold", color: colorTheme["light-green"] }}>
                from Asclepius
              </Text>
            </View>
            <Button
              size="giant"
              onPress={() => setCurrentPage(1)}
              style={{
                width: "100%",
                borderRadius: 16,
                marginTop: 20,
                backgroundColor: colorTheme["light-green"],
                borderColor: colorTheme["light-green"],
              }}
            >
              {() => <Text category="h2">Next</Text>}
            </Button>
          </Layout>
        );
      },
    },
    {
      id: 1,
      render: () => (
        <Layout
          style={{
            flex: 1,
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between",
            paddingVertical: 40,
          }}
        >
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center", paddingHorizontal: 20 }}>
            <Image
              source={require("@/assets/graphics/onboarding1.svg")}
              style={{ width: 300, marginBottom: 20 }}
              resizeMode="contain"
            />
            <Text category="h1" style={{ fontSize: 28, marginBottom: 15, textAlign: "center", color: "#00A39B" }}>
              Welcome to Remedify
            </Text>
            <Text
              category="p1"
              style={{ fontSize: 16, textAlign: "center", color: "#666", paddingHorizontal: 20 }}
            >
              Easily manage your medications with reminders, refill alerts, and support from family or caregivers.
            </Text>
          </View>
          <Button
            size="giant"
            onPress={() => setCurrentPage(2)}
            style={{
              width: "100%",
              borderRadius: 16,
              marginTop: 20,
              backgroundColor: colorTheme["light-green"],
              borderColor: colorTheme["light-green"],
            }}
          >
            {() => <Text category="h2">Next</Text>}
          </Button>
        </Layout>
      ),
    },
    {
      id: 2,
      render: () => (
        <Layout
          style={{
            flex: 1,
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between",
            paddingVertical: 40,
          }}
        >
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center", width: "100%", paddingHorizontal: 20 }}>
            <Image
              source={require("@/assets/graphics/onboarding2.svg")}
              style={{ width: 250, marginBottom: 20 }}
              resizeMode="contain"
            />
            <Text category="h1" style={{ fontSize: 16, marginBottom: 30, textAlign: "center", color: "#00A39B" }}>
              Introduce yourself!
            </Text>
            <Input
              placeholder="Enter your name"
              value={userName}
              onChangeText={setUserName}
              size="large"
              style={{
                width: "100%",
                marginBottom: 15,
                borderRadius: 20,
                borderColor: colorTheme["light-green"],
                borderWidth: 3,
              }}
            />
          </View>
          <Button
            size="giant"
            onPress={() => setCurrentPage(3)}
            style={{
              width: "100%",
              borderRadius: 16,
              marginTop: 20,
              backgroundColor: colorTheme["light-green"],
              borderColor: colorTheme["light-green"],
            }}
            disabled={!userName.trim()}
          >
            {() => <Text category="h2">Confirm</Text>}
          </Button>
        </Layout>
      ),
    },
    {
      id: 3,
      render: () => (
        <Layout
          style={{
            flex: 1,
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between",
            paddingVertical: 40,
          }}
        >
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center", paddingHorizontal: 20 }}>
            <Image
              source={require("@/assets/graphics/onboarding3.svg")}
              style={{ width: 250, marginBottom: 20 }}
              resizeMode="contain"
            />
            <Text category="h1" style={{ fontSize: 16, marginBottom: 15, textAlign: "center", color: "#00A39B" }}>
              Welcome, {userName}!{"\n"}
              Your health, our priority
            </Text>
            <Text
              category="p1"
              style={{ fontSize: 16, textAlign: "center", color: "#666", paddingHorizontal: 20 }}
            >
              Stay on track with personalized medication support and timely reminders.
            </Text>
          </View>
          <Button
            size="giant"
            onPress={() => {
              onNameSubmit(userName);
              navigation.navigate("Home Stack", { screen: "Home" });
            }}
            style={{
              width: "100%",
              borderRadius: 16,
              marginTop: 20,
              backgroundColor: colorTheme["light-green"],
              borderColor: colorTheme["light-green"],
            }}
          >
            {() => <Text category="h2">Get Started</Text>}
          </Button>
        </Layout>
      ),
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Layout
        style={{
          flex: 1,
          justifyContent: "space-between",
          alignItems: "center",
          padding: 20,
        }}
      >
        {onboardingPages[currentPage].render()}
      </Layout>
    </SafeAreaView>
  );
};