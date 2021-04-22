import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const weatherOptions = {
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#373B44","#4286f4"],
    title: "Thunderstorm in the house",
    subtitle: "Actually, outside of the house"
  },
  Drizzle: {
    iconName: "weather-hail",
    gradient: ["#1f4037","#99f2c8"],
    title: "Drizzle"
  },
  Rain: {
    iconName: "weather-rainy",
    gradient: ["#283c86","#45a247"],
    title: "Rainy",
    subtitle: "Take your umbrella."
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#0ED2F7","#B2FEFA"],
    title: "Snow",
    subtitle: "Do you want to build a snowman?"
  },
  Atmosphere: {
    iconName: "weather-hail",
    gradient: ["#2980B9","#6DD5FA"],
    title: "Atmosphere"
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#f7797d","#FBD786"],
    title: "Sunny",
    subtitle: "Let's go see the flowers."
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#000046","#1CB5E0"],
    title: "Clouds",
    subtitle: "I know, very boring."
  },
  Haze: {
    iconName: "weather-hail",
    gradient: ["#D66D75", "#E29587"],
    title: "Haze",
    subtitle: "Just don't go outside."
  },
  Mist: {
    iconName: "weather-hail",
    gradient: ["#C33764","#1D2671"],
    title: "Mist",
    subtitle: "It's like you have no glasses on."
  },
  Dust: {
    iconName: "weather-hail",
    gradient: ["#544a7d","#ffd452"],
    title: "Dusty",
    subtitle: "Thanks a lot China^^"
  }
}

export default function Weather({ temp,condition }) {
  return (
    // <View style={styles.container}>
      <LinearGradient
        // Button Linear Gradient
        colors={weatherOptions[condition].gradient}
        style={styles.container}
      >
        <StatusBar barStyle="light-content" />
        <View style={styles.halfContainer}>
          <MaterialCommunityIcons 
            size={96} 
            // name="weather-lightning-rainy"
            name={weatherOptions[condition].iconName}
            color="white" 
          />
          <Text style={styles.temp}>{temp}℃</Text>
        </View>
        {/* <View style={styles.textContainer}> */}
        <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
        {/* 두 개 오브젝트를 함께 쓰는 es6 방식 */}
            <Text style={styles.title}>{weatherOptions[condition].title}</Text>
            <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
        </View>
      </LinearGradient>
    // </View>
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
  temp: {
    fontSize: 42,
    color: "white"
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  textContainer: {
    paddingHorizontal: 20,
    alignItems: "flex-start"
  },
  title: {
    color: "white",
    fontSize: 44,
    fontWeight: "300",
    marginBottom: 10
  },
  subtitle: {
    color: "white",
    fontWeight: "600",
    fontSize: 24
  }
});