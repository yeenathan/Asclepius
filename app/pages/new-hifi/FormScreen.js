import { Layout, Text, Button, Modal, CheckBox } from "@ui-kitten/components";
import { Pressable, SafeAreaView, View, ScrollView } from "react-native";
import { Header } from '@/app/components/header';

import { styles } from "@/app/stylesheet";
import { default as theme } from "@/custom-theme.json";
import { ThemeContext } from "@/app/theme-context";

import { useState, useContext } from "react";

function FormField({navigation, destination, label, placeholder, value, drugObj=null, required=false}) {
  const colorTheme = theme[useContext(ThemeContext).theme];
  return(
    <View style={{flexDirection: "row", width: "100%", backgroundColor: colorTheme["form-field"], justifyContent: "space-between", paddingHorizontal: 16, paddingVertical: 16, borderRadius: 12, borderWidth: .5, borderColor: colorTheme["text-gray"]}}>
      <Text category="p1" style={{color: required? colorTheme["persian-green"] : colorTheme["text-gray"]}}>{label}</Text>
      <Text category="p1" style={{color: value? colorTheme["text-basic-color"] : colorTheme["text-gray"]}} onPress={() => navigation.navigate(destination, {drug: drugObj})}>{value || placeholder}</Text>
    </View>
  )
}

function getTime(time) {
  if (!time) return;
  let minutes = time.getMinutes().toString().length < 2 ? `0${time.getMinutes()}` : time.getMinutes();
  return `${time.getHours()}:${minutes}`;
}

function getDates(startDate, interval=0, numDays=7) {
  if (interval === 0) return [{date: startDate, taken: false, timeTaken: null}];
  let dates = [];
  let currentDate = new Date(startDate);
  for (let i=0; i<numDays; i++) {
    dates.push({
      date: new Date(currentDate),
      taken: false,
      timeTaken: null
    });
    currentDate.setDate(currentDate.getDate() + interval);
  }
  return dates;
}

function parseDate(date) {
  function parseMonth(monthNum) {
    switch (monthNum) {
        case 0 : return "January";
        case 1 : return "February";
        case 2 : return "March";
        case 3 : return "April";
        case 4 : return "May";
        case 5 : return "June";
        case 6 : return "July";
        case 7 : return "August";
        case 8 : return "September";
        case 9 : return "October";
        case 10 : return "November";
        case 11 : return "December";
    }
  }
  return `${parseMonth(date.getMonth())} ${date.getDate()}`
}

export function FormScreen({navigation, route}) {
  const colorTheme = theme[useContext(ThemeContext).theme];
  const [checkbox, setCheckbox] = useState(false);
  const drug = route.params.drug;
  const [showAlert, setShowAlert] = useState(false);
  return(
    <SafeAreaView style={{flex: 1}}>
      <Modal
        visible={showAlert}
        backdropStyle={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        onBackdropPress={() => setShowAlert(false)}
      >
        <View style={{backgroundColor: colorTheme["modal-bg"], padding: 32, borderRadius: 20, gap: 16}}>
          <Text category="p1">Please fill in the required fields.</Text>
        </View>
      </Modal>
      <Header navigation={navigation} title={"New Medication"}/>
      <Layout style={{...styles.masterLayoutNoNav, alignItems: "flex-start"}}>
        <View style={{flex: 7, width: "100%", gap: 12}}>
          <ScrollView>
            <Text category="h2" style={{marginBottom: 16}}>General Information</Text>
            <View style={{width: "100%", gap: 8}}>
              <FormField navigation={navigation} destination={"Edit Name"} label="*Medication Name:" placeholder="Edit Name" value={drug.name} drugObj={drug} required={true}/>
              <FormField navigation={navigation} destination={"Edit Nickname"} label="Nickname:" placeholder="Add Nickname" value={drug.nickname} drugObj={drug}/>
              <FormField navigation={navigation} destination={"Edit Dose"} label="Dose:" placeholder="Edit Dose" value={drug.dose} drugObj={drug}/>
              <FormField navigation={navigation} destination={"Edit Strength"} label="Drug Strength:" placeholder="Edit Drug Strength" value={drug.strength} drugObj={drug}/>
            </View>
            <Text category="h2" style={{marginTop: 24, marginBottom: 16}}>Set Reminder</Text>
            <View style={{width: "100%", gap: 8}}>
              <FormField navigation={navigation} destination={"Edit Schedule"} label="*Start Date:" placeholder="Edit Schedule" value={drug.dates?`${parseDate(drug.dates[0])}, ${getTime(drug.time)}`:null} drugObj={drug} required={true}/>
              <FormField navigation={navigation} destination={"Edit Frequency"} label="Take every:" placeholder="Edit Frequency" value={drug.frequency !== 0?`Every ${drug.frequency} day(s)`:"Just once"} drugObj={drug}/>
              <FormField navigation={navigation} destination={"Edit Duration"} label="Treatment duration:" placeholder="Edit Duration" value={drug.duration !==0 ?`${drug.duration} days`:"Just once"} drugObj={drug}/>
              <FormField navigation={navigation} destination={""} label={"Current Quantity"} placeholder="Edit Quantity" value={drug.quantity} drugObj={drug}/>
              <CheckBox checked={checkbox} onChange={() => setCheckbox(!checkbox)} style={{marginTop: 16, color: colorTheme["generic-text"]}}>Alert when low on refills</CheckBox>
            </View>
          </ScrollView>
        </View>
        <View style={{flex: 1, width: "100%"}}>
          <Button size="large" onPress={() => {
            if (!(drug.dates && drug.name)) {
              setShowAlert(true);
              return;
            }
            navigation.navigate("Edit Icon", {drug: {
              ...drug,
              dates: getDates(drug.dates[0], drug.frequency, drug.duration)
            }});
          }}>Continue</Button>
        </View>
      </Layout>
    </SafeAreaView>
  )
}