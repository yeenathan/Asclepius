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

  async function getDrugInfo(DIN=null) {
    const _drugProduct = await fetch(`https://health-products.canada.ca/api/drug/drugproduct/?din=${DIN}`).then(resp => resp.json());
    // const _drugProduct = await fetch(`https://health-products.canada.ca/api/drug/drugproduct/?din=0021`).then(resp => resp.json());
    if (!_drugProduct[0]) {
      return {
        name: "DIN not detected",
        duration: 0,
        frequency: 0
      }
    }
    const _code = _drugProduct[0].drug_code;
    const _name = _drugProduct[0].brand_name;
    return {
      name: _name,
      duration: 0,
      frequency: 0
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
                <CameraView style={{flex: 5}} ref={cameraRef}
                  onCameraReady={() => setCamReady(true)}
                /> :
                <Image source={{uri: `${photo.uri}`}} style={{flex: 1}}/>
              }
                <Button
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
                      // setDrug(await getDrugInfo(
                      //   getDIN(_imageData)
                      // ));
                      setDrug(await OpenAIParser(parseText(_imageData)));
                      setLoading(false);
                    }
                  }}
                >{photoTaken? (loading? "Loading...": drug.name) : "Take Photo"}</Button>
                {photoTaken && <Text category='p2' style={{textAlign: "center", color: colorTheme['persian-green']}} onPress={() => setPhotoTaken(false)}>Retake</Text>}
            </View>
          }
      </Layout>
    </SafeAreaView>
  );
};