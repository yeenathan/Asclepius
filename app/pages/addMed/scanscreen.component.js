import React, { useState, useRef, useEffect } from 'react';
import { SafeAreaView, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Button, ButtonGroup, Layout, Text} from '@ui-kitten/components';
import { MyButton } from '@/app/components/MyButton';
import { styles } from '@/app/stylesheet';
import { CameraView, useCameraPermissions, Camera } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';

import { default as colorTheme } from "@/custom-theme.json"

import { Header } from '@/app/components/header';

export const ScanScreen = ({navigation}) => {

  const cameraRef = useRef();
  const [camReady, setCamReady] = useState(false);
  const [permission, requestPermission] = useCameraPermissions();
  const [photo, setPhoto] = useState(null);
  const [azureData, setAzureData] = useState(null);
  const [photoTaken, setPhotoTaken] = useState(false);
  const [hasMediaLibraryPermissions, setMediaLibraryPermissions] = useState();

  useEffect(() => {
    async function getMediaPermissions() {
      const mediaLibraryPermission = await MediaLibrary.requestPermissionsAsync();
      setMediaLibraryPermissions(mediaLibraryPermission.status === "granted");
    }
    getMediaPermissions();
  }, [permission, cameraRef])

  async function callAzure(photo) {
    fetch("https://remedify-ocr-vision.azurewebsites.net/api/httpTrigger1")
    .then(response => console.log(response))
    .then(data => console.log(data));
    return;
  }

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
              { !photoTaken?
                <>
                <CameraView style={{flex: 5}} ref={cameraRef}
                  onCameraReady={() => setCamReady(true)}
                />
                <Button
                  style={{}}
                  onPress={async () => {
                    if (camReady) {
                      const _photo = await cameraRef.current.takePictureAsync()
                      console.log("what is photo", _photo)
                      setPhoto(_photo);
                      setPhotoTaken(true);
                    }
                  }}
                  children={() => <Text>Take Photo</Text>}
                />
                </>
                : <View style={{flex: 5, gap: 12, width: "100%"}}>
                    {/* <Text>{photo.uri}</Text> */}
                    <Image source={{uri: `${photo.uri}`}} style={{flex: 1}}/>
                    <Button onPress={() => setPhotoTaken(false)}>Retake</Button>
                  </View>
              }
              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start', paddingHorizontal: 16, backgroundColor: '#D9EDFF', borderRadius: 20}}>
                <Text category='p2'> Instructions</Text>
                <Text category='p1'> Position your camera over the label</Text>
                <Text category='p1'> Ensure the label is clear and well-lit</Text>
              </View>
              <MyButton text="Confirm" styles={{...styles.orangerButton, ...styles.baseBigButton}} press={async () => setAzureData(await callAzure(photo))} />
            </View>
          }
      </Layout>
    </SafeAreaView>
  );
};