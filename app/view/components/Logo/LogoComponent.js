import React from "react";
import { View, H1 } from "native-base";
import { StyleSheet, Image } from "react-native";

const logo = require("../../../../assets/logo-poker.png");

export const LogoComponent = () => (
  <View style={styles.container}>
    <Image resizeMode="contain" source={logo} style={styles.logo} />
    <H1 style={styles.h1}>Poker Planning</H1>
  </View>
);

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  h1: {
    padding: 15,
    color: "#FFF",
    fontWeight: "bold",
  },
  logo: {
    width: 180,
    height: 120,
    shadowColor: "#673ab7",
    shadowOffset: { width: 5, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
});
