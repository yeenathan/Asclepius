import React from 'react';
import { SafeAreaView, View, ScrollView, } from 'react-native';
import { Button, Input, Layout, Text} from '@ui-kitten/components';
import { MyButton } from '@/app/components/MyButton';
import { styles } from '@/app/stylesheet';
import { DisplayDropdown } from '../../components/displayDropdown';


import { default as colorTheme } from "@/custom-theme.json"

import { Header } from '@/app/components/header';



export const SetDuration = ({navigation}) => {
  const [value, setValue] = React.useState('');
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header navigation={navigation} />
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: "2.5rem", backgroundColor: colorTheme['silver-white'], gap: 10}}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text category='h6'>Set date Duration</Text>
        </View>

        <View style={{ flex: 2, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: "1rem"}}>
          <Input
            placeholder='#'
            value={value}
            onChangeText={nextValue => setValue(nextValue)}
            style={{width: "5rem"}}
          />
          <DisplayDropdown data={["Hours", "Days", "Months", "Years"]}/>
        </View>

        <View style={{ flex: 3, justifyContent: 'center', alignItems: 'center' }}>
            <Text category='h6'>From</Text>
        </View>

        <View style={{ flex: 4, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: "1rem" }}>
            <Input
                placeholder='#'
                value={value}
                onChangeText={nextValue => setValue(nextValue)}
                style={{width: "5rem"}}
            />
            <DisplayDropdown data={["Hours", "Days", "Months", "Years"]}/>
        </View>
        
        <View style={{ flex: 5, justifyContent: 'center', alignItems: 'center', width: '100%' }}>
          <MyButton text="Confirm" styles={{...styles.orangerButton, ...styles.baseBigButton}} press={() => navigation.navigate('Confirm Med')} />
        </View>

      </Layout>
    </SafeAreaView>
  );
};