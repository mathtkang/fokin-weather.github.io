import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>Hello!!!</Text>
      <Text style={styles.text}>Hello!!!</Text> */}

      <View style={styles.yellowView}>
        <Text>Hello!!!</Text>
      </View>
      <View style={styles.blueView}>
        <Text>Hello!!!</Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: "row", //참고
    // backgroundColor: 'green',
    // alignItems: 'center',
    // justifyContent: 'center'
    // color:"white" //이건적용안됨(기존같았으면 부모의 상속때문에 적용됐지만 리엑트라 주의!)
  },
  // text: {
  //   color: "black"
  // }
  yellowView: {
    flex: 3,
    backgroundColor: "yellow"
  },
  blueView: {
    flex: 2,
    backgroundColor: "blue"
  }
});
