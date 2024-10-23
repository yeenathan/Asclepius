import React, { useState } from 'react';
import { SafeAreaView, SectionList } from 'react-native';
import { Button, Icon, Layout, Text, Modal} from '@ui-kitten/components';
import { View, Image, ScrollView } from 'react-native';
import { HorizontalCalendar } from "@/app/components/horizontalCalendar";
import { ModalContainer } from "@/app/components/modalContainer"

import { styles } from "../stylesheet"
import { default as colorTheme } from '@/custom-theme.json';

const MED_DATA = [
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
];

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
          <Button size='small' style={{...styles.orangeButton, borderRadius: "4rem", marginTop: ".5rem", maxWidth: "8rem"}}>Mark as Taken</Button>
        </View>
      </View>
    </View>
  )
}

const MedList = (props) => {
  return(
    <ScrollView style={{width: "100%"}}>
      <SectionList
        sections={MED_DATA}
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
          <HorizontalCalendar/>
        </View>
        <Important toggleOverlayVisible={toggleOverlayVisible} />
        <Text category='h1' style={{justifyContent: "flex-start", width: "100%"}}>Today's Meds</Text>
        <MedList />
      </Layout>
    </SafeAreaView>
  );
};