import React from 'react';
import { Image, SafeAreaView, StyleSheet, View } from 'react-native';
import { Button, Icon, Layout, Text, IconElement, Input, ButtonGroup} from '@ui-kitten/components';
import { default as colorTheme } from "@/custom-theme.json"
import { MyButton } from "@/app/components/MyButton"
import { styles as buttonStyles } from '@/app/stylesheet';

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

  const [value, setValue] = React.useState('');

  const InputPill = ({label, text, destination}) => {
    return (
      <View style={{alignItems: "flex-start", width: "100%", marginVertical: ".5rem"}}>
        <Text category='p2'>{label}</Text>
        <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', width: "100%",
          border: `${colorTheme['light-green']} solid 3px`, borderRadius: "1rem", backgroundColor: "#ffffff", paddingLeft: "3rem"
        }}>
          <Text style={{flex: 6}} category='p1'>{text}</Text>
          <Button style={{ flex: 3, ...buttonStyles.invisBorder, backgroundColor: colorTheme['light-green'],
            borderTopLeftRadius: "0", borderBottomLeftRadius: "0"
          }} 
            onPress={() => navigation.navigate(destination)}
            children={() => (
              <Text category='p2'>Edit</Text>
            )}  
          />
        </View>
      </View>
      
    )
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: "2.5rem", backgroundColor: colorTheme['silver-white'], gap: 10}}>
        <View style={{ justifyContent: 'center', flexDirection: 'row', alignItems: 'flex-end' }}>
          <Image source={require("@/assets/icons/Capsule.svg")}/>
          <Icon 
            style={editstyles.icon}
            fill='#8F9BB3'
            name='edit-2'
          />
        </View>

        <View style={{justifyContent: "center", alignItems: "flex-start", width: "100%"}}>
          <InputPill label="Medication Name" text="Lisinopril" destination={"Edit Med"}/>
          <InputPill label="How Often" text="Once per day" destination={"Med Time"}/>
          <InputPill label="Dose" text="1 tablet" destination={"Dose Time"}/>
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
          <MyButton text="Confirm" styles={{...buttonStyles.orangerButton, ...buttonStyles.baseBigButton}} press={() => navigation.navigate('Edit Med')} />
          <MyButton text="Scan Again" styles={{...buttonStyles.orangeBorder, ...buttonStyles.baseBigButton, backgroundColor: '#FFFFFF'}} press={() => navigation.navigate('Scan')}/>
        </View>

        {/* <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: "white", width: 300, height: 55, borderRadius: 20, borderColor: '#89CCC8' }}>
          <Text category='s1'>FML</Text>
          <Button style={{ backgroundColor: 'blue', marginLeft: '14em', marginBottom: '1.4em', height: 55, borderTopRightRadius: 20, borderBottomRightRadius: 20 }}>
            Hello
          </Button>
        </View> */}



      </Layout>
    </SafeAreaView>
  );
};