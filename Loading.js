import React from "react";
import { StyleSheet, Text, View } from "react-native";

function Loading() {
  return <View style={StyleSheet.container}>
    <Text>Getting</Text>
  </View>
}

const style = StyleSheet.create({
  container: {
    flex: 1
  }
});