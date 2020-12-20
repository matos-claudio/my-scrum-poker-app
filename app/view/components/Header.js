import React, { Component } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Button,
} from "react-native";
import style from "../../style/app";
import { Ionicons } from "@expo/vector-icons";

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  goBack() {
    const { navigate } = this.props;
    navigate.goBack();
    navigate.state.params = { selected: true };
  }
  render() {
    return (
      <SafeAreaView>
        <View
          style={[
            style.headerComponent,
            this.props.margin && { marginHorizontal: 0 },
          ]}
        >
          <TouchableOpacity
            style={style.buttonHeaderComponent}
            onPress={() =>
              this.props.navigate.goBack()
            }
          >
            <Ionicons
              name={"md-arrow-back"}
              size={24}
              color={this.props.color ? this.props.color : "#fff"}
            />
            <Text style={style.labelTitleHeaderComponent}>
              {this.props.title}
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}
