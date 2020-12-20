import React, { Component } from "react";
import {
  Text,
  View,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Container, Content } from "native-base";
import { Camera } from "expo-camera";
import Header from "../components/Header";
import styles from "./style";

export default class ViewQrCodeReader extends Component {
  constructor() {
    super();
    this.state = {
      hasPermission: null,
    };
  }

  componentDidMount = async () => {
    const { status } = await Camera.requestPermissionsAsync();
    console.log(`status ${status}`);
    this.setState({ status: status });
  };
  handleBarCodeScanned = ({ type, data }) => {
    console.log(`Data ${data}`);
    this.camera.pausePreview();
  };

  handleResumePreview = () => {
    this.camera.resumePreview();
  }

  render() {
    return (
      <Container>
        <StatusBar barStyle="dark-content" backgroundColor={"#fff"} />
        <Header
          color="#000"
          navigate={this.props.navigation}
          enableButton={true}
        />
        <Content contentContainerStyle={{ flexGrow: 1 }}>
          <View style={styles.container}>
            <Camera
              ref={(cam) => {
                this.camera = cam;
              }}
              style={StyleSheet.absoluteFillObject}
              aspect={Camera.Constants.AutoFocus}
              playSoundOnCapture
              onBarCodeScanned={this.handleBarCodeScanned}
            >
              <View style={styles.viewCamera}>
                <View style={styles.viewMaskCamera} />
                <TouchableOpacity onPress={() => this.handleResumePreview()}>
                  <Text style={{ color: '#fff' }}>Ler novamente</Text>
                </TouchableOpacity>
              </View>
            </Camera>
          </View>
          <View style={styles.viewFooter}>
            <View style={styles.viewButtonFooter}>
              <Text>Possui as crendenciais do time?</Text>
              <TouchableOpacity>
                <Text style={styles.labelButtonFooter}>Login equipe</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}
