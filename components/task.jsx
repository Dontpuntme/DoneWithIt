import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  Switch,
} from "react-native";
import SwitchTodo from "./switch"
class Task extends Component {
  render() {
  //  console.log("props", this.props);
    return (
      <View style={styles.task}><Text style = {styles.name} > {this.props.name}</Text>
      <SwitchTodo complete = {this.props.complete} id = {this.props.id} handleSwitch = {this.props.handleSwitch}/>
      <View style = {styles.button}>
        <Button title = "delete" onPress = {()=>this.props.handleDelete(this.props.id)} color = "white"/>
        </View></View>
    );
  }
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

export default Task;
