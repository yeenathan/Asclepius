import React, {useCallback, useEffect, useState} from 'react';
import { Image, SafeAreaView, StyleSheet, View } from 'react-native';
import { Button, Icon, Layout, Text, Modal, IconElement, Input, ButtonGroup, ProgressBar} from '@ui-kitten/components';
import { default as colorTheme } from "@/custom-theme.json"
import { MyButton } from "@/app/components/MyButton"
import { styles as buttonStyles } from '@/app/stylesheet';
import { useFocusEffect } from '@react-navigation/native';
import { Header } from '@/app/components/header';



const EditIcon = (props) => (
  <Icon {...props} name='edit-2' fill='#8F9BB3' style={{ width: 30, height: 30, justifyContent: 'center', alignItems: 'end'}} />
);

export const InputPill = ({label, text, navigation=null, destination=null, fromManual=false, drugObj=null}) => {
  return (
    <View style={{alignItems: "flex-start", width: "100%", marginVertical: 8}}>
      <Text category='p2' style={{marginBottom: 8}}>{label}</Text>
      <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', width: "100%",
        border: `${colorTheme['light-green']} solid 3px`, borderRadius: 16, backgroundColor: "#ffffff", paddingLeft: 48
      }}>
        <Text style={{flex: 6}} category='p1'>{text}</Text>
        <Button style={{ flex: 3, ...buttonStyles.invisBorder, backgroundColor: colorTheme['light-green'],
          borderTopLeftRadius: 0, borderBottomLeftRadius: 0
        }} 
          onPress={() => navigation && navigation.navigate(destination, {fromManual, obj: drugObj})}
          children={() => (
            <Text category='p2'>Edit</Text>
          )}  
        />
      </View>
    </View>
    
  )
}

export const ConfirmScan = ({route, navigation}) => {
  const styles = StyleSheet.create({
    icon: {
      width: 100,
      height: 100,
    },
  })

  const editstyles = StyleSheet.create({
    icon: {
      width: 30,
      height: 30,
    },
  })

  const butstyles= StyleSheet.create({
    button: {
      width: 30,
      height: 30,
      margin: 2
    }
  })


  const [showBackModal, setShowBackModal] = useState(false);
  const DIN = route.params.results;
  const editedData = route.params.obj;

  async function getDrugInfo(DIN) {
    if (DIN) {
      const _drugProduct = await fetch(`https://health-products.canada.ca/api/drug/drugproduct/?din=${DIN}`).then(resp => resp.json());
      // const _drugProduct = await fetch(`https://health-products.canada.ca/api/drug/drugproduct/?din=0021`).then(resp => resp.json());
      const _code = _drugProduct[0].drug_code;
      const _name = _drugProduct[0].brand_name;
      return {
        name: _name,
        interval: {
          number: "Not",
          interval: "detected"
        },
        dose: {
          number: "Not",
          interval: "detected"
        },
      }
    }
    return {
      name: "DIN not detected",
      interval: {
        number: "Not",
        interval: "detected"
      },
      dose: {
        number: "Not",
        interval: "detected"
      },
    }
  }

  
  useEffect(() => {
    async function init() {
      const _drug = await getDrugInfo(DIN);
      setDrug(_drug);
    }
    init();
  }, [])

  const [focused, setFocused] = useState(true);
  useFocusEffect(useCallback(() => {
    setFocused(true);
    if (editedData) setDrug(editedData);
    return () => {
      setFocused(false);
    }
  },[focused]))

  const [drug, setDrug] = useState({
    name: "DIN not detected",
    interval: {
      number: "Not",
      interval: "detected"
    },
    dose: {
      number: "Not",
      interval: "detected"
    },
  });

  return (
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
                navigation.goBack();
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
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 40, backgroundColor: colorTheme['silver-white'], gap: 10}}>
        <ProgressBar size='giant' style={{width: "100%", marginBottom: 80}} animating={false} progress={.5}/>
        <View style={{ justifyContent: 'center', flexDirection: 'row', alignItems: 'flex-end'}}>
          <Image source={require("@/assets/icons/Capsule.svg")}/>
          <Button 
            style={butstyles.button}
            appearance='ghost'
            accessoryLeft={EditIcon}
            onPress={() => navigation.navigate("Icon Pick")}
          />
          {/* <Icon 
            style={editstyles.icon}
            fill='#8F9BB3'
            name='edit-2'
          /> */}
        </View>
        <View style={{justifyContent: "center", alignItems: "flex-start", width: "100%"}}>
          <InputPill label="Medication Name" text={drug.name} destination={"Edit Name"} navigation={navigation} drugObj={drug}/>
          <InputPill label="How Often" text={`${drug.interval.number} ${drug.interval.unit}`} destination={"Edit Time"} navigation={navigation} drugObj={drug}/>
          <InputPill label="Dose" text={`${drug.dose.number} ${drug.dose.unit}`} destination={"Edit Dose"} navigation={navigation} drugObj={drug}/>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 30, gap: 10, width: '100%'}}>
          <MyButton text="Next" styles={{...buttonStyles.orangerButton, ...buttonStyles.baseBigButton}} press={() => navigation.navigate("Extra Options", {obj: drug})} />
          <MyButton text="Scan Again" styles={{...buttonStyles.orangeBorder, ...buttonStyles.baseBigButton, backgroundColor: '#FFFFFF'}} press={() => setShowBackModal(true)}/>
        </View>
      </Layout>
    </SafeAreaView>
    </>
  );
};