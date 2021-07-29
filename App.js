import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback,TouchableOpacity,Image, SafeAreaView, Button, Alert } from 'react-native';

export default function App() {
  const handlePress = () => console.log("Text pressed")
  return ( 
    <SafeAreaView style={styles.container}>
      <Text numberOfLines = {1} onPress={handlePress}>Hello World</Text>
      <Button color = "orange" title="Click me" onPress = {()=>Alert.alert("Button Tapped", "My Message", [{text: "Yes"},{ text: "No"}])}></Button>
      <TouchableOpacity onPress={() => console.log("Image tapped")}>
        <Image style = {styles.tinyLogo} source = {require('./assets/icon.png')}/>
      </TouchableOpacity>
      
    </SafeAreaView>
 );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center', 
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
});
