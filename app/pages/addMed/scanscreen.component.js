import React, { useState, useRef, useEffect } from 'react';
import { SafeAreaView, View, ScrollView, TouchableOpacity } from 'react-native';
import { Button, Layout, Text} from '@ui-kitten/components';
import { MyButton } from '@/app/components/MyButton';
import { styles } from '@/app/stylesheet';
import { CameraView, useCameraPermissions } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';

import { default as colorTheme } from "@/custom-theme.json"

import { Header } from '@/app/components/header';

export const ScanScreen = ({navigation}) => {

  const cameraRef = useRef();
  const [permission, requestPermission] = useCameraPermissions();
  const [hasMediaLibraryPermissions, setMediaLibraryPermissions] = useState();

  useEffect(() => {
    async function getMediaPermissions() {
      const mediaLibraryPermission = await MediaLibrary.requestPermissionsAsync();
      setMediaLibraryPermissions(mediaLibraryPermission.status === "granted");
    }
    getMediaPermissions();
  }, [permission, cameraRef])

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header navigation={navigation} />
      <Layout style={{...styles.masterLayoutNoNav}}>
        { 
          //Camera permissions are still loading.
          !permission?
            <View />
          //Camera permissions are not granted yet.
          : !permission.granted?
            <View style={{gap: 48, width: "90%", alignItems: 'center'}}>
              <Text category='p2'>Allow Camera Access?</Text>
              <Text category='s1' style={{textAlign: "center"}}>We need camera access to scan your medication details quickly and accurately.</Text>
              <View style={{gap: 16}}>
                <Button onPress={requestPermission} size="large" style={{borderRadius: 20}} children={() => <Text category="h2" style={{color: colorTheme['silver-white']}}>Allow Access</Text>}></Button>
                <Button onPress={() => navigation.goBack()} size="large" style={{ borderRadius: 20, backgroundColor: colorTheme['silver-white']}} children={() => <Text category="h2">Not Now</Text>}></Button>
              </View>
            </View>
          //Camera permissions are granted.
          : <View style={{gap: 12, flex: 1, width: "100%"}}>
              <CameraView style={{flex: 4}} ref={cameraRef}/>
              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start', padding: 16, backgroundColor: '#D9EDFF', borderRadius: 20}}>
                <Text category='p2'> Instructions</Text>
                <Text category='p1'> Position your camera over the label</Text>
                <Text category='p1'> Ensure the label is clear and well-lit</Text>
              </View>
              <MyButton text="Confirm" styles={{...styles.orangerButton, ...styles.baseBigButton}} press={() => navigation.navigate('Confirm Med')} />
            </View>
          }
      </Layout>
    </SafeAreaView>
  );
};