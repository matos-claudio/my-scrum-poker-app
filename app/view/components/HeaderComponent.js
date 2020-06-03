import React, { Component } from "react";
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  Button,
} from "react-native";
import { Text } from 'native-base'
import { Ionicons } from "@expo/vector-icons";
import style from "../../style/app";
import AvatarComponent from "./AvatarComponent";
import { createNameAvatar } from "../../helper/helper";

Ionicons.loadFont();

export default class HeaderComponent extends Component {
  render() {
    return (
      <SafeAreaView>
        <View style={[style.headerComponent, this.props.margin && { marginHorizontal: 20 }]}>
            <Text style={style.labelTitleHeaderComponent}>
                Olá, {this.props.name != null ? this.props.name : ""}
            </Text>
          <AvatarComponent avatar={createNameAvatar(this.props.name)} />
        </View>
      </SafeAreaView>
    );
  }
}
