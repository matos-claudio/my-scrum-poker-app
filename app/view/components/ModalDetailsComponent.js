import React from "react";
import { Modal, View, StyleSheet } from "react-native";
import HeaderComponent from "./HeaderComponent";

const ModalDetailsComponent = ({ member, isVisible }) => {
  return (
    // <View style={{ backgroundColor: "#000", height: 300 }}>
    <Modal
      animationType="slide"
      transparent={false}
      visible={isVisible}
      style={{ height: 200 }}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
      }}
    >
      <View style={styles.container}>
        <HeaderComponent name={""} margin />
      </View>
    </Modal>
    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default ModalDetailsComponent;
