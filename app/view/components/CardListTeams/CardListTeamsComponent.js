import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
const icon = require("../../../../assets/icon-team.png");

export const CardListTeamsComponent = ({ onPress, item }) => (
  <View style={styles.card}>
    <View style={styles.containerCard}>
      <View style={styles.viewTitle}>
        <Image style={styles.icon} source={icon} />
        <Text style={styles.title}>{item.teamName}</Text>
      </View>
      <Text style={styles.info}>{item.teamDescription}</Text>
      <View style={styles.viewBottom}>
        <Text style={styles.infoTotalUsers}>10 membros</Text>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.textButton}>Ver equipe</Text>
        </TouchableOpacity>
      </View>
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
    alignItems: "center",
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
    textAlign: "left",
  },
  viewBottom: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "#e64a19",
    height: 30,
    width: 120,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#e64a19",
  },
  textButton: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
  },
});
