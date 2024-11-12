import React from 'react';
import * as ImagePicker from 'expo-image-picker';
import { Button } from '@ui-kitten/components';

export const Upload = async (data, setUploading) => {

  const _url = await fetch("https://remedify-ocr.azurewebsites.net/api/generateSASUrl?", {
    method:"POST",
    body:JSON.stringify({
      imgname:"myimg.jpg"
    })
  });
  const _txt = await _url.text(); //sas url
  
  //first get SAS url for putting a blob in there
  const _b64resp = await fetch(data);
  const _blob = await _b64resp.blob();

  const _resp = await fetch(_txt, {
    method:"PUT",
    body:_blob,
    headers:{
      "x-ms-blob-type":"BlockBlob"
    }
  })

  const _ocr = await fetch("https://remedify-ocr.azurewebsites.net/api/doOCR?", {
    method:"POST",
    body:JSON.stringify({
      imgname:"myimg.jpg"
    })
  });

  const _result = await _ocr.json();
  setUploading(false);
  return _result.analyzeResult.readResults;
}