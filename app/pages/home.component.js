import React, { useState, useEffect, useCallback, useContext } from "react";
import { Pressable, SafeAreaView, SectionList } from "react-native";
import {
  Button,
  Icon,
  Layout,
  Text,
  Modal,
  Input,
  CheckBox,
} from "@ui-kitten/components";
import { View, Image, ScrollView } from "react-native";
import { HorizontalCalendar } from "@/app/components/horizontalCalendar";
import { MedReminder } from "@/app/components/medReminder"
import { useFocusEffect } from "@react-navigation/native";

import { styles } from "@/app/stylesheet";
import DateTimePicker from '@react-native-community/datetimepicker';

import AsyncStorage from "@react-native-async-storage/async-storage";
import { ThemeContext } from "../theme-context";
import { default as theme } from "@/custom-theme.json";
// ---------------------------------------------------- COMPONENTS ----------------------------------------------------
/**
 * look at MedList first
 * this is a react component created for react native's FlatList/SectionList to render
 * is a singular item in the list
 */
const MedCard = ({med, handleTaken, init, currentDay, colorTheme}) => {
  const data = med;
  const [menuVisible, setMenuVisible] = useState(false);
  const toggleMenuVisible = () => {
    setMenuVisible(!menuVisible);
    setReschedule(false);
  };
  const [reschedule, setReschedule] = useState(false);

  function getIndex() {
    let _index;
    const _currentDay = new Date(currentDay).getDate();
    data.dates.forEach((date, index) => {
      const _day = new Date(date.date).getDate();
      if (_day === _currentDay) {
        _index = index;
      }
    })
    return _index;
  }

  function isTaken() {
    let _taken;
    const _currentDay = new Date(currentDay).getDate();
    data.dates.forEach((date, index) => {
      const _day = new Date(date.date).getDate();
      if (_day === _currentDay) {
        _taken = date.taken;
      }
    })
    return _taken;
  }

  // scuffed code because android and ios have different requirements for this datepicker
  const [time, setTime] = useState(new Date());
  async function handlePickTime(e, selected) {
    // if (e.type === "set") setReschedule(false);
    setTime(selected);
    let newData = {...data, time: selected}
    await AsyncStorage.mergeItem(data.key, JSON.stringify(newData));
    init();
  }

  const formatTime = (time=null) => {
    let t;
    if (time) t = new Date(time);
    else t = new Date();
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
            backgroundColor: colorTheme["modal-bg"],
            justifyContent: "center",
            padding: 40,
            paddingTop: 48,
            borderTopLeftRadius: 80,
            borderTopRightRadius: 80,
          }}
        >
          <View style={{ marginBottom: 32, width: "100%", flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: 16}}>
            <Image source={data.icon} style={{width: 48, height: 48}} resizeMode="contain"/>
            <Text category="h2" style={{maxWidth: "85%"}}>{data.nickname} ({data.name})</Text>
          </View>
          <Text category="p2" style={{marginBottom: 16}}>Active Ingredient: {data.ingredient}</Text>
          <Text style={{marginBottom: 32}} category="p1">{data.description}</Text>
          <View style={{alignItems: "flex-end", gap: 8, width: "100%"}}>
            <View style={{ flexDirection: "row", gap: 8, justifyContent: "center", width: "100%"}}>
              <Button style={{ flex: 1 }} appearance="outline" size="medium" disabled={isTaken()}>
                Skip
              </Button>
              <Button style={{ flex: 1 }} status="primary" size="medium" disabled={isTaken()} onPress={() => setReschedule(true)}>
                Reschedule
              </Button>
            </View>
            {reschedule && <DateTimePicker mode="time" value={time} onChange={handlePickTime}/>}
          </View>
        </View>
      </Modal>
      <Pressable onPress={() => {toggleMenuVisible()}}>
        <View
          style={
            !isTaken()
              ? {
                  ...styles.rowContainer,
                  padding: 18,
                  borderRadius: 8,
                  justifyContent: "center",
                  marginTop: 12,
                  marginBottom: 24,
                  backgroundColor: colorTheme["home-page-yellow"],
                }
              : {
                  ...styles.rowContainer,
                  padding: 16,
                  borderRadius: 8,
                  justifyContent: "center",
                  marginVertical: 12,
                  backgroundColor: colorTheme["home-page-yellow"],
                  opacity: 0.5,
                }
          }
        >
          <View style={{ backgroundColor: colorTheme["hunyadi-yellow"], width: 20, height: "100%", position: "absolute", left: 0, top: 0, borderBottomLeftRadius: 8, borderTopLeftRadius: 8 }}></View>
          <View style={{ flex: 3, alignItems: "center" }}>
            <Image source={data.icon} style={{width: 50, height: 50}} alt="No image" resizeMode="contain"/>
          </View>
          <View style={{ flex: 6 }}>
            <Text category="p1" style={{color: colorTheme["card-text"], fontFamily: "PublicSans-SemiBold"}}>{`${data.nickname || data.name} ${data.strength || ""}`}</Text>
            {/* <Text category="c1" style={{color: colorTheme["card-gray"]}}>{isTaken()?`Taken at ${formatTime(data.dates[getIndex()].timeTaken)}`:formatTime(data.time)}</Text> */}
            <View style={{flexDirection: "row", gap: 4, alignItems: "center"}}>
              <Icon fill={colorTheme["card-gray"]} name={"clock-outline"} style={{width: 16, height: 16}}/>
              <Text category="c1" style={{color: colorTheme["card-gray"]}}>{formatTime(data.time)}</Text>
            </View>
            {isTaken() && <Text category="c1" style={{color: colorTheme["card-gray"]}}>Taken at {formatTime(data.dates[getIndex()].timeTaken)}</Text>}
          </View>
          <View style={{flex: 1}}>
            <CheckBox onChange={() => handleTaken(data)} disabled={isTaken()} checked={isTaken()}/>
          </View>
        </View>
      </Pressable>
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
const MedList = ({ dayData, init, currentDay, handleTaken, colorTheme }) => {
  return (
    <View style={{flex: 1, width: "100%", backgroundColor: colorTheme["med-list-bg"], borderTopLeftRadius: 8, borderTopRightRadius: 8, boxShadow: "3px 3px 10px 1px rgba(86, 163, 166, 0.15)"}}>
      {
        dayData.length>0? <SectionList
          style={{ flex: 1, width: "100%", padding: 8, paddingBottom: 0}}
          sections={dayData}
          renderItem={({ item }) => (
            <MedCard med={item} init={init} currentDay={currentDay} handleTaken={handleTaken} colorTheme={colorTheme}/>
          )}
          renderSectionHeader={({ section: { title } }) => (
            <Text category="p2" style={{ fontFamily:"Poppins-Regular", color: colorTheme["text-gray"]}}>{title}</Text>
          )}
          contentContainerStyle={{ padding: 10 }}
        />
        :
        <View style={{flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Text category="h2" style={{color: colorTheme["text-gray"]}}>No medication details for this day.</Text>
        </View>
      }
    </View>
  );
};

// ---------------------------------------------------- COMPONENTS ----------------------------------------------------

/**
 * main page component
 */
export const HomeScreen = ({ route, navigation }) => {
  const colorTheme = theme[useContext(ThemeContext).theme];
  const [dayData, setDayData] = useState([]);
  const [day, setDay] = useState(new Date());
  const [data, setData] = useState(null);
  const [userName, setUserName] = useState("");

  const _drug = route.params.drug;
  const _justAdded = route.params.justAdded;
  const [addedDrug, setAddedDrug] = useState({});
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (_justAdded) {
      setAddedDrug(_drug);
      setShowModal(_justAdded);
    }
  }, [route.params])

  useEffect(() => {
    async function getOnboarding() {
      return JSON.parse(await AsyncStorage.getItem("OnboardingFinished"));
    }
    async function handleOnboarding() {
      const _onboardingFinished = await getOnboarding();
      if (!_onboardingFinished) navigation.navigate("Med Stack", { screen: "Onboarding" });
      setUserName(JSON.parse(await AsyncStorage.getItem("Username")));
    }
    handleOnboarding();
  }, []);

  const init = async () => {
    const _day = JSON.parse(await loadDay());
    const _data = await fetchData();
    handleSetDay(_day, _data);
  }
  
  useFocusEffect(
    useCallback(() => {
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
      const loadDay = await AsyncStorage.getItem("Day") || JSON.stringify(new Date());
      if (loadDay) {
        return loadDay;
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
        await AsyncStorage.setItem("Day", JSON.stringify(day || new Date()));
      } catch (e) {
        console.log(e);
      }
    }

  function getDayData(day, data=null) {
    const _day = new Date(day);
    if (data) {
      return data.filter((med) => { // array [med1, med2]
        if (med === null) return;
        for (const date of med.dates) {
          if (new Date(date.date).getDate() === _day.getDate()) {
            return med;
          }
        }
      }).sort((a, b) => {
        return new Date(a.time).getTime() > new Date(b.time).getTime();
      })
    } else return [];
  }

  const handleSetDay = (day, data=null) => {
    setData(data);
    setDayData(getDayData(day, data));
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

  async function handleTaken(data, targetDay=day) {
    let newData = {
      ...data,
      dates: data.dates.map((date) => {
        const _medDay = new Date(date.date).getDate();
        const _currentDay = new Date(targetDay).getDate();
        if (_medDay === _currentDay) {
          return {...date, taken: true, timeTaken: new Date()};
        }
        return date;
      })
    };
    await AsyncStorage.setItem(data.DIN, JSON.stringify(newData));
    init();
  }

  function handleCloseModal() {
    setShowModal(false);
    setAddedDrug(null);
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {addedDrug && <Modal
        visible={showModal}
        backdropStyle={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        onBackdropPress={handleCloseModal}
      >
        <View style={{backgroundColor: colorTheme["modal-bg"], padding: 32, borderRadius: 20, gap: 16}}>
          <Text category="p1">{addedDrug.name} has been added to your schedule.</Text>
          <Button size="medium" onPress={() => {
            setDay(new Date(addedDrug.dates[0].date));
            handleCloseModal()
          }}>Go Now</Button>
        </View>
      </Modal> }
      <Layout style={{...styles.masterLayout, backgroundColor: colorTheme["generic-bg"]}}>
        <View style={{...styles.rowContainer, marginTop: 35}}>
          <Text onPress={() => {AsyncStorage.clear(); init()}} category="h2" style={{ fontSize: 22, color: colorTheme["good-morning"], fontFamily:"Poppins-SemiBold" }}>
            Hello, <Text style={{ fontSize: 22, color: colorTheme["persian-green"], fontFamily:"Poppins-SemiBold" }}>{userName}</Text>
          </Text>
          <Pressable onPress={() => navigation.navigate("Med Stack", {screen: "Settings"})} >
            <Icon style={{ width: 40}} fill={colorTheme["icon-color"]} name="settings-2-outline"></Icon>
          </Pressable>
        </View>
        <View style={{ width: "100%" }}>
          <HorizontalCalendar setDay={setDay} currentDay={day} />
        </View>
        <View style={{ ...styles.container, flex: 1, justifyContent: "flex-start", alignItems: "flex-start", gap: 8, marginTop: 16 }}>
          <Text category="h2" style={{color: colorTheme["home-header"], fontFamily:"PublicSans-Semibold" }}>Next Medication</Text>
          <View style={{ marginBottom: 13, width: "100%"}}>
            <MedReminder navigation={navigation} data={data} currentDay={new Date()} getDayData={getDayData} handleTaken={handleTaken} userName={userName}/>
          </View>
          <Text category="h2" style={{color: colorTheme["home-header"], marginTop: 8, fontFamily:"PublicSans-Semibold" }}>Overview</Text>
          <MedList dayData={format(dayData)} init={init} currentDay={day} handleTaken={handleTaken} colorTheme={colorTheme}/>
        </View>
      </Layout>
    </SafeAreaView>
  );
};

// onboarding
export const Onboarding = ({ navigation }) => {
  const colorTheme = theme[useContext(ThemeContext).theme];
  const [currentPage, setCurrentPage] = useState(0);
  const [userName, setUserName] = useState("");

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
              <Text category="h1" style={{ fontSize: 32, fontWeight: "bold", color: colorTheme["green"]}}></Text>
              <Text category="p" style={{ fontSize: 16, fontWeight: "bold", color: colorTheme["green"] }}>
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
                backgroundColor: colorTheme["green"],
                borderColor: colorTheme["green"],
              }}
            >
              {() => <Text category="h2" style={{ color: colorTheme["white"]}}>Next</Text>}
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
              source={require("@/assets/graphics/welcomeGraphic.png")}
              style={{ width: 300, height: 250}}
              resizeMode="contain"
            />
            <Text category="h1" style={{ fontSize: 28, textAlign: "center", color: "#00A39B", fontFamily: "Poppins-SemiBold", width: "100%"}}>
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
              backgroundColor: colorTheme["green"],
              borderColor: colorTheme["green"],
            }}
          >
            {() => <Text category="h2" style={{ color: colorTheme["white"]}} >Next</Text>}
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
              source={require("@/assets/graphics/nameGraphic.png")}
              style={{ width: 300, height: 250}}
              resizeMode="contain"
            />
            <Text category="h1" style={{ fontSize: 28, textAlign: "center", color: "#00A39B", fontFamily: "Poppins-SemiBold" }}>
              Introduce yourself!
            </Text>
            <Input
              placeholder="Enter your name..."
              value={userName}
              onChangeText={setUserName}
              size="large"
              style={{
                width: "100%",
                marginBottom: 15,
                borderRadius: 10,
                borderColor: colorTheme["input-gray"],
                borderWidth: 1,
                shadowColor: '#ECEAF0',
                shadowOffset: {width: 5, height: 5},
                shadowRadius: 7,
                paddingVertical: 17,
                paddingHorizontal: 8,
              }}
              textStyle={{ fontFamily: "PublicSans-Regular" }}
            />
          </View>
          <Button
            size="giant"
            onPress={() => setCurrentPage(3)}
            style={{
              width: "100%",
              borderRadius: 16,
              marginTop: 20,
              backgroundColor: colorTheme["green"],
              borderColor: colorTheme["green"],
            }}
            disabled={!userName.trim()}
          >
            {() => <Text category="h2" style={{ color: colorTheme["white"]}}>Confirm</Text>}
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
              source={require("@/assets/graphics/getStartGraphic.png")}
              style={{ width: 300, height: 250}}
              resizeMode="contain"
            />
            <Text category="h1" style={{ fontSize: 28, textAlign: "center", color: "#00A39B", fontFamily: "Poppins-SemiBold", width: "100%" }}>
              {/* Welcome, {userName}!{"\n"} */}
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
            onPress={async () => {
              await AsyncStorage.setItem("Username", JSON.stringify(userName));
              await AsyncStorage.setItem("OnboardingFinished", JSON.stringify(true));
              navigation.navigate("Home Stack", { screen: "Home" });
            }}
            style={{
              width: "100%",
              borderRadius: 16,
              marginTop: 20,
              backgroundColor: colorTheme["green"],
              borderColor: colorTheme["green"],
            }}
          >
            {() => <Text category="h2" style={{ color: colorTheme["white" ]}}>Get Started</Text>}
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