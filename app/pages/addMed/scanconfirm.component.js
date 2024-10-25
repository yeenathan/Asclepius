import React from 'react';
import { SafeAreaView, styles, StyleSheet, View } from 'react-native';
import { Button, Icon, Layout, Text, IconElement, Input, ButtonGroup} from '@ui-kitten/components';

import { default as colorTheme } from "@/custom-theme.json"

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


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: "2.5rem", backgroundColor: colorTheme['silver-white'], gap: 10}}>
        

        <View style={{ justifyContent: 'center', flexDirection: 'row', alignItems: 'flex-end' }}>
        <Icon 
          style={styles.icon}
          fill='#8F9BB3'
          name='gift'
        />
          <Icon 
            style={editstyles.icon}
            fill='#8F9BB3'
            name='edit-2'
          />
        </View>

        <Text style={{ flexDirection: 'row'}} category='h6'>Medication Name</Text>

        <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', backgroundColor: "white", width: '90%', borderRadius: 20 }}>
          <Input style={{ flex: 6}} placeholder='Lisinopril'/>
          <Button style={{ flex: 3 }} onPress={() => navigation.navigate("Edit Med")}>Edit</Button>
        </View>

        <Text style={{ flexDirection: 'row'}} category='h6'>How Often</Text>

        <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', backgroundColor: "white", width: '90%', borderRadius: 20 }}>
          <Input style={{ flex: 6}} placeholder='Once per day'/>
          <Button style={{ flex: 3 }} onPress={() => navigation.navigate("Edit Med")}>Edit</Button>
        </View>

        <Text style={{ flexDirection: 'row'}} category='h6'>Dose</Text>

        <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', backgroundColor: "white", width: '90%', borderRadius: 20 }}>
          <Input style={{ flex: 6}} placeholder='1 tablet'/>
          <Button style={{ flex: 3 }} onPress={() => navigation.navigate("Edit Med")}>Edit</Button>
        </View>

        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 30, gap: 10}}>
          <Button style={{ backgroundColor: '#FFB057', borderColor: '#FFB057' }} size='large'>Confirm</Button>
          <Button style={{ backgroundColor: '#FFFFFF', borderColor: '#FFB057', }} size='large'>Scan Again</Button>
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