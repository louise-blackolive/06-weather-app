import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import PropTypes from "prop-types";

const weatherCases = {
  Rain: {
    colors: ["#00C6FB", "#005BEA"],
    title: "Raining 😭",
    subtitle: "For more info look outside",
    icon: "weather-rainy"
  },
  Clear: {
    colors: ["#FEF253", "#FF7300"],
    title: "Sunny 😃",
    subtitle: "Go get your face burn",
    icon: "weather-sunny"
  },
  Lightning: {
    colors: ["#00ECBC", "#007ADF"],
    title: "Thunderstorm in the house 😱",
    subtitle: "Actually, outside of the house",
    icon: "weather-lightning"
  },
  Clouds: {
    colors: ["#D7D2CC", "#304352"],
    title: "Clouds 😩",
    subtitle: "I know, This is boring",
    icon: "weather-cloudy"
  },
  Snow: {
    colors: ["#7DE2FC", "#B9B6E5"],
    title: "Cold outside ",
    subtitle: "Do you want to build a snowman?",
    icon: "weather-snow"
  },
  Drizzle: {
    colors: ["#89F7FE", "#66A6FF"],
    title: "Drizzle 👻",
    subtitle: "It is not good at activity",
    icon: "weather-rainy-outline"
  },
  Haze: {
    colors: ["#89F7FE", "#66A6FF"],
    title: "Haze",
    subtitle: "Don't know what that is 💩",
    icon: "weather-hail"
  },
  Mist: {
    colors: ["#D7D2CC", "#304352"],
    title: "Mist! 😷",
    subtitle: "It's like you have no glasses on.",
    icon: "weather-fog"
  }
};

function Weather({ weatherName, temp }) {
  return (
    <LinearGradient
      colors={weatherCases[weatherName].colors}
      style={styles.container}
    >
      <View style={styles.upper}>
        <MaterialCommunityIcons
          color="white"
          size={144}
          name={weatherCases[weatherName].icon}
        />
        <Text style={styles.temp}>{temp}º</Text>
      </View>
      <View style={styles.lower}>
        <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
        <Text style={styles.subtitle}>
          {weatherCases[weatherName].subtitle}
        </Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  weatherName: PropTypes.string.isRequired
};

export default Weather;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  upper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent"
  },
  temp: {
    marginBottom: 24,
    backgroundColor: "transparent",
    color: "white",
    fontSize: 48
  },
  lower: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-end",
    paddingLeft: 35
  },
  title: {
    fontSize: 48,
    backgroundColor: "transparent",
    color: "white",
    marginBottom: 10,
    fontWeight: "500"
  },
  subtitle: {
    marginBottom: 150,
    backgroundColor: "transparent",
    color: "white",
    fontSize: 24
  }
});
