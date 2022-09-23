import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Image, TouchableOpacity, Alert } from 'react-native';

import Cartilha from './components/Cartilha'

export default function App() {

  return (
    <View >
      <Image source={require('./assets/setAmarelo.jpg')} style={img.logo} />
      <Cartilha/>
    </View>
  )
}

const img= StyleSheet.create({
  logo:{
    width: 250,
    height:250,
    alignItems: "center",
  } 
})