import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
const icon = require('../../../../assets/icon-team.png');

export const CardListTeamsComponent = () => (
  <View style={styles.card}>
    <View style={styles.containerCard}>
      <View style={styles.viewTitle}>
        <Image style={styles.icon} source={icon}/>
        <Text style={styles.title}>Equipe ARQ3</Text>
      </View>
      <Text style={styles.info}>Equipe Arq3.0 BB Equipe Arq3.0 BB Equipe Arq3.0 BB</Text>
      <Text style={styles.infoTotalUsers}>10 membros</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    height: 170,
    alignContent: "flex-end",
    marginHorizontal: 15,
    borderRadius: 15,
    shadowColor: "#616161",
    shadowOffset: { width: 5, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5,
    position: "relative",
    marginBottom: 5,
  },
  containerCard: {
    justifyContent: "space-around",
    flex: 1,
    padding: 20,
  },
  viewTitle: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  title: {
    fontWeight: "bold",
    color: "#000",
    fontSize: 22,
  },
  info: {
    color: "#616161",
    fontSize: 12,
  },
  infoTotalUsers: {
    textAlign: 'right'
  }
});
