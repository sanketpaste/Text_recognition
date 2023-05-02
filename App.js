import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { launchImageLibrary,launchCamera } from 'react-native-image-picker'
import TextRecognition from 'react-native-text-recognition';

const App = () => {
  const [image, setImage] = useState(null)
  const [text, setText] = useState('')

  // useEffect(() => {
  //  launchCamera ({}, setImage)
  // }, [])
  const openCamera=()=>{
    launchCamera ({}, setImage)
  }

  const openGallery=()=>{
    launchImageLibrary ({}, setImage)
  }

  useEffect(() => {
    (async () => {
      if (image) {
        const result = await TextRecognition.recognize(image.assets[0].uri);
        console.log(result);

        setText(result)
      }
    })()

  }, [image])
  return (
    <View style={{flex:1,alignItems:'center',margin:20}}>
      <Text>text recgnition</Text>
      
      
      {
        text?<Text>{text}</Text>:null
      }

<View style={{
        margin:20,
        justifyContent:'center',
        alignItems:'center',
      }}>
      <TouchableOpacity onPress={openCamera}
       style={{
        backgroundColor:'orange',
        borderRadius:10,
        width:300,
        height:40,
        justifyContent:'center',
        alignItems:'center',
        margin:20
      }}>
        <Text>Open Camera</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={openGallery} style={{
        backgroundColor:'orange',
        borderRadius:10,
        width:300,
        height:40,
        justifyContent:'center',
        alignItems:'center',
       
      }}>
        <Text>Open Gallery</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})

 