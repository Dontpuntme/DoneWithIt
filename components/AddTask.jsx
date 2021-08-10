import React, { useState, Component } from "react";
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  Button,
} from "react-native";
import SwitchTodo from "./switch"
export default function AddTask(props) {
    const [text, setText] = useState('');
    const changeHandler = (val) => {
      setText(val);
    };
    return (
      <View>
      <TextInput
      style = {styles.input}
      placeholder = 'new todo...'
      onChangeText= {changeHandler}
    />
    <View style = {styles.addButton}>
      <Button onPress = {() => props.handleAdd(text)} title = 'addTask' color = 'white'/>
      </View>
    </View>
     
    );

}



const styles = StyleSheet.create({
  input: {
    marginTop: 20,
    marginBottom: 10,
    paddingHorizontal:80,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    padding: 740,
    
  },

  addButton:
  {
    backgroundColor: "coral",

  },
});

