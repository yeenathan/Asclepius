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

export function FormScreen({navigation, route}) {
  const storeData = async (key, value) => {
    try {
      let newKeys = [key];
      const prevKeys = await AsyncStorage.getItem("KEYS");
      if (prevKeys) {
        newKeys = [...JSON.parse(prevKeys), key];
      }
      let valueWithKey = {...value, key: key}
      await AsyncStorage.setItem("KEYS", JSON.stringify(newKeys));
      await AsyncStorage.setItem(key, JSON.stringify(valueWithKey));
    } catch (e) {
      console.log(e);
    }
  };

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
            <FormField navigation={navigation} destination={"Edit Schedule"} label="*Schedule:" placeholder="Edit Schedule" value={getTime(drug.time)} drugObj={drug}/>
            <FormField navigation={navigation} destination={"Edit Name"} label="Duration:" placeholder="Edit Duration" value={drug.duration} drugObj={drug}/>
            <FormField navigation={navigation} destination={"Edit Name"} label="Frequency:" placeholder="Edit Frequency" value={drug.interval} drugObj={drug}/>
            <FormField navigation={navigation} destination={"Edit Name"} label="Drug Strength:" placeholder="Edit Drug Strength" value={drug.strength} drugObj={drug}/>
          </View>
          <Text category="h2" style={{color: colorTheme["text-off-black"], marginTop: 16}}>Prescription Information</Text>
          <FormField navigation={navigation} destination={"Edit Name"} label={"Current Quantity"} placeholder="Edit Quantity" value={drug.quantity} drugObj={drug}/>
        </View>
        <View style={{flex: 1, width: "100%"}}>
          <Button size="large" onPress={() => {
            if (!(drug.date && drug.name)) {
              setShowAlert(true);
              return;
            }
            storeData(drug.name, drug);
            navigation.navigate("Home Stack");
          }}>Confirm</Button>
        </View>
      </Layout>
    </SafeAreaView>
  )
}