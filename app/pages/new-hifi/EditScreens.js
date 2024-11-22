import { Layout, Text, Button, Datepicker, Input } from "@ui-kitten/components";
import { SafeAreaView, View, Image, Pressable } from "react-native";
import { Header } from '@/app/components/header';
import { useState } from "react";
import { SuggestionSearch } from "@/app/components/suggestionSearch";
import DateTimePicker from '@react-native-community/datetimepicker';

import { styles } from "@/app/stylesheet";
import { default as colorTheme } from "@/custom-theme.json";

import {
  CAPSULE_ICON,
  DROPPER_ICON,
  INJECTION_ICON,
  LIQUID_ICON,
  OINTMENT_ICON,
  SPRAY_ICON,
  TABLETS_ICON,
} from "@/assets/images";
const icons = [CAPSULE_ICON, DROPPER_ICON, INJECTION_ICON, LIQUID_ICON, OINTMENT_ICON, SPRAY_ICON, TABLETS_ICON];

import AsyncStorage from "@react-native-async-storage/async-storage";
import { DisplayDropdown } from "@/app/components/displayDropdown";

export function EditIcon ({navigation, route}) {
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
  
  const [index, setIndex] = useState(0);
  const drug = route.params.drug;
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header navigation={navigation} />
      <Layout style={styles.masterLayout}>
        <View style={{flex: 7, alignItems: "center", gap: 16, width: "100%"}}>
          <View style={{justifyContent: "center", alignItems: "center", gap: 32, flex: 2}}>
            <Image style={{marginTop: 32, height: 60, width: 60}} source={icons[index]} resizeMode='contain'/>
            <Text category='h2'>Pick icon</Text>
          </View>

          <View style={{flexDirection: "row", justifyContent: "center", flexWrap: "wrap", width: "100%", gap: 16, marginTop: 48, flex: 7, paddingBottom: 64}}>
            {
              icons.map((icon, index) => {
                return (
                  <Button style={{
                    backgroundColor: "#ffffff",
                  }}
                  key={index}
                  onPress={() => setIndex(index)}
                  children={() => {
                    return (
                      <Image style={{width: 70, height: 70}} source={icon} resizeMode='contain'/>
                    )
                  }}
                  />
                )
              })
            }
          </View>
        </View>
        <View style={{flex: 2, width: "100%"}}>
          <Button size="large" onPress={() => {
            const _drug = {...drug, icon: icons[index]};
            storeData(drug.name, _drug);
            navigation.popTo("Home Stack", {screen: "Home", params: {drug: _drug}});
          }}>Confirm</Button>
        </View>
      </Layout>
    </SafeAreaView>
  )
}

export function EditStrength({navigation, route}) {
  const drug = route.params.drug;
  const [strength, setStrength] = useState();
  const [unit, setUnit] = useState("mL")
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header navigation={navigation} title={"Edit Dose"}/>
      <Layout style={styles.masterLayout}>
        <View style={{flex: 4, flexDirection: "row", width: "100%", alignItems: "center"}}>
          <Input style={{flex: 1}} value={strength} onChange={(e) => setStrength(e.target.value)}/>
          <DisplayDropdown style={{flex: 3}} setUnit={setUnit} data={["mL", "mg", "cc", "mol"]}/>
        </View>
        <View style={{flex: 1, width: "100%"}}>
          <Button size="large" style={{width: "100%"}} onPress={() => navigation.popTo("Form", {drug: {...drug, strength: `${strength}${unit}`}})}>Confirm</Button>
        </View>
      </Layout>
    </SafeAreaView>
  )
}

export function EditDose({navigation, route}) {
  const drug = route.params.drug;
  const [dose, setDose] = useState("1");
  const [unit, setUnit] = useState("tablet(s)")
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header navigation={navigation} title={"Edit Dose"}/>
      <Layout style={styles.masterLayout}>
        <View style={{flex: 4, flexDirection: "row", width: "100%", alignItems: "center"}}>
          <DisplayDropdown style={{flex: 1}} setUnit={setDose} data={["1", "2", "3", "4", "5", "6", "7", "8", "9"]}/>
          <DisplayDropdown style={{flex: 2}} setUnit={setUnit} data={["tablet(s)", "pill(s)", "injection(s)", "swab(s)", "capsule(s)"]}/>
        </View>
        <View style={{flex: 1, width: "100%"}}>
          <Button size="large" style={{width: "100%"}} onPress={() => navigation.popTo("Form", {drug: {...drug, dose: `${dose} ${unit}`}})}>Confirm</Button>
        </View>
      </Layout>
    </SafeAreaView>
  )
}

function FrequencyField({label, value, masterValue, setMasterValue}) {
  return(
    <Pressable onPress={() => setMasterValue(value)}>
      <View style={{backgroundColor: value === masterValue? colorTheme["light-blue-80"]: "#ffffff", padding: 16, width: "100%", borderRadius: 8, borderColor: colorTheme["text-gray"], borderWidth: .5}}>
        <Text category="p1">{label}</Text>
      </View>
    </Pressable>
  )
}

export function EditDuration({navigation, route}) {
  const [duration, setDuration] = useState(0);
  const drug = route.params.drug;
  return(
    <SafeAreaView style={{ flex: 1 }}>
      <Header navigation={navigation} title={"Edit Duration"}/>
      <Layout style={styles.masterLayout}>
        <View style={{flex: 4, width: "100%", gap: 16}}>
          <View style={{width: "100%", gap: 4}}>
            <FrequencyField label={"One time thing"} value={0} masterValue={duration} setMasterValue={setDuration}/>
            <FrequencyField label={"1 week"} value={7} masterValue={duration} setMasterValue={setDuration}/>
            <FrequencyField label={"2 weeks"} value={14} masterValue={duration} setMasterValue={setDuration}/>
            <FrequencyField label={"3 weeks"} value={21} masterValue={duration} setMasterValue={setDuration}/>
            <FrequencyField label={"1 month"} value={30} masterValue={duration} setMasterValue={setDuration}/>
            <FrequencyField label={"3 months"} value={90} masterValue={duration} setMasterValue={setDuration}/>
            <FrequencyField label={"6 months"} value={180} masterValue={duration} setMasterValue={setDuration}/>
            <FrequencyField label={"1 year"} value={365} masterValue={duration} setMasterValue={setDuration}/>
          </View>
        </View>
        <View style={{flex: 1, width: "100%"}}>
          <Button size="large" style={{width: "100%"}} onPress={() => navigation.popTo("Form", {drug: {...drug, duration: duration}})}>Confirm</Button>
        </View>
      </Layout>
    </SafeAreaView>
  )
}

export function EditFrequency({navigation, route}) {
  const [frequency, setFrequency] = useState(0);
  const drug = route.params.drug;
  return(
    <SafeAreaView style={{ flex: 1 }}>
      <Header navigation={navigation} title={"Edit Frequency"}/>
      <Layout style={styles.masterLayout}>
        <View style={{flex: 4, width: "100%", gap: 16}}>
          <View style={{width: "100%", gap: 4}}>
            <FrequencyField label={"One time thing"} value={0} masterValue={frequency} setMasterValue={setFrequency}/>
            <FrequencyField label={"Daily"} value={1} masterValue={frequency} setMasterValue={setFrequency}/>
            <FrequencyField label={"Every other day"} value={2} masterValue={frequency} setMasterValue={setFrequency}/>
            <FrequencyField label={"Weekly"} value={7} masterValue={frequency} setMasterValue={setFrequency}/>
            <FrequencyField label={"Biweekly"} value={14} masterValue={frequency} setMasterValue={setFrequency}/>
            <FrequencyField label={"Monthly"} value={30} masterValue={frequency} setMasterValue={setFrequency}/>
          </View>
        </View>
        <View style={{flex: 1, width: "100%"}}>
          <Button size="large" style={{width: "100%"}} onPress={() => navigation.popTo("Form", {drug: {...drug, frequency: frequency}})}>Confirm</Button>
        </View>
      </Layout>
    </SafeAreaView>
  )
}

export function EditSchedule({navigation, route}) {
  const drug = route.params.drug;
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());

  const [showPicker, setShowPicker] = useState(false);

  function handlePickTime(e, selected) {
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
          <Button size="large" style={{width: "100%"}} onPress={() => navigation.popTo("Form", {drug: {
            ...drug,
            dates: [
              date
            ],
            time: time
          }})}>Confirm</Button>
        </View>
      </Layout>
    </SafeAreaView>
  )
}

export function EditNickname({navigation, route}) {
  const [nick, setNick] = useState("");
  const drug = route.params.drug;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header navigation={navigation} title={"Edit Nickname"}/>
      <Layout style={styles.masterLayout}>
        <View style={{flex: 4, justifyContent: "center"}}>
          {/* <SuggestionSearch value={name} setValue={setName}/> */}
          <Input style={{width: "100%"}} value={nick} onChangeText={(e) => setNick(e)}/>
        </View>
        <View style={{flex: 1, width: "100%"}}>
          <Button size="large" style={{width: "100%"}} onPress={() => navigation.popTo("Form", {drug: {...drug, nickname: nick}})}>Confirm</Button>
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
        <View style={{flex: 4, justifyContent: "center"}}>
          {/* <SuggestionSearch value={name} setValue={setName}/> */}
          <Input style={{width: "100%"}} value={name} onChangeText={(e) => setName(e)}/>
        </View>
        <View style={{flex: 1, width: "100%"}}>
          <Button size="large" style={{width: "100%"}} onPress={() => navigation.popTo("Form", {drug: {...drug, name: name}})}>Confirm</Button>
        </View>
      </Layout>
    </SafeAreaView>
  )
}