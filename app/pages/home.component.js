import React, { useState } from 'react';
import { SafeAreaView, SectionList } from 'react-native';
import { Button, Icon, Layout, Text, Modal} from '@ui-kitten/components';
import { View, Image, ScrollView } from 'react-native';
import { HorizontalCalendar } from "@/app/components/horizontalCalendar";
import { ModalContainer } from "@/app/components/modalContainer"

import { styles } from "../stylesheet"
import { default as colorTheme } from '@/custom-theme.json';

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

const MedCard = (props) => {
  const data = props.data;
  if (!data.taken) {  
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

export const HomeScreen = ({ }) => {
  const [overlayVisible, setOverlayVisible] = useState(false); 
  const toggleOverlayVisible = () => {
    setOverlayVisible(!overlayVisible);
  }
  
  const [dayData, setDayData] = useState({data: []});
  const [day, setDay] = useState("Mon");

  const [dataFilled, setDataFilled] = useState(false); // just for faking purposes
  const handleDataFilled = () => {
    setDataFilled(true);        // for faking empty schedule
    setDayData(MED_DATA[day]);  // only need this
  }

  const handleSetDay = (day) => {
    setDay(day);
    if (dataFilled) {
      setDayData(MED_DATA[day]);
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: "2.5rem", backgroundColor: colorTheme['silver-white']}}>
        <Modal
            visible={overlayVisible}
            backdropStyle={{backgroundColor: "rgba(0, 0, 0, 0.5)"}}
            onBackdropPress={toggleOverlayVisible}
        >
          <ModalContainer
            title="1 serious drug interaction"
            body="THERE IS SOMETHING WRONG!!!"
            toggleOverlayVisible={toggleOverlayVisible}
          />
        </Modal>
        <View style={styles.rowContainer}>
          <Text category='h2' style={{color: colorTheme['persian-green']}}>Good morning, Nathan.</Text>
          <Icon style={{width: "40px"}} name="settings-2-outline"></Icon>
        </View>
        <View style={{width: "100%"}}>
          <HorizontalCalendar handleSetDay={handleSetDay} currentDay={day}/>
        </View>
        <Text category='h1' style={{justifyContent: "flex-start", width: "100%"}}>Today's Meds</Text>
        {
          dayData.length > 0 ?
            <>
              <Important toggleOverlayVisible={toggleOverlayVisible} />
              <MedList dayData={dayData}/>
            </>
          :
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