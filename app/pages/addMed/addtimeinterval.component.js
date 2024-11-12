import { useState } from 'react';
import { SafeAreaView, View, ScrollView, } from 'react-native';
import { Button, Input, Layout, Text} from '@ui-kitten/components';
import { MyButton } from '@/app/components/MyButton';
import { styles } from '@/app/stylesheet';
import { DisplayDropdown } from '../../components/displayDropdown';


import { default as colorTheme } from "@/custom-theme.json"

import { Header } from '@/app/components/header';



export const SetTime = ({navigation, route}) => {
  const fromManual=route.params.fromManual;
  const obj = route.params.obj;
  const [intervalNumber, setIntervalNumber] = useState(0);
  const [intervalUnit, setIntervalUnit] = useState("Hours");
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header navigation={navigation} />
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: "40", backgroundColor: colorTheme['silver-white'], gap: 10}}>
        <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
          <Text category='h6'>Set time interval</Text>
        </View>

        <View style={{ flex: 7, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 16}}>
          <Text category='p2'>Every</Text>
          <Input
            placeholder='#'
            value={intervalNumber}
            onChangeText={nextValue => setIntervalNumber(nextValue)}
            style={{width: 80}}
          />
          <DisplayDropdown setUnit={setIntervalUnit} data={["Hours", "Days", "Months", "Years"]}/>
        </View>
        
        <View style={{ flex: 5, justifyContent: 'center', alignItems: 'center', width: '100%' }}>
          <MyButton text="Confirm" styles={{...styles.orangerButton, ...styles.baseBigButton}} press={() => {
            if (fromManual) navigation.navigate("Med Confirm", {obj: {...obj, interval: {number: intervalNumber, unit: intervalUnit}}});
            else navigation.navigate('Confirm Scan', {obj: {...obj, interval: {number: intervalNumber, unit: intervalUnit}}});
          }} />
        </View>

      </Layout>
    </SafeAreaView>
  );
};