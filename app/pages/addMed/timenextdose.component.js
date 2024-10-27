import React from 'react';
import { SafeAreaView, View, ScrollView, } from 'react-native';
import { Button, Input, Layout, Text} from '@ui-kitten/components';
import { MyButton } from '@/app/components/MyButton';
import { styles } from '@/app/stylesheet';

import { default as colorTheme } from "@/custom-theme.json"

import { Header } from '@/app/components/header';

export const TimeDose = ({navigation}) => {
    const [value, setValue] = React.useState('');
    const [value2, setValue2] = React.useState('');
    const [value3, setValue3] = React.useState('');
    return (
        <SafeAreaView style={{ flex: 1 }}>
        <Header navigation={navigation} />
        <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: "2.5rem", backgroundColor: colorTheme['silver-white'], gap: 10}}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text category='h6'>Time for next dose?</Text>
            </View>

            <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', gap: 10 }}>
                <Input 
                    placeholder='Hour'
                    value={value}
                    onChangeText={nextValue => setValue(nextValue)}
                    style={{ width: '15%'}}
                />

                <Text category='s1'>:</Text>

                <Input 
                    placeholder='Minute'
                    value2={value2}
                    onChangeText={nextValue => setValue2(nextValue)}
                    style={{ width: '15%'}}
                />

                <Input 
                    placeholder='AM / PM'
                    value3={value3}
                    onChangeText={nextValue => setValue3(nextValue)}
                    style={{ width: '15%'}}
                />
            </View>

            <View style={{ flex: 3, justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                <MyButton text="Confirm" styles={{...styles.orangerButton, ...styles.baseBigButton}} />

            </View>
        </Layout>
        </SafeAreaView>
    );
};