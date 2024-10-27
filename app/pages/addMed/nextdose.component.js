import React from 'react';
import { SafeAreaView, View, ScrollView, } from 'react-native';
import { Button, Input, Layout, Text} from '@ui-kitten/components';
import { MyButton } from '@/app/components/MyButton';
import { styles } from '@/app/stylesheet';
import { DoseMonth } from '../../components/dateNextDose';
import { DoseDay } from '../../components/Date';

import { default as colorTheme } from "@/custom-theme.json"

import { Header } from '@/app/components/header';

export const NextDose = ({navigation}) => {
    const [value, setValue] = React.useState('');
    return (
        <SafeAreaView style={{ flex: 1 }}>
        <Header navigation={navigation} />
        <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: "2.5rem", backgroundColor: colorTheme['silver-white'], gap: 10}}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text category='h6'>Date for next dose</Text>
            </View>
            <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', minWidth: '100%'}}>
                <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                    <DoseDay />
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                    <DoseMonth />
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                    <Input
                        placeholder='Year'
                        value={value}
                        onChangeText={nextValue => setValue(nextValue)}
                    />
                </View>
            </View>

            <View style={{ flex: 3, justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                <MyButton text="Confirm" styles={{...styles.orangerButton, ...styles.baseBigButton}} press={() => navigation.navigate('Time Dose')}/>
            </View>
        </Layout>
        </SafeAreaView>
    );
};