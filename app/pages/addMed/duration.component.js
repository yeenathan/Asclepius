import React from 'react';
import { SafeAreaView, View, ScrollView, } from 'react-native';
import { Button, Input, Layout, Text} from '@ui-kitten/components';
import { MyButton } from '@/app/components/MyButton';
import { styles } from '@/app/stylesheet';
import { DisplayDropdown } from '../../components/displayDropdown';
import { DoseMonth } from '@/app/components/dateNextDose';
import { Datepicker } from '@ui-kitten/components';


import { default as colorTheme } from "@/custom-theme.json"

import { Header } from '@/app/components/header';



export const SetDuration = ({navigation, route}) => {
  const [value, setValue] = React.useState('');
  const [value2, setValue2] = React.useState('');
  const [value3, setValue3] = React.useState('');
  const [value4, setValue4] = React.useState('');

  const [date, setDate] = React.useState(new Date());
  const obj = route.params.obj;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header navigation={navigation} />
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 40, backgroundColor: colorTheme['silver-white'], gap: 10}}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text category='h6'>Set date</Text>
        </View>

        {/* <View style={{ flex: 2, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 16}}>
          <Input
            placeholder='#'
            value={value}
            onChangeText={nextValue => setValue(nextValue)}
            style={{width: 80}}
          />    
          <DoseMonth />

          <Input
            placeholder='Year'
            value={value2}
            onChangeText={nextValue => setValue2(nextValue)}
            style={{width: 80}}
          />   
        </View>

        <View style={{ flex: 3, justifyContent: 'center', alignItems: 'center' }}>
            <Text category='h6'>From</Text>
        </View>

        <View style={{ flex: 4, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 16 }}>
            <Input
                placeholder='#'
                value={value3}
                onChangeText={nextValue => setValue3(nextValue)}
                style={{width: 80}}
            />
            <DoseMonth />
            <Input
                placeholder='#'
                value={value4}
                onChangeText={nextValue => setValue4(nextValue)}
                style={{width: 80}}
            />
        </View> */}
        <Datepicker date={date} onSelect={nextDate => setDate(nextDate)}/>
        
        <View style={{ flex: 5, justifyContent: 'center', alignItems: 'center', width: '100%' }}>
          <MyButton text="Confirm" styles={{...styles.orangerButton, ...styles.baseBigButton}} press={() => navigation.navigate('Extra Options', {obj: obj})} />
        </View>

      </Layout>
    </SafeAreaView>
  );
};