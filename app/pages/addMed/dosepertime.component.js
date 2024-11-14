import { useState } from 'react';
import { SafeAreaView, View, ScrollView, } from 'react-native';
import { Button, Input, Layout, Text} from '@ui-kitten/components';
import { MyButton } from '@/app/components/MyButton';
import { styles } from '@/app/stylesheet';
import { Measure } from '@/app/components/measurements'



import { default as colorTheme } from "@/custom-theme.json"

import { Header } from '@/app/components/header';
import { DisplayDropdown } from '@/app/components/displayDropdown';

export const DosePerTime = ({navigation, route}) => {
    const fromManual=route.params.fromManual;
    const obj = route.params.obj;
    const [doseNumber, setDoseNumber] = useState(0);
    const [doseUnit, setDoseUnit] = useState("Pill(s)");
    return (
        <SafeAreaView style={{ flex: 1 }}>
        <Header navigation={navigation} />
        <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 40, backgroundColor: colorTheme['silver-white'], gap: 10}}>
            <View style={{ justifyContent: 'center', alignItems: 'center'}}>
                <Text category='h6'>Dose per time interval?</Text>
            </View>

            <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                <Input
                placeholder='#'
                value={doseNumber}
                onChangeText={nextValue => setDoseNumber(nextValue)}
                style={{width: 80}}
                />
                <DisplayDropdown setUnit={setDoseUnit} data={["Pill(s)", "mL", "CC", "Unit(s)", "Application(s)", "Pen(s)"]}/>
            </View>

            <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center', width: '100%' }}>
                <MyButton text="Confirm" styles={{...styles.orangerButton, ...styles.baseBigButton}} press={() => {
                    if (fromManual) navigation.navigate("Med Confirm", {obj: {...obj, dose: {number: doseNumber, unit: doseUnit}}});
                    else navigation.navigate('Confirm Scan', {obj: {...obj, dose: {number: doseNumber, unit: doseUnit}}});
                }} />
            </View>
        </Layout>
        </SafeAreaView>
    );
};