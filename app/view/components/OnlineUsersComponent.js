import React, { Component } from "react";
import { View, Text, FlatList, TouchableOpacity, Modal } from "react-native";
import { createNameAvatar } from "../../helper/helper";
import AvatarComponent from "./AvatarComponent";
import styles from "../../style/app";
import ModalDetailsComponent from "./ModalDetailsComponent";
import HeaderComponent from "./HeaderComponent";

export default class OnlineUsersComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: false,
    };
  }

  renderModal = (item, isVisible) => {
    console.log(`ITEM>>> ${JSON.stringify(item)}`)
    console.log(`ITEM>>> ${JSON.stringify(item)}`)
    this.setState({ isVisible: isVisible });
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={true}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.container}>
          <HeaderComponent name={""} margin />
        </View>
      </Modal>
    );
  };

  render() {
    return (
      <View style={styles.viewUsersOnline}>
        <Text style={styles.labelViewUsersOnline}>
          Participantes nessa sala
        </Text>
        <View style={styles.marginTop5}>
          <FlatList
            data={this.props.members}
            numColumns={6}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => this.renderModal(item, true)}>
                <AvatarComponent avatar={createNameAvatar(item.name)} />
              </TouchableOpacity>
            )}
            ListEmptyComponent={() => {
              return (
                <Text style={styles.labelEmptyList}>
                  Nenhum participante online
                </Text>
              );
            }}
          />
        </View>
      </View>
    );
  }
}
