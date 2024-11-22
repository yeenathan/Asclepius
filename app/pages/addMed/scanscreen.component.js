import React, { useState, useRef, useEffect } from 'react';
import { SafeAreaView, View, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native';
import { Button, ButtonGroup, Icon, Layout, Text} from '@ui-kitten/components';
import { MyButton } from '@/app/components/MyButton';
import { styles } from '@/app/stylesheet';
import { CameraView, useCameraPermissions, Camera } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';

import { default as colorTheme } from "@/custom-theme.json"

import { Header } from '@/app/components/header';

import { Upload } from "@/app/components/UploadImg"
import { OpenAIParser } from "@/app/components/OpenAIParser"

export const ScanScreen = ({navigation}) => {

  const cameraRef = useRef();
  const [camReady, setCamReady] = useState(false);
  const [permission, requestPermission] = useCameraPermissions();
  const [photo, setPhoto] = useState(null);
  const [photoTaken, setPhotoTaken] = useState(false);
  const [hasMediaLibraryPermissions, setMediaLibraryPermissions] = useState();

  const [loading, setLoading] = useState(false);
  const [drug, setDrug] = useState();

  useEffect(() => {
    async function getMediaPermissions() {
      const mediaLibraryPermission = await MediaLibrary.requestPermissionsAsync();
      setMediaLibraryPermissions(mediaLibraryPermission.status === "granted");
    }
    getMediaPermissions();
  }, [permission, cameraRef])

  function parseText(imageData) {
    let _text = "";
    const _lines = imageData[0].lines;
    for (const line of _lines) {
      for (const word of line.words) {
        _text += " "+word.text;
      }
    }
    return _text;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <Header navigation={navigation} /> */}
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
          : <>
            <View style={{width: Dimensions.get("window").width, height: Dimensions.get("window").height, position: "absolute", top: 0, left: 0}}>
              <View style={{backgroundColor: "#ffffff00", position: "absolute", zIndex: 1, padding: 32, width: "100%"}}>
                <Icon name="arrow-back" style={{maxWidth: 32}} onPress={() => navigation.goBack()} />
              </View>
              { !photoTaken?
                <CameraView style={{flex: 1}} ref={cameraRef}
                  onCameraReady={() => setCamReady(true)}
                /> :
                <Image source={{uri: `${photo.uri}`}} style={{flex: 1}}/>
              }
            </View>
            <View style={{width: "100%", alignItems: "center", position: "absolute", bottom: 32}}> {/*button view*/}
              <Button
                  style={{backgroundColor: "#000000aa", ...styles.invisBorder, width: "80%"}}
                  size='large'
                  onPress={async () => {
                    if (loading) return;
                    if (!loading && photoTaken) navigation.navigate("Form", {drug: drug});
                    if (camReady && !photoTaken) {
                      const _photo = await cameraRef.current.takePictureAsync({quality: 0.2})
                      setPhoto(_photo);
                      setPhotoTaken(true);
                      setLoading(true);
                      const _imageData = await Upload(_photo.uri || _photo.base64);
                      setDrug(await OpenAIParser(parseText(_imageData)));
                      setLoading(false);
                    }
                  }}
                  children={() => {
                    return (
                      <View style={{alignItems: "flex-start", paddingHorizontal: 16}}>
                        <Text style={{color: colorTheme['silver-white']}} category='p2'>{photoTaken? (loading? "Loading...": drug.name || "Not detected") : "Take Photo"}</Text>
                        <Text style={{color: colorTheme['silver-white']}} category='c1'>{photoTaken? (loading? "Please wait" : "Continue") : "Start scanning"}</Text>
                      </View>
                    )
                  }}
              ></Button>
              {photoTaken && <Text category='p2' style={{textAlign: "center", color: colorTheme['silver-white'], marginTop: 8}} onPress={() => setPhotoTaken(false)}>Retake</Text>}
            </View>
            </>
          }
      </Layout>
    </SafeAreaView>
  );
};