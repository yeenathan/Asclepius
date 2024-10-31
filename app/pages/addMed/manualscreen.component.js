import React, {useState} from 'react';
import { View, SafeAreaView, Image } from 'react-native';
import { Button, Layout, ProgressBar, Text, Input, Modal, Icon} from '@ui-kitten/components';
import { MyButton } from "@/app/components/MyButton"
import { DisplayDropdown } from "@/app/components/displayDropdown"
import { InputPill } from '@/app/pages/addMed/scanconfirm.component';

import { default as colorTheme } from "@/custom-theme.json"
import {
  CAPSULE_ICON,
  DROPPER_ICON,
  INJECTION_ICON,
  LIQUID_ICON,
  OINTMENT_ICON,
  SPRAY_ICON,
  TABLETS_ICON,
} from "@/app/images";

const icons = [CAPSULE_ICON, DROPPER_ICON, INJECTION_ICON, LIQUID_ICON, OINTMENT_ICON, SPRAY_ICON, TABLETS_ICON];

import { Header } from "@/app/components/header"

import { styles } from '@/app/stylesheet';
import { SuggestionSearch } from "@/app/components/suggestionSearch"

export const MedConfirm = ({navigation}) => {
  const [showBackModal, setShowBackModal] = useState(false);

  return(
    <>
    <Modal
        visible={showBackModal}
        backdropStyle={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        onBackdropPress={() => setShowBackModal(false)}
      >
        <View style={{backgroundColor: "#ffffff", alignItems: "center", padding: 32, borderRadius: 32}}>
          <Text category="p2">Discard changes and exit?</Text>
          <View style={{ display: "flex", flexDirection: "row", gap: 16, marginTop: 16, width: "100%" }}>
            <Button
              size="small"
              onPress={() => setShowBackModal(false)}
              style={{
                flex: 1,
                backgroundColor: colorTheme["silver-white"],
                borderColor: colorTheme["light-green"],
                borderRadius: 16,
              }}
              children={() => <Text category="p1">Cancel</Text>}
            />
            <Button
              size="medium"
              onPress={() => {
                setShowBackModal(false);
                navigation.navigate("Home");
              }}
              style={{
                flex: 1,
                backgroundColor: colorTheme["light-green"],
                borderColor: colorTheme["light-green"],
                borderRadius: 16,
              }}
              children={() => <Text category="p2">Exit</Text>}
            />
          </View>
        </View>
    </Modal>
    <SafeAreaView style={{ flex: 1 }}>
      <Header navigation={navigation}/>
      <Layout style={{...styles.masterLayoutNoNav}}>
        {/* <View style={{ justifyContent: 'center', flexDirection: 'row', alignItems: 'flex-end' }}>
          <Image source={require("@/assets/icons/Capsule.svg")}/>
          <Icon 
            fill='#8F9BB3'
            name='edit-2'
          />
        </View> */}
        <View style={{justifyContent: "center", alignItems: "flex-start", width: "100%"}}>
          <InputPill destination={"Edit Med"} navigation={navigation} label="Medication Name" text="Lisinopril" fromManual={true}/>
          <InputPill destination={"Med Time"} navigation={navigation} label="How Often" text="Once per day" fromManual={true}/>
          <InputPill destination={"Dose Time"} navigation={navigation} label="Dose" text="1 tablet" fromManual={true}/>
          <InputPill destination={"Duration"} navigation={navigation} label="Treatment Duration" text="2 Oct, 2024 - 8 Oct, 2024"/>
          <InputPill label="Refill Reminder" text="10 pill(s) left"/>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center', gap: 10, width: '100%'}}>
          <MyButton text="Confirm" styles={{...styles.orangerButton, ...styles.baseBigButton}} press={() => navigation.navigate("Home")} />
          <Text category='p2' onPress={() => setShowBackModal(true)}>Discard Input</Text>
        </View>
      </Layout>
    </SafeAreaView>
    </>
  )
}

export const IconPick = ({navigation}) => {
  const [index, setIndex] = useState(0);
  
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header navigation={navigation} />
      <Layout style={styles.masterLayout}>
        <View style={{flex: 7, alignItems: "center", gap: 16, width: "100%"}}>
          <ProgressBar size="giant" animating={false} style={{width: "100%"}} progress={.90}/>

          <View style={{justifyContent: "center", alignItems: "center", gap: 32, flex: 2}}>
            <Image style={{marginTop: 32}} source={icons[index]}/>
            <Text category='h2'>Pick icon</Text>
          </View>

          <View style={{flexDirection: "row", flexWrap: "wrap", width: "100%", gap: 16, marginTop: 48, flex: 7, paddingBottom: 64}}>
            {
              icons.map((icon, index) => {
                return (
                  <Button style={{
                    backgroundColor: "#ffffff",
                    width: "30%",
                    minHeight: "30%"
                  }}
                  key={index}
                  onPress={() => setIndex(index)}
                  children={() => {
                    return (
                      <Image source={icon} resizeMode='contain'/>
                    )
                  }}
                  />
                )
              })
            }
          </View>
        </View>
        <View style={{flex: 2, width: "100%"}}>
          <MyButton text="Confirm" styles={{...styles.baseBigButton, ...styles.orangerButton}} press={() => navigation.navigate("Med Confirm")}/>
        </View>
      </Layout>
    </SafeAreaView>
  )
}

export const ExtraOptions = ({navigation}) => {
  return (
    <SafeAreaView style={{ flex: 1}}>
      <Header navigation={navigation}/>
      <Layout style={styles.masterLayout}>
        <View style={{flex: 7, alignItems: "center", gap: 16, width: "100%"}}>
          <ProgressBar size="giant" animating={false} style={{width: "100%"}} progress={.80}/>
          <Text category='h2'>Would you like to set: (optional)</Text>
          <View style={{marginTop: 32, width: "100%"}}>
            <View style={{width: "100%", gap: 16}}>
              <View style={{width: "100%", flexDirection: "row", backgroundColor: colorTheme['light-blue'], borderRadius: 32, padding: 24, justifyContent: "center", gap: 32, alignItems: "center"}}>
                <Image source={require("@/assets/icons/Vector.svg")}/>
                <Text onPress={() => navigation.navigate("Duration")} category='h2'>Treatment Duration</Text>
              </View>
              <View style={{width: "100%", flexDirection: "row", backgroundColor: colorTheme['light-blue'], borderRadius: 32, padding: 24, justifyContent: "center", gap: 32, alignItems: "center"}}>
                <Image source={require("@/assets/icons/admin_meds.svg")}/>
                <Text category='h2'>Refill Reminder</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{flex: 2, width: "100%"}}>
          <MyButton text="Next" styles={{...styles.baseBigButton, ...styles.orangerButton}} press={() => navigation.navigate("Icon Pick")}/>
        </View>
      </Layout>
    </SafeAreaView>
  )
}

export const ManualDoseEdit = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header navigation={navigation} />
      <Layout style={styles.masterLayout}>
        <View style={{flex: 7, alignItems: "center", gap: 16, width: "100%"}}>
          <ProgressBar size="giant" animating={false} style={{width: "100%"}} progress={.66}/>
          <Text category='h2'>Dose per time</Text>
          <View style={{flexDirection: "row", gap: 16, marginTop: 80}}>
            <Input style={{width: 80}}></Input>
            <DisplayDropdown data={["Pill(s)", "mL", "CC", "Unit(s)", "Application(s)", "Pen(s)"]}/>
          </View>
        </View>
        <View style={{flex: 2, width: "100%"}}>
          <MyButton text="Confirm" styles={{...styles.baseBigButton, ...styles.orangerButton}} press={() => navigation.navigate("Extra Options")}/>
        </View>
      </Layout>
    </SafeAreaView>
  )
}

export const ManualNameEdit = ({navigation}) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header navigation={navigation}/>
      <Layout style={styles.masterLayout}>
        <View style={{flex: 7, alignItems: "center", gap: 16, width: "100%"}}>
          <ProgressBar size="giant" animating={false} style={{width: "100%"}} progress={.25}/>
          <Text category='h2'>What is the medication name?</Text>
          <Text category='p1'>Search or type your medication name</Text>
          <SuggestionSearch />
        </View>
        <View style={{flex: 2, width: "100%"}}>
          <MyButton text="Next" styles={{...styles.baseBigButton, ...styles.orangerButton}} press={() => navigation.navigate("Manual Interval")}/>
        </View>
      </Layout>
    </SafeAreaView>
  )
}

export const ManualIntervalEdit = ({navigation}) => {
  return (
    <SafeAreaView style={{ flex: 1}}>
      <Header navigation={navigation}/>
      <Layout style={styles.masterLayout}>
        <View style={{flex: 7, alignItems: "center", gap: 16, width: "100%"}}>
          <ProgressBar size="giant" animating={false} style={{width: "100%"}} progress={.47}/>
          <Text category='h2'>Set Time Interval</Text>
          <View style={{flexDirection: "row", width: "100%", gap: 16, justifyContent: "center", marginTop: 80}}>
            <Text style={{flex: 1}} category='h2'>Every</Text>
            <Input placeholder="#" style={{flex: 2}}></Input>
            <DisplayDropdown data={["Hours", "Days", "Months", "Years"]}/>
          </View>
        </View>
        <View style={{flex: 2, width: "100%"}}>
          <MyButton text="Next" styles={{...styles.baseBigButton, ...styles.orangerButton}} press={() => navigation.navigate("Manual Dose")}/>
        </View>
      </Layout>
    </SafeAreaView>
  )
}