import React, { Component } from "react";
import { View, StatusBar, StyleSheet, ActivityIndicator } from "react-native";
import { Container, Content } from "native-base";
import * as firebase from "firebase";
import { LogoComponent } from "../components/Logo/LogoComponent";

export default class ViewInitialLoad extends Component {
  constructor(props) {
    super(props);
    this.loadConfiguration();
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log("USUARIO " + JSON.stringify(user));
      user !== null
        ? this.renderView("Menu", user)
        : this.renderView("ViewLogin", null);
    });
  };

  renderView = (view, user) => {
    this.props.navigation.navigate(view, { user });
  };

  loadConfiguration = () => {
    const firebaseConfig = {
      apiKey: "AIzaSyDAncPBdlss8YNjM2YIfvLKEYu6c5VQAps",
      authDomain: "my-scrum-app.firebaseapp.com",
      databaseURL: "https://my-scrum-app.firebaseio.com",
      projectId: "my-scrum-app",
      storageBucket: "my-scrum-app.appspot.com",
      messagingSenderId: "469510168452",
      appId: "1:469510168452:web:4ef498f739d4905e4747d1",
      measurementId: "G-WQS4MP2SNN",
    };

    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    return firebase;
  };

  render() {
    return (
      <Container style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor={"#9C56DE"} />
        <Content
          transparent
          contentContainerStyle={{ flexGrow: 1, marginHorizontal: 20 }}
        >
          <View style={styles.viewLogo}>
            <LogoComponent />
            <ActivityIndicator size={28} color="#fff" />
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#9C56DE",
  },
  viewLogo: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});
