import React, {useState} from 'react';
import { Image, SafeAreaView, StyleSheet, View } from 'react-native';
import { Button, Icon, Layout, Text, Modal, IconElement, Input, ButtonGroup, ProgressBar} from '@ui-kitten/components';
import { default as colorTheme } from "@/custom-theme.json"
import { MyButton } from "@/app/components/MyButton"
import { styles as buttonStyles } from '@/app/stylesheet';
import { medication } from '@/app/data/addMedData';
import { Header } from '@/app/components/header';


const EditIcon = (props) => (
  <Icon {...props} name='edit-2' fill='#8F9BB3' style={{ width: 30, height: 30, justifyContent: 'center', alignItems: 'end'}} />
);

export const InputPill = ({label, text, navigation=null, destination=null, fromManual=false}) => {
  return (
    <View style={{alignItems: "flex-start", width: "100%", marginVertical: ".5rem"}}>
      <Text category='p2' style={{marginBottom: ".5rem"}}>{label}</Text>
      <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', width: "100%",
        border: `${colorTheme['light-green']} solid 3px`, borderRadius: "1rem", backgroundColor: "#ffffff", paddingLeft: "3rem"
      }}>
        <Text style={{flex: 6}} category='p1'>{text}</Text>
        <Button style={{ flex: 3, ...buttonStyles.invisBorder, backgroundColor: colorTheme['light-green'],
          borderTopLeftRadius: "0", borderBottomLeftRadius: "0"
        }} 
          onPress={() => navigation && navigation.navigate(destination, {fromManual})}
          children={() => (
            <Text category='p2'>Edit</Text>
          )}  
        />
      </View>
    </View>
    
  )
}

export const ConfirmScan = ({navigation}) => {
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



  const [value, setValue] = React.useState('');

  

  const [showBackModal, setShowBackModal] = useState(false);

  return (
    <>
    <Modal
        visible={showBackModal}
        backdropStyle={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        onBackdropPress={() => setShowBackModal(false)}
      >
        <View style={{backgroundColor: "#ffffff", alignItems: "center", padding: "2rem", borderRadius: "2rem"}}>
          <Text category="p2">Discard changes and exit?</Text>
          <View style={{ display: "flex", flexDirection: "row", gap: "1rem", marginTop: "1rem", width: "100%" }}>
            <Button
              size="small"
              onPress={() => setShowBackModal(false)}
              style={{
                flex: 1,
                backgroundColor: colorTheme["silver-white"],
                borderColor: colorTheme["light-green"],
                borderRadius: "1rem",
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
                borderRadius: "1rem",
              }}
              children={() => <Text category="p2">Exit</Text>}
            />
          </View>
        </View>
    </Modal>
    <SafeAreaView style={{ flex: 1 }}>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: "2.5rem", backgroundColor: colorTheme['silver-white'], gap: 10}}>
        <ProgressBar size='giant' style={{width: "100%", marginBottom: "5rem"}} animating={false} progress={.5}/>
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
          <InputPill label="Medication Name" text="Lisinopril" destination={"Edit Med"} navigation={navigation}/>
          <InputPill label="How Often" text="Once per day" destination={"Med Time"} navigation={navigation}/>
          <InputPill label="Dose" text="1 tablet" destination={"Dose Time"} navigation={navigation}/>
        </View>


        {/* <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', backgroundColor: "white", width: '90%', borderRadius: 20 }}>
          <Input style={{ flex: 6}} placeholder='Once per day'/>
          <Button style={{ flex: 3 }} onPress={() => navigation.navigate("Edit Med")}>Edit</Button>
        </View> */}

        {/* <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', backgroundColor: "white", width: '90%', borderRadius: 20 }}>
          <Input style={{ flex: 6}} placeholder='1 tablet'/>
          <Button style={{ flex: 3 }} onPress={() => navigation.navigate("Edit Med")}>Edit</Button>
        </View> */}

        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 30, gap: 10, width: '100%'}}>
          <MyButton text="Next" styles={{...buttonStyles.orangerButton, ...buttonStyles.baseBigButton}} press={() => navigation.navigate("Extra Options")} />
          <MyButton text="Scan Again" styles={{...buttonStyles.orangeBorder, ...buttonStyles.baseBigButton, backgroundColor: '#FFFFFF'}} press={() => setShowBackModal(true)}/>
        </View>

        {/* <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: "white", width: 300, height: 55, borderRadius: 20, borderColor: '#89CCC8' }}>
          <Text category='s1'>FML</Text>
          <Button style={{ backgroundColor: 'blue', marginLeft: '14em', marginBottom: '1.4em', height: 55, borderTopRightRadius: 20, borderBottomRightRadius: 20 }}>
            Hello
          </Button>
        </View> */}
      </Layout>
    </SafeAreaView>
    </>
  );
};