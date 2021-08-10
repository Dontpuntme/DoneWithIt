import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Switch,
  SafeAreaView,
  View,
  Text,
  FlatList,
  Button
} from "react-native";
import Task from "./components/task";
//import tasks from "./components/tasks";
import AddTask from "./components/AddTask";
export default function App() {
  const [tasks, setTask] = useState([
    { name: "Brush Teeth", complete: false, id: "1" },
    { name: "Shower", complete: false, id: "2" },
    { name: "Clothes", complete: false, id: "3" },
    { name: "Tea", complete: false  , id: "4" },
  ]);
  // this is the event handler for changing the counters array state
  handleDelete = (key) => {
    // console.log("Event Handler Called", key);
    setTask((prevTasks) => {
      return prevTasks.filter(testtwo=> testtwo.id != key)
    }
    )
  };
  handleSwitch = (key) => {
    // console.log("Event Handler Called", key);
    setTask((prevTasks) => {
      prevTasks.forEach((element)=>  {if(element.id == key) element.complete = !element.complete});
      return prevTasks;
    })
  };
  handleAdd = (test) =>
  {
    setTask((prevTasks)=>{
      return[{ name: test, complete: false, id: Math.random().toString()},
        ...prevTasks
    ]
    })
  }

 
  return (
    <SafeAreaView style={[styles.container]}>
      <AddTask handleAdd = {handleAdd}/>
      <FlatList
        
        data={tasks}
        keyExtractor = {(item) => item.id}
        renderItem={({item}) => (
        <Task name = {item.name} id = {item.id} complete = {item.complete} handleDelete = {handleDelete}  handleSwitch = {handleSwitch}></Task>
        )}
      />
    </SafeAreaView>
  );
}

const containerStyle = { backgroundColor: "orange" };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
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
