import { StatusBar } from 'expo-status-bar';
import React, { useState }from 'react';
import { StyleSheet, Switch, SafeAreaView, View, Text} from 'react-native';

export default function App() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return ( 
    <SafeAreaView style={[styles.container]}>
      <View style={styles.task}>
      <Text style = {{width: 100 ,}}> {"Brush Teeth"} </Text>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      </View>
    </SafeAreaView>
 );
}

const containerStyle = {backgroundColor: "orange"};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start', 
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  task: {
    justifyContent: 'flex-start', 
    alignItems: 'flex-start',
    width: 500,
    height: 100,
    marginLeft: 50,
    marginTop: 20,
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
