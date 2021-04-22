import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function Weather({ temp }) {
  return (
    <View style={styles.container}>
      <LinearGradient
        // Button Linear Gradient
        colors={['#4c669f', '#3b5998', '#192f6a']}
        style={styles.button}>
        <View style={styles.halfContainer}>
          <MaterialCommunityIcons name="weather-lightning-rainy" size={96} color="black" />
          <Text style={styles.temp}>{temp}℃</Text>
        </View>
        <View style={styles.halfContainer} />
      </LinearGradient>
    </View>
  );
}
Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition : PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
    "Haze",
    "Mist",
    "Dust"
  ]).isRequired

};

const styles = StyleSheet.create({
  container: {
    flex : 1,
    justifyContent : "center",
    alignItems : "center"
  },
  button: {
    padding: 15,
    alignItems: "center",
    borderRadius: 5
  },
  temp: {
    fontSize:36
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});