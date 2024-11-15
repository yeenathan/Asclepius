import { Layout, Text, Button, Datepicker } from "@ui-kitten/components";
import { SafeAreaView, View } from "react-native";
import { Header } from '@/app/components/header';
import { useState } from "react";
import { SuggestionSearch } from "@/app/components/suggestionSearch";
import DateTimePicker from '@react-native-community/datetimepicker';

import { styles } from "@/app/stylesheet";
import { default as colorTheme } from "@/custom-theme.json";

export function EditSchedule({navigation, route}) {
  const drug = route.params.drug;
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());

  const [showPicker, setShowPicker] = useState(false);

  function handlePickTime(e, selected) {
    console.log(selected);
    setTime(selected);
    setShowPicker(false);
  }

  function getTime(time) {
    if (!time) return;
    let minutes = time.getMinutes().toString().length < 2 ? `0${time.getMinutes()}` : time.getMinutes();
    return `${time.getHours()}:${minutes}`;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header navigation={navigation} title={"Edit Schedule"}/>
      <Layout style={styles.masterLayout}>
        <View style={{flex: 4, width: "90%", justifyContent: "center", gap: 32}}>
          <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
            <Text category="h2" style={{color: colorTheme["text-off-black"]}}>Start date</Text>
            <Datepicker style={{maxWidth: "fit-content"}} date={date} placement="bottom end" onSelect={nextDate => setDate(nextDate)}/>
          </View>
          <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
            <Text category="h2" style={{color: colorTheme["text-off-black"]}}>Time</Text>
            <View style={{flexDirection: "row", alignItems: "flex-end"}}>
              <View style={{backgroundColor: "#fff", minHeight: 40, justifyContent: "center", paddingHorizontal: 12, borderRadius: 8, borderColor: colorTheme["text-gray"], borderWidth: .5}}>
                <Text>{getTime(time)}</Text>
              </View>
              <Button onPress={() => setShowPicker(true)} size="small" style={{maxWidth: 60, minHeight: 40}}>Edit</Button>
            </View>
            { showPicker && <DateTimePicker value={time} mode="time" onChange={handlePickTime}/> }
          </View>
        </View>
        <View style={{flex: 1, width: "100%"}}>
          <Button size="large" style={{width: "100%"}} onPress={() => navigation.navigate("Form", {drug: {
            ...drug,
            date: date.toISOString(),
            time: time
          }})}>Confirm</Button>
        </View>
      </Layout>
    </SafeAreaView>
  )
}

export function EditName({navigation, route}) {
  const [name, setName] = useState("");
  const drug = route.params.drug;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header navigation={navigation} title={"Edit Name"}/>
      <Layout style={styles.masterLayout}>
        <View style={{flex: 4}}>
          <SuggestionSearch value={name} setValue={setName}/>
        </View>
        <View style={{flex: 1, width: "100%"}}>
          <Button size="large" style={{width: "100%"}} onPress={() => navigation.navigate("Form", {drug: {...drug, name: name}})}>Confirm</Button>
        </View>
      </Layout>
    </SafeAreaView>
  )
}