import { Layout, Text, Button } from "@ui-kitten/components";
import { Pressable, SafeAreaView, View } from "react-native";
import { Header } from '@/app/components/header';

import { styles } from "@/app/stylesheet";
import { default as colorTheme } from "@/custom-theme.json";

function FormField({navigation, destination, label, placeholder, value, drugObj=null}) {
  return(
    <View style={{flexDirection: "row", width: "100%", backgroundColor: "#fff", justifyContent: "space-between", paddingHorizontal: 16, paddingVertical: 16, borderRadius: 12}}>
      <Text category="p1" style={{color: colorTheme["text-gray"]}}>{label}</Text>
      <Text category="p1" style={{color: value?"black":colorTheme["text-gray"]}} onPress={() => navigation.navigate(destination, {drug: drugObj})}>{value || placeholder}</Text>
    </View>
  )
}

export function FormScreen({navigation, route}) {
  const drug = route.params.drug;
  return(
    <SafeAreaView style={{flex: 1}}>
      <Header navigation={navigation} title={"New Medication"}/>
      <Layout style={{...styles.masterLayoutNoNav, alignItems: "flex-start"}}>
        <View style={{flex: 4, width: "100%", gap: 12}}>
          <Text category="h2" style={{color: colorTheme["text-off-black"]}}>General Information</Text>
          <View style={{width: "100%", gap: 8}}>
            <FormField navigation={navigation} destination={"Edit Name"} label="Medication Name:" placeholder="Edit Name" value={drug.name} drugObj={drug}/>
            <FormField navigation={navigation} destination={"Edit Name"} label="Schedule:" placeholder="Edit Schedule" value={drug.date} drugObj={drug}/>
            <FormField navigation={navigation} destination={"Edit Name"} label="Duration:" placeholder="Edit Duration" value={drug.duration} drugObj={drug}/>
            <FormField navigation={navigation} destination={"Edit Name"} label="Frequency:" placeholder="Edit Frequency" value={drug.interval} drugObj={drug}/>
            <FormField navigation={navigation} destination={"Edit Name"} label="Drug Strength:" placeholder="Edit Drug Strength" value={drug.strength} drugObj={drug}/>
          </View>
          <Text category="h2" style={{color: colorTheme["text-off-black"], marginTop: 16}}>Prescription Information</Text>
          <FormField navigation={navigation} destination={"Edit Name"} label={"Current Quantity"} placeholder="Edit Quantity" value={drug.quantity} drugObj={drug}/>
        </View>
        <View style={{flex: 1, width: "100%"}}>
          <Button size="large" onPress={() => {
            navigation.navigate("Home Stack");
          }}>Confirm</Button>
        </View>
      </Layout>
    </SafeAreaView>
  )
}