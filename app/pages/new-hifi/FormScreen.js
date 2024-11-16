import { Layout, Text, Button, Modal } from "@ui-kitten/components";
import { Pressable, SafeAreaView, View } from "react-native";
import { Header } from '@/app/components/header';

import { styles } from "@/app/stylesheet";
import { default as colorTheme } from "@/custom-theme.json";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";

function FormField({navigation, destination, label, placeholder, value, drugObj=null}) {
  return(
    <View style={{flexDirection: "row", width: "100%", backgroundColor: "#fff", justifyContent: "space-between", paddingHorizontal: 16, paddingVertical: 16, borderRadius: 12, borderWidth: .5, borderColor: colorTheme["text-gray"]}}>
      <Text category="p1" style={{color: colorTheme["text-gray"]}}>{label}</Text>
      <Text category="p1" style={{color: value?"black":colorTheme["text-gray"]}} onPress={() => navigation.navigate(destination, {drug: drugObj})}>{value || placeholder}</Text>
    </View>
  )
}

function getTime(time) {
  if (!time) return;
  let minutes = time.getMinutes().toString().length < 2 ? `0${time.getMinutes()}` : time.getMinutes();
  return `${time.getHours()}:${minutes}`;
}

function getDates(startDate, interval=0, numDays=7) {
  if (interval === 0) return [startDate];
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

export function FormScreen({navigation, route}) {
  const drug = route.params.drug;
  const [showAlert, setShowAlert] = useState(false);
  return(
    <SafeAreaView style={{flex: 1}}>
      <Modal
        visible={showAlert}
        backdropStyle={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        onBackdropPress={() => setShowAlert(false)}
      >
        <View style={{backgroundColor: "#ffffff", padding: 32, borderRadius: 20, gap: 16}}>
          <Text category="p1">Please fill in the required fields.</Text>
        </View>
      </Modal>
      <Header navigation={navigation} title={"New Medication"}/>
      <Layout style={{...styles.masterLayoutNoNav, alignItems: "flex-start"}}>
        <View style={{flex: 4, width: "100%", gap: 12}}>
          <Text category="h2" style={{color: colorTheme["text-off-black"]}}>General Information</Text>
          <View style={{width: "100%", gap: 8}}>
            <FormField navigation={navigation} destination={"Edit Name"} label="*Medication Name:" placeholder="Edit Name" value={drug.name} drugObj={drug}/>
            <FormField navigation={navigation} destination={"Edit Schedule"} label="*Schedule:" placeholder="Edit Schedule" value={drug.dates?getTime(drug.time):null} drugObj={drug}/>
            <FormField navigation={navigation} destination={"Edit Name"} label="Duration:" placeholder="Edit Duration" value={drug.duration} drugObj={drug}/>
            <FormField navigation={navigation} destination={"Edit Frequency"} label="Frequency:" placeholder="Edit Frequency" value={`Every ${drug.frequency} day(s)`} drugObj={drug}/>
            <FormField navigation={navigation} destination={"Edit Name"} label="Drug Strength:" placeholder="Edit Drug Strength" value={drug.strength} drugObj={drug}/>
          </View>
          <Text category="h2" style={{color: colorTheme["text-off-black"], marginTop: 16}}>Prescription Information</Text>
          <FormField navigation={navigation} destination={"Edit Name"} label={"Current Quantity"} placeholder="Edit Quantity" value={drug.quantity} drugObj={drug}/>
        </View>
        <View style={{flex: 1, width: "100%"}}>
          <Button size="large" onPress={() => {
            if (!(drug.dates && drug.name)) {
              setShowAlert(true);
              return;
            }
            navigation.navigate("Edit Icon", {drug: {
              ...drug,
              dates: getDates(drug.dates[0], drug.frequency)
            }});
          }}>Continue</Button>
        </View>
      </Layout>
    </SafeAreaView>
  )
}