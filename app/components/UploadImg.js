import React from 'react';
import * as ImagePicker from 'expo-image-picker';
import { Button } from '@ui-kitten/components';

export default BlobUpload = ({ navigation, title}) => {

  const Upload = async (data) => {

    const _url = await fetch("http://localhost:7071/api/generateSASUrl", {
      method:"POST",
      body:JSON.stringify({
        imgname:"myimg.jpg"
      })
    });
    const _txt = await _url.text();
    
    console.log("What is url", _txt)
    //first get SAS url for putting a blob in there
    console.log("what is data", data);
    const _b64resp = await fetch(data);
    const _blob = await _b64resp.blob();
    console.log("what is blob", _blob);

    const _resp = await fetch(_txt, {
      method:"PUT",
      body:_blob,
      headers:{
        "x-ms-blob-type":"BlockBlob"
      }
    })

    const _ocr = await fetch("http://localhost:7071/api/doocr", {
      method:"POST",
      body:JSON.stringify({
        imgname:"myimg.jpg"
      })
    });

    const _result = await _ocr.json();
    console.log("what is the result", _result);
  }

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      // setImage(result.assets[0].uri);
      console.log(result.assets[0].base64)
      // const 
      Upload(result.assets[0].base64 || result.assets[0].uri);
    }
  };
  return (
    <>
      <Button onPress={()=>pickImage()}>Upload</Button>
    </>
  );
};