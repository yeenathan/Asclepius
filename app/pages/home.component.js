import React, { useState, useEffect } from "react";
import { SafeAreaView, SectionList, TouchableOpacity } from "react-native";
import {
  Button,
  Icon,
  Layout,
  Text,
  Modal,
  ModalService,
  Input
} from "@ui-kitten/components";
import { View, Image, ScrollView } from "react-native";
import { HorizontalCalendar } from "@/app/components/horizontalCalendar";
import { ModalContainer } from "@/app/components/modalContainer";
import { Scroll } from "@/app/components/scrollPicker";

import { styles } from "@/app/stylesheet";
import { default as colorTheme } from "@/custom-theme.json";

import { MED_DATA } from "@/app/data/medData";


// ---------------------------------------------------- COMPONENTS ----------------------------------------------------
/**
 * look at MedList first
 * this is a react component created for react native's FlatList/SectionList to render
 * is a singular item in the list
 */
const MedCard = (props) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const toggleMenuVisible = () => {
    setMenuVisible(!menuVisible);
    setReschedule(false);
  };

  const [reschedule, setReschedule] = useState(false);

  const defaultView = (
    <View
      style={{ flexDirection: "row", gap: "1rem", justifyContent: "center" }}
    >
      <Button style={{flex: 3}} size="giant">Skip</Button>
      <Button style={{flex: 7}} size="giant" onPress={() => setReschedule(true)}>
        Reschedule
      </Button>
      <Button
        style={{flex: 4}}
        size="giant"
        onPress={() => {
          props.handleTaken(data.id);
          toggleMenuVisible();
        }}
      >
        Take
      </Button>
    </View>
  );

  // const rescheduleView = (
  //   <Scroll />
  // )

  const data = props.data;

  return (
    <>
      <Modal
        visible={menuVisible}
        backdropStyle={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        onBackdropPress={toggleMenuVisible}
      >
        <View
          style={{
            backgroundColor: "#ffffff",
            justifyContent: "center",
            padding: "2.5rem",
            paddingTop: "3rem",
            width: "100vw",
            position: "fixed",
            bottom: "0",
            left: "0",
            borderTopLeftRadius: "5rem",
            borderTopRightRadius: "5rem",
          }}
        >
          <Text
            style={{ marginBottom: "2rem", paddingHorizontal: "2rem" }}
            category="h2"
          >
            {data.name}
          </Text>
          {!reschedule ? defaultView : null}
        </View>
      </Modal>
      <TouchableOpacity
        onPress={!data.taken ? () => toggleMenuVisible() : null}
      >
        <View
          style={
            !data.taken
              ? {
                  ...styles.rowContainer,
                  padding: "1rem",
                  borderRadius: "2rem",
                  justifyContent: "center",
                  marginVertical: "1.5rem",
                  backgroundColor: colorTheme["light-blue"],
                }
              : {
                  ...styles.rowContainer,
                  padding: "1rem",
                  borderRadius: "2rem",
                  justifyContent: "center",
                  marginVertical: "1.5rem",
                  backgroundColor: colorTheme["light-blue-80"],
                }
          }
        >
          <View style={{ flex: 3, alignItems: "center" }}>
            <Image source={data.icon} />
          </View>
          <View style={{ flex: 7 }}>
            <Text category="p1">{data.time}</Text>
            <Text category="h2">{data.name}</Text>
            <View style={{ alignItems: "flex-end" }}>
              {data.taken ? (
                <Text category="p1">Taken at {data.timeTaken}</Text>
              ) : (
                <Button
                  size="small"
                  onPress={() => props.handleTaken(data.id)}
                  style={{
                    ...styles.orangeButton,
                    borderRadius: "4rem",
                    marginTop: ".5rem",
                    position: "absolute"
                  }}
                  children={() => (
                    <Text
                      style={{ margin: "none", paddingHorizontal: ".5rem" }}
                      category="p2"
                    >
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
const MedList = ({ dayData, handleTaken }) => {
  return (
    <SectionList style={{ flex: 1, width: '100%' }}
      sections={dayData}
      renderItem={({ item }) => (
        <MedCard handleTaken={handleTaken} data={item} />
      )}
      keyExtractor={(item) => item.id}
      renderSectionHeader={({ section: { hour } }) => (
        <Text category="p2">{hour}</Text>
      )}
      // Optional: Add a header or footer if needed
      ListHeaderComponent={<Text style={{ fontSize: 20, fontWeight: 'bold' }}>My Medications</Text>}
      ListFooterComponent={<View style={{ height: 20 }} />} // Example footer; adjust as necessary
      contentContainerStyle={{ padding: 10 }} // Add padding to the content
    />
  );
};

/**
 * example of styling a button with more freedom. has to have children prop which takes a react component (stick to Views i think)
 */
const Important = (props) => (
  <Button
    onPress={props.toggleOverlayVisible}
    style={{ ...styles.orangeButton, width: "100%", marginVertical: ".5rem" }}
    children={() => (
      <View style={{ ...styles.overlay }}>
        <Text category="p2">1 serious drug interaction</Text>
      </View>
    )}
  ></Button>
);
// ---------------------------------------------------- COMPONENTS ----------------------------------------------------

function getTime() {
  const time = new Date().toLocaleTimeString();
  return time.slice(0, -8).concat(" ".concat(time.slice(-4).toUpperCase()));
}

/**
 * main page component
 */
export const HomeScreen = ({ route, navigation }) => {
  const [addedMedModalVisible, setAddedMedModalVisible] = useState(route.params.justAdded);
  const [onboarding, setOnboarding] = useState(route.params.onboarding);

  useEffect(() => {
    console.log(onboarding);
    if (onboarding) navigation.navigate("Med Stack", {screen: "Onboarding"});
  },[])

  // determines whether or not the modal is visible. if you need to implement a modal just copy this and the modal below (not including ModalContainer) and it should work
  const [overlayVisible, setOverlayVisible] = useState(false);
  const toggleOverlayVisible = () => {
    setOverlayVisible(!overlayVisible);
  };

  // (extra) need these states to determine the data/meds shown. extra
  const [dayData, setDayData] = useState({ data: [] });
  const [day, setDay] = useState("Mon");

  const [dataFilled, setDataFilled] = useState(false); // just for faking purposes
  const handleDataFilled = () => {
    setDataFilled(true); // for faking empty schedule
    setDayData(MED_DATA[day]); // only need this
  };

  /** this is kinda extra dw about it
   * handler for the HorizontalCalendar to set the correct data for the selected day
   */
  const handleSetDay = (day) => {
    setDay(day);
    if (dataFilled) {
      setDayData(MED_DATA[day]);
    }
  };

  const handleTaken = (id) => {
    setDayData((previous) =>
      previous.map((category) => ({
        ...category,
        data: category.data.map((med) =>
          med.id === id ? { ...med, taken: true, timeTaken: getTime() } : med
        ),
      }))
    );
  };

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
          padding: "2.5rem",
          paddingTop: "3rem",
          width: "100vw",
          position: "fixed",
          bottom: "0",
          left: "0",
          borderTopLeftRadius: "5rem",
          borderTopRightRadius: "5rem",
        }}
      >
        <Text
          style={{ marginBottom: "2rem", paddingHorizontal: "2rem" }}
          category="h2"
        >
          {route.params.medication}
        </Text>
      </View>
    </Modal>
    <SafeAreaView style={{ flex: 1 }}>
      <Layout style={styles.masterLayout}>
        {/* modal component from UI kitten. it's a popup/overlay thing */}
        <Modal
          visible={overlayVisible}
          backdropStyle={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          onBackdropPress={toggleOverlayVisible}
        >
          <ModalContainer // custom component in components/modalContainer.js the white box itself
            title="1 serious drug interaction"
            body="THERE IS SOMETHING WRONG!!!"
            toggleOverlayVisible={toggleOverlayVisible}
          />
        </Modal>

        <View style={styles.rowContainer}>
          <Text category="h2" style={{ color: colorTheme["persian-green"] }}>
            Good morning, Nathan.
          </Text>
          <Icon style={{ width: "40px" }} name="settings-2-outline"></Icon>
        </View>

        {/* width is set to 100 so it stretches the entire parent container (is Layout) */}
        <View style={{ width: "100%" }}>
          {/* component in components folder. honestly dont know why it's external u guys can do whatever youre comfortable with. more info in that file */}
          {/* it's basically just a FlatList */}
          <HorizontalCalendar handleSetDay={handleSetDay} currentDay={day} />
        </View>

        <Text
          category="h1"
          style={{ justifyContent: "flex-start", width: "100%" }}
        >
          Today's Meds
        </Text>

        {
          // condition to check if theres any meds in the data array. not that important for core interface
          // if there is data, render the below (until the :)
          dayData.length > 0 ? ( // if unfamiliar with this syntax look up ternary operator but also it doesnt really matter at this stage
            <>
              {/* custom component for the alert box thing created above*/}
              <Important toggleOverlayVisible={toggleOverlayVisible} />

              {/* custom component for the list of medications created above */}
              <MedList dayData={dayData} handleTaken={handleTaken} />
            </>
          ) : (
            // else (no data), render this
            <View
              style={{
                ...styles.container,
                flex: 1,
                justifyContent: "center",
                gap: "2rem",
              }}
            >
              <View
                style={{
                  alignItems: "center",
                  backgroundColor: "#ffffff",
                  borderRadius: "1rem",
                  padding: "3rem",
                }}
              >
                <Text category="p1">
                  Input your medication to view schedule
                </Text>
              </View>
              <Button
                size="giant"
                style={{ ...styles.orangeButton, borderRadius: "1rem" }}
                onPress={handleDataFilled}
                children={() => <Text category="h2">Add Medication</Text>}
              />
            </View>
          )
        }
      </Layout>
    </SafeAreaView>
    </>
  );
};

// onboarding
export const Onboarding = ({ navigation }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [userName, setUserName] = useState('');
  const onNameSubmit = (name) => setUserName(name); 

  const onboardingPages = [
    // Logo Page
    {
      id: 0,
      render: () => {

        return (
          <Layout style={{
            flex: 1,
            width: '100%',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingVertical: '2.5rem',
          }}>
            <View style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <Image
                source={require("@/assets/graphics/Logo.svg")}
                style={{
                  width: '300px',
                  marginBottom: '1.25rem'
                }}
                resizeMode="contain"
              />
              <Text category="h1" style={{
                fontSize: '2rem',
                fontWeight: 'bold',
                color: colorTheme['light-green']
              }}>
              </Text>
              <Text category="p" style={{
                fontSize: '0.5rem',
                fontWeight: 'bold',
                color: colorTheme['light-green']
              }}>
                from Asclepius
              </Text>
            </View>
            <Button
            size="giant"
            onPress={() => setCurrentPage(1)}
            style={{
              width: '100%',
              borderRadius: '1rem',
              marginTop: '1.25rem',
              backgroundColor: colorTheme['light-green'],
              borderColor: colorTheme['light-green'],
            }}
            >
            {() => <Text category="h2">Next</Text>}
            </Button>
          </Layout>
        );
      },
    },
    // App Intro Page
    {
      id: 1,
      render: () => (
        <Layout style={{
          flex: 1,
          width: '100%',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingVertical: '2.5rem',
        }}>
          <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: '1.25rem'
          }}>
            <Image
              source={require("@/assets/graphics/onboarding1.svg")}
              style={{
                width: '300px',
                marginBottom: '1.25rem'
              }}
              resizeMode="contain"
            />
            <Text category="h1" style={{
              fontSize: '1.75rem',
              marginBottom: '0.9375rem',
              textAlign: 'center',
              color: '#00A39B'
            }}>
              Welcome to Remedify
            </Text>
            <Text category="p1" style={{
              fontSize: '1rem',
              textAlign: 'center',
              color: '#666',
              paddingHorizontal: '1.25rem'
            }}>
              Easily manage your medications with 
              reminders, refill alerts, and support from 
              family or caregivers.
            </Text>
          </View>
          <Button
            size="giant"
            onPress={() => setCurrentPage(2)}
            style={{
              width: '100%',
              borderRadius: '1rem',
              marginTop: '1.25rem',
              backgroundColor: colorTheme['light-green'],
              borderColor: colorTheme['light-green'],
            }}
          >
            {() => <Text category="h2">Next</Text>}
          </Button>
        </Layout>
      ),
    },
    // Name Input Page
    {
      id: 2,
      render: () => (
        <Layout style={{
          flex: 1,
          width: '100%',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingVertical: '2.5rem',
        }}>
          <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            paddingHorizontal: '1.25rem'
          }}>
            <Image
              source={require("@/assets/graphics/onboarding2.svg")}
              style={{
                width: '250px',
                marginBottom: '1.25rem'
              }}
              resizeMode="contain"
            />
            <Text category="h1" style={{
              fontSize: '1rem',
              marginBottom: '1.875rem',
              textAlign: 'center',
              color: '#00A39B'
            }}>
              Introduce yourself!
            </Text>
            <Input
              placeholder="Enter your name"
              value={userName}
              onChangeText={setUserName}
              size="large"
              style={{
                width: '100%',
                marginBottom: '0.9375rem',
                borderRadius: '20px',
                borderColor: colorTheme['light-green'],
                borderWidth: '3px',
              }}
            />
          </View>
          <Button
            size="giant"
            onPress={() => setCurrentPage(3)}
            style={{
              width: '100%',
              borderRadius: '1rem',
              marginTop: '1.25rem',
              backgroundColor: colorTheme['light-green'],
              borderColor: colorTheme['light-green'],
            }}
            disabled={!userName.trim()}
          >
            {() => <Text category="h2">Confirm</Text>}
          </Button>
        </Layout>
      ),
    },
    // Get Started Page
    {
      id: 3,
      render: () => (
        <Layout style={{
          flex: 1,
          width: '100%',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingVertical: '2.5rem',
        }}>
          <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: '1.25rem'
          }}>
            <Image
              source={require("@/assets/graphics/onboarding3.svg")}
              style={{
                width: '250px',
                marginBottom: '1.25rem'
              }}
              resizeMode="contain"
            />
            <Text category="h1" style={{
              fontSize: '1rem',
              marginBottom: '0.9375rem',
              textAlign: 'center',
              color: '#00A39B'
            }}>
              Welcome, {userName}!{'\n'}
              Your health, our priority
            </Text>
            <Text category="p1" style={{
              fontSize: '1rem',
              textAlign: 'center',
              color: '#666',
              paddingHorizontal: '1.25rem'
            }}>
              Stay on track with personalized medication 
              support and timely reminders.
            </Text>
          </View>
          <Button
            size="giant"
            onPress={() => {
              onNameSubmit(userName);
              navigation.navigate("Home Stack", {screen: "Home"});
              // onComplete();
            }}
            style={{
              width: '100%',
              borderRadius: '1rem',
              marginTop: '1.25rem',
              backgroundColor: colorTheme['light-green'],
              borderColor: colorTheme['light-green'],
            }}
          >
            {() => <Text category="h2">Get Started</Text>}
          </Button>
        </Layout>
      ),
    },
  ];

  return (
    <SafeAreaView style={{flex: 1}}>
      <Layout style={{
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1.25rem',
      }}>
        {onboardingPages[currentPage].render()}
      </Layout>
    </SafeAreaView>
    
  );
};