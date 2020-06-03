import React, { Component } from "react";
import { View, Text } from "native-base";
import globalStyle from "../../style/app";
import { StyleSheet } from "react-native";

export default class AvatarComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={globalStyle.viewAvatar}>
        <Text style={globalStyle.fontMyAvatar}>{this.props.avatar}</Text>
        {this.props.score && (
          <View style={styles.viewScore}>
            <Text style={styles.label}>{this.props.score}</Text>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewScore: {
    position: "absolute",
    right: -13,
    backgroundColor: "#6a1b9a",
    borderRadius: 5,
    width: 25,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
  },
  label: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
