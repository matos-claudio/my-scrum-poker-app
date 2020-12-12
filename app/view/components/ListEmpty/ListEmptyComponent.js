import { H1 } from "native-base";
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const icon = require("../../../../assets/icon-list-empty.png");

export const ListEmptyComponent = () => (
  <View style={styles.container}>
    <Image style={{width: 180, height: 180}} source={icon} />
    <H1 style={styles.h1}>Ops!!!</H1>
    <Text style={styles.text}>Você ainda não possui nenhuma equipe.{"\n"}Clique no botão abaixo e adicione.</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 350,
    height: 450,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    letterSpacing: 1,
    padding: 10

    //   font
  },
  h1: {
      letterSpacing: 1,
    //   fontSize: 32
  }
});
