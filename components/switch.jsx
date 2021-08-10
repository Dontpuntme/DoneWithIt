import React, { Component, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  Switch,
} from "react-native";
export default function SwitchTodo (props) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
   // console.log("props", this.props);
    return (
     <Switch style = {styles.switch}
        trackColor={{ false: "#767577", true: "#81b0ff" }}
       thumbColor={props.complete ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
       onChange={()=>props.handleSwitch(props.id)}
       onValueChange= {toggleSwitch}
        value={isEnabled}
      />
    );
  
  //console.log("Hello! I'm", this.props.name)
}


const styles = StyleSheet.create({
  task: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: '100%',
    height: 100,
    marginLeft: 50,
    marginTop: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    fontSize: 20,
  },
  switch:{
    marginHorizontal: 20,
  },
  button:{
    marginHorizontal: 20,
    backgroundColor: "red",
  },
  name:
  {
    width: '20%'
  }
});

