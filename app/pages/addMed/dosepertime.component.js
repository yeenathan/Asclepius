import React from 'react';
import { SafeAreaView, View, ScrollView, } from 'react-native';
import { Button, Input, Layout, Text} from '@ui-kitten/components';
import { MyButton } from '@/app/components/MyButton';
import { styles } from '@/app/stylesheet';
import { Measure } from '@/app/components/measurements'



import { default as colorTheme } from "@/custom-theme.json"

import { Header } from '@/app/components/header';

export const DosePerTime = ({navigation, route}) => {
    const fromManual=route.params.fromManual;
    const [value, setValue] = React.useState('');
    return (
        <SafeAreaView style={{ flex: 1 }}>
        <Header navigation={navigation} />
        <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 40, backgroundColor: colorTheme['silver-white'], gap: 10}}>
            <View style={{ justifyContent: 'center', alignItems: 'center'}}>
                <Text category='h6'>Dose per time?</Text>
            </View>

            <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                <Input
                placeholder='#'
                value={value}
                onChangeText={nextValue => setValue(nextValue)}
                style={{width: 80}}
                />
                <Measure />
            </View>

            <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center', width: '100%' }}>
                <MyButton text="Confirm" styles={{...styles.orangerButton, ...styles.baseBigButton}} press={() => {
                    if (fromManual) navigation.navigate("Med Confirm");
                    else navigation.navigate('Confirm Med');
                    }} />
            </View>
        </Layout>
        </SafeAreaView>
    );
};