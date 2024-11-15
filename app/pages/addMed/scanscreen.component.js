import React, { useState, useRef, useEffect } from 'react';
import { SafeAreaView, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Button, ButtonGroup, Layout, Text} from '@ui-kitten/components';
import { MyButton } from '@/app/components/MyButton';
import { styles } from '@/app/stylesheet';
import { CameraView, useCameraPermissions, Camera } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';

import { default as colorTheme } from "@/custom-theme.json"

import { Header } from '@/app/components/header';

import { Upload } from "@/app/components/UploadImg"

export const ScanScreen = ({navigation}) => {

  const cameraRef = useRef();
  const [camReady, setCamReady] = useState(false);
  const [permission, requestPermission] = useCameraPermissions();
  const [photo, setPhoto] = useState(null);
  const [photoTaken, setPhotoTaken] = useState(false);
  const [hasMediaLibraryPermissions, setMediaLibraryPermissions] = useState();

  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    async function getMediaPermissions() {
      const mediaLibraryPermission = await MediaLibrary.requestPermissionsAsync();
      setMediaLibraryPermissions(mediaLibraryPermission.status === "granted");
    }
    getMediaPermissions();
  }, [permission, cameraRef])

  function getDIN(imageData) {
    const _DIN_REGEX = /^[0-9]{8}$/;
    // console.log(_DIN_REGEX.test("12345678"));
    const _lines = imageData[0].lines;
    for (const line of _lines) {
      for (const word of line.words) {
        if (_DIN_REGEX.test(word.text)) return word.text;
      }
    }
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
                <Button onPress={requestPermission} size="medium">Allow Access</Button>
                <Button onPress={() => navigation.goBack()} appearance='outline' size='medium'>Go Back</Button>
              </View>
            </View>
          //Camera permissions are granted.
          : <View style={{gap: 12, flex: 1, width: "100%"}}>
              { !photoTaken?
                <>
                <CameraView style={{flex: 5}} ref={cameraRef}
                  onCameraReady={() => setCamReady(true)}
                />
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start', paddingHorizontal: 16, backgroundColor: '#D9EDFF', borderRadius: 20}}>
                  <Text category='p2'> Instructions</Text>
                  <Text category='p1'> Position your camera over the label</Text>
                  <Text category='p1'> Ensure the label is clear and well-lit</Text>
                </View>
                <Button
                  style={{...styles.orangerButton}}
                  onPress={async () => {
                    if (camReady) {
                      const _photo = await cameraRef.current.takePictureAsync({quality: 0.2})
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
                    {!uploading?
                    <View style={{flexDirection: "row", gap: 4}}>
                      <Button style={{flex: 1}} onPress={() => setPhotoTaken(false)}>Retake</Button>
                      <Button style={{...styles.orangerButton, flex: 1}} onPress={async () => {
                        setUploading(true);
                        const _imageData = await Upload(photo.uri || photo.base64, setUploading);
                        navigation.navigate("Confirm Scan", {results: getDIN(_imageData)});
                      }}>Confirm</Button>
                    </View>
                    : <Text style={{textAlign: "center"}}>Loading...</Text>
                    }
                  </View>
              }
            </View>
          }
      </Layout>
    </SafeAreaView>
  );
};