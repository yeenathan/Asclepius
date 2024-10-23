import React, { useState } from 'react';
import { SafeAreaView, SectionList } from 'react-native';
import { Button, Icon, Layout, Text, Modal} from '@ui-kitten/components';
import { View, Image, ScrollView } from 'react-native';
import { HorizontalCalendar } from "@/app/components/horizontalCalendar";
import { ModalContainer } from "@/app/components/modalContainer"

import { styles } from "../stylesheet"
import { default as colorTheme } from '@/custom-theme.json';

/**
 * 
 */

// you might need to define some dummy data for other screens too. dont think it will be this complex on other pages tho
const MED_DATA = {
  Mon: [
    {
      hour: "9:00AM",
      data: [
          {
          time: "9:00AM",
          name: "Medication Name",
          taken: true,
          timeTaken: "9:12AM",
          id: 1
        },
        {
          time: "9:30AM",
          name: "Medication Name",
          taken: false,
          timeTaken: null,
          id: 2
        }
      ]
    },
    {
      hour: "12:00PM",
      data: [
        {
          time: "12:00PM",
          name: "Medication Name",
          taken: false,
          timeTaken: null,
          id: 3
        },
        {
          time: "12:10PM",
          name: "Medication Name",
          taken: false,
          timeTaken: null,
          id: 4
        }
      ]
    }
  ],
  Tue: [
    {
      hour: "9:00AM",
      data: [
          {
          time: "9:00AM",
          name: "Tuesday Medication",
          taken: true,
          timeTaken: "9:12AM",
          id: 1
        },
      ]
    },
    {
      hour: "12:00PM",
      data: [
        {
          time: "12:00PM",
          name: "Medication Name",
          taken: false,
          timeTaken: null,
          id: 3
        },
        {
          time: "12:10PM",
          name: "Medication Name",
          taken: false,
          timeTaken: null,
          id: 4
        }
      ]
    }
  ],
  Wed: {
    hour: "",
    data: []
  },
  Thu: {
    hour: "",
    data: []
  },
  Fri: {
    hour: "",
    data: []
  },
  Sat: {
    hour: "",
    data: []
  },
  Sun: {
    hour: "",
    data: []
  }
};

// ---------------------------------------------------- COMPONENTS ----------------------------------------------------
/**
 * look at MedList first
 * this is a react component created for react native's FlatList/SectionList to render
 * is a singular item in the list
 */
const MedCard = (props) => {
  const data = props.data;
  if (!data.taken) {  // just checks if it's taken and will return something different whether it is or isn't. honestly i just copy pasted and changed 1 line so it's kind of clunky rn. this sucks actually
    return(
      <View style={{...styles.rowContainer, backgroundColor: colorTheme['light-blue'], padding: "1rem", borderRadius: "2rem", justifyContent: "center", marginVertical: ".5rem"}}>
        <View style={{flex: 3, alignItems: "center"}}>
          <Image
            style={{maxHeight: "4rem", maxWidth: "4rem"}}
            source={require("@/assets/icons/button.svg")}
          />
        </View>
        <View style={{flex: 7}}>
          <Text category='p1'>{data.time}</Text>
          <Text category='h2'>{data.name}</Text>
          <View style={{alignItems: "flex-end"}}>
            <Button size='small' style={{...styles.orangeButton, borderRadius: "4rem", marginTop: ".5rem"}} children={() => <Text style={{margin:"none", paddingHorizontal: ".5rem"}} category='p2'>Mark as Taken</Text>}/>
          </View>
        </View>
      </View>  
    )
  }
  else {
    return(
      <View style={{...styles.rowContainer, backgroundColor: colorTheme['light-blue'], padding: "1rem", borderRadius: "2rem", justifyContent: "center", marginVertical: ".5rem"}}>
        <View style={{flex: 3, alignItems: "center"}}>
          <Image
            style={{maxHeight: "4rem", maxWidth: "4rem"}}
            source={require("@/assets/icons/button.svg")}
          />
        </View>
        <View style={{flex: 7}}>
          <Text category='p1'>{data.time}</Text>
          <Text category='h2'>{data.name}</Text>
          <View style={{alignItems: "flex-end"}}>
            <Text category='p1'>Taken at {data.timeTaken}</Text>
          </View>
        </View>
      </View>
    )
  }
}

/**
 * generates the list of medications. uses react native's SectionList (a variation of FlatList) that has section headers. useful cuz we have time values
 * but made the data so complex i got lost trying to change the taken status
 * 
 * renderItem is a required property, and its value is the thing you want to render in the list
 *    - in this case, it's MedCard above
 * sections (SectionList) or data (FlatList) is required too, as its the data it requires to build the list. specific format is needed check the docs
 * theres a FlatList example in components/horizontalCalendar.js
 */
const MedList = ({dayData}) => {
  return(
    <ScrollView style={{ width: "100%"}}> 
      <SectionList
        sections={dayData}
        renderItem={({item}) => <MedCard dayData={dayData} data={item}/>}
        keyExtractor={ item => item.id}
        renderSectionHeader={({section: {hour}}) => (
          <Text category='p2'>{hour}</Text>
      )}
      />
    </ScrollView>
  )
}

/**
 * example of styling a button with more freedom. has to have children prop which takes a react component (stick to Views i think)
 */
const Important = (props) => (
  <Button
    onPress={props.toggleOverlayVisible}
    style={{...styles.orangeButton, width: "100%", marginVertical: ".5rem"}}
    children={() => (
      <View style={{...styles.overlay}}>
        <Text category='p2'>1 serious drug interaction</Text>
      </View>  
    )}
  >
  </Button>
)
// ---------------------------------------------------- COMPONENTS ----------------------------------------------------


/**
 * main page component
 */
export const HomeScreen = ({ }) => {

  // determines whether or not the modal is visible. if you need to implement a modal just copy this and the modal below (not including ModalContainer) and it should work
  const [overlayVisible, setOverlayVisible] = useState(false); 
  const toggleOverlayVisible = () => {
    setOverlayVisible(!overlayVisible);
  }
  
  // (extra) need these states to determine the data/meds shown. extra
  const [dayData, setDayData] = useState({data: []});
  const [day, setDay] = useState("Mon");

  const [dataFilled, setDataFilled] = useState(false); // just for faking purposes
  const handleDataFilled = () => {
    setDataFilled(true);        // for faking empty schedule
    setDayData(MED_DATA[day]);  // only need this
  }

  /** this is kinda extra dw about it
   * handler for the HorizontalCalendar to set the correct data for the selected day
   */
  const handleSetDay = (day) => {
    setDay(day);
    if (dataFilled) {
      setDayData(MED_DATA[day]);
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: "2.5rem", backgroundColor: colorTheme['silver-white']}}>

        {/* modal component from UI kitten. it's a popup/overlay thing */}
        <Modal
            visible={overlayVisible}
            backdropStyle={{backgroundColor: "rgba(0, 0, 0, 0.5)"}}
            onBackdropPress={toggleOverlayVisible}
        >
          <ModalContainer // custom component in components/modalContainer.js the white box itself
            title="1 serious drug interaction"
            body="THERE IS SOMETHING WRONG!!!"
            toggleOverlayVisible={toggleOverlayVisible}
          />
        </Modal>

        <View style={styles.rowContainer}>
          <Text category='h2' style={{color: colorTheme['persian-green']}}>Good morning, Nathan.</Text>
          <Icon style={{width: "40px"}} name="settings-2-outline"></Icon>
        </View>

        {/* width is set to 100 so it stretches the entire parent container (is Layout) */}
        <View style={{width: "100%"}}>

          {/* component in components folder. honestly dont know why it's external u guys can do whatever youre comfortable with. more info in that file */}
          {/* it's basically just a FlatList */}
          <HorizontalCalendar handleSetDay={handleSetDay} currentDay={day}/>
        </View>

        <Text category='h1' style={{justifyContent: "flex-start", width: "100%"}}>Today's Meds</Text>
        
        { // condition to check if theres any meds in the data array. not that important for core interface
          // if there is data, render the below (until the :)
          dayData.length > 0 ? // if unfamiliar with this syntax look up ternary operator but also it doesnt really matter at this stage
            <>
              {/* custom component for the alert box thing created above*/}
              <Important toggleOverlayVisible={toggleOverlayVisible} />

              {/* custom component for the list of medications created above */}
              <MedList dayData={dayData}/>
            </>
          :
          // else (no data), render this
          <View style={{...styles.container, flex: 1, justifyContent: "center", gap: "2rem"}}>
            <View style={{alignItems: "center", backgroundColor: "#ffffff", borderRadius: "1rem", padding: "3rem"}}>
              <Text category='p1'>Input your medication to view schedule</Text>
            </View>
            <Button size="giant" style={{...styles.orangeButton, borderRadius: "1rem"}} onPress={handleDataFilled} children={() => <Text category='h2'>Add Medication</Text>}/>
          </View>
        }
      </Layout>
    </SafeAreaView>
  );
};