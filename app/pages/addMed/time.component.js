import React, { useState, useRef, useEffect } from 'react';
import { SafeAreaView, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Button, ButtonGroup, Layout, Text} from '@ui-kitten/components';
import { MyButton } from '@/app/components/MyButton';
import { styles } from '@/app/stylesheet';
import { CameraView, useCameraPermissions, Camera } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import TimePicker from '../../components/time';

import { default as colorTheme } from "@/custom-theme.json"

import { Header } from '@/app/components/header';

import { Upload } from "@/app/components/UploadImg"

export const ScheduleDose = ({navigation}) => {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header navigation={navigation} />
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 40, backgroundColor: colorTheme['silver-white'], gap: 10}}>
            <View style={{ flex: 1, justifyConten: 'end', alignItems: 'center', gap: 30}}>
                <Text category='h6'>When is your nex scheduled dose?</Text>
                <TimePicker />
            </View>


        </Layout>
    </SafeAreaView>
  );
};