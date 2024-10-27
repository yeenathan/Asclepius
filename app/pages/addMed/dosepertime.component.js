import React from 'react';
import { SafeAreaView, View, ScrollView, } from 'react-native';
import { Button, Input, Layout, Text} from '@ui-kitten/components';
import { MyButton } from '@/app/components/MyButton';
import { styles } from '@/app/stylesheet';
import { Measure } from '@/app/components/measurements'



import { default as colorTheme } from "@/custom-theme.json"

import { Header } from '@/app/components/header';

export const DosePerTime = ({navigation}) => {
    const [value, setValue] = React.useState('');
    return (
        <SafeAreaView style={{ flex: 1 }}>
        <Header navigation={navigation} />
        <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: "2.5rem", backgroundColor: colorTheme['silver-white'], gap: 10}}>
            <View style={{ justifyContent: 'center', alignItems: 'center'}}>
                <Text category='h6'>Dose per time?</Text>
            </View>

            <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                <Input
                placeholder='#'
                value={value}
                onChangeText={nextValue => setValue(nextValue)}
                style={{width: "5rem"}}
                />
                <Measure />
            </View>

            <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center', width: '100%' }}>
<<<<<<< HEAD
                <MyButton text="Confirm" styles={{...styles.orangerButton, ...styles.baseBigButton}} press={() => navigation.navigate('Confirm Med')} />
=======
                <MyButton text="Confirm" styles={{...styles.orangerButton, ...styles.baseBigButton}} press={() => navigation.navigate('Next Dose')}/>
>>>>>>> deluka
            </View>

           

        </Layout>
        </SafeAreaView>
    );
};