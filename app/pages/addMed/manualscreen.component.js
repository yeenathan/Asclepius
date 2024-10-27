import React from 'react';
import { View, SafeAreaView } from 'react-native';
import { Button, Layout, ProgressBar, Text} from '@ui-kitten/components';
import { MyButton } from "@/app/components/MyButton"
import { DisplayDropdown } from "@/app/components/displayDropdown"

import { Header } from "@/app/components/header"

import { styles } from '@/app/stylesheet';
import { SuggestionSearch } from "@/app/components/suggestionSearch"

export const ManualDoseEdit = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>

    </SafeAreaView>
  )
}

export const ManualNameEdit = ({navigation}) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header navigation={navigation}/>
      <Layout style={styles.masterLayout}>
        <View style={{flex: 7, alignItems: "center", gap: "1rem", width: "100%"}}>
          <ProgressBar style={{width: "100%"}} progress={.25}/>
          <Text category='h2'>What is the medication name?</Text>
          <Text category='p1'>Search or type your medication name</Text>
          <SuggestionSearch />
        </View>
        <View style={{flex: 2, width: "100%"}}>
          <MyButton text="Confirm" styles={{...styles.baseBigButton, ...styles.orangerButton}} press={() => navigation.navigate("Manual Interval")}/>
        </View>
      </Layout>
    </SafeAreaView>
  )
}

export const ManualIntervalEdit = ({navigation}) => {
  return (
    <SafeAreaView style={{ flex: 1}}>
      <Header navigation={navigation}/>
      <Layout style={styles.masterLayout}>
        <View style={{flex: 7, alignItems: "center", gap: "1rem", width: "100%"}}>
          <ProgressBar style={{width: "100%"}} progress={.5}/>
          <DisplayDropdown data={["Hours", "Days", "Months", "Years"]}/>
        </View>
        <View style={{flex: 2, width: "100%"}}>
          <MyButton text="Confirm" styles={{...styles.baseBigButton, ...styles.orangerButton}} press={() => navigation.navigate("Manual Interval")}/>
        </View>
      </Layout>
    </SafeAreaView>
  )
}