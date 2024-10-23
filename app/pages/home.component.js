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

const MedList = ({day}) => {
  return(
    <ScrollView style={{width: "100%"}}>
      <SectionList
        sections={MED_DATA[day]}
        renderItem={({item}) => <MedCard data={item}/>}
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
  
  const [medData, setMedData] = useState({data: []});
  const [day, setDay] = useState("Mon");

  const handleSetDay = (day) => {
    setDay(day);
    setMedData(MED_DATA[day]);
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: "2.5rem"}}>
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
        <Important toggleOverlayVisible={toggleOverlayVisible} />
        <Text category='h1' style={{justifyContent: "flex-start", width: "100%"}}>Today's Meds</Text>
        {
          medData.length > 0 ? <MedList day={day}/>
          :
          <View style={{flex: 1, justifyContent: "center"}}>
            <Text onPress={() => setMedData(MED_DATA[day])} category='p1'>Add meds</Text>
          </View>
        }
      </Layout>
    </SafeAreaView>
  );
};