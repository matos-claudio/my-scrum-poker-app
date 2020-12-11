import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  TextInput,
} from "react-native";
import { Container, Content, H1 } from "native-base";
import Header from "../components/Header";

export default class ViewCreateTeam extends Component {
  constructor() {
    super();
    this.state = {
      nomeEquipe: "",
    };
  }

  render() {
    return (
      <Container style={styles.background}>
        <StatusBar barStyle="dark-content" backgroundColor={"#fff"} />
        <Header
          color="#000"
          navigate={this.props.navigation}
          enableButton={true}
        />
        <Content contentContainerStyle={{ flexGrow: 1 }}>
          <View style={styles.container}>
            <H1 style={styles.h1}>Criar equipe</H1>
            <Text style={styles.subtitle}>
              Crie a sua equipe,{"\n"}convide seus colegas e vamos para a{"\n"}
              Planning.
            </Text>
          </View>
          <View style={styles.viewFields}>
            <TextInput
              style={styles.textInput}
              autoCapitalize="none"
              placeholder="nome equipe"
              placeholderTextColor="#000"
              maxLength={20}
              onChangeText={(nomeEquipe) => this.setState({ nomeEquipe })}
              value={this.state.nomeEquipe}
            />
            <TextInput
              style={styles.textInput}
              autoCapitalize="none"
              placeholder="senha equipe"
              placeholderTextColor="#000"
              maxLength={20}
              blurOnSubmit={false}
              onSubmitEditing={()=> Keyboard.dismiss()}
              textContentType="username"
              onChangeText={(nomeEquipe) => this.setState({ nomeEquipe })}
              value={this.state.nomeEquipe}
            />
            <TextInput
              style={[styles.textInput, { height: 120 }]}
              autoCapitalize="none"
              placeholder="descrição da equipe"
              placeholderTextColor="#000"
              maxLength={20}
              textAlignVertical="top"
              multiline={true}
              numberOfLines={5}
              onChangeText={(nomeEquipe) => this.setState({ nomeEquipe })}
              value={this.state.nomeEquipe}
            />
          </View>
          <View style={styles.viewButton}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.textButton}>CADASTRAR</Text>
            </TouchableOpacity>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    padding: 20,
  },
  viewFields: {
    flex: 1,
    padding: 20,
  },
  h1: {
    color: "#000",
    fontWeight: "bold",
    letterSpacing: 1,
  },
  subtitle: {
    color: "#424242",
    letterSpacing: 1,
  },
  viewButton: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#9C56DE",
    height: 45,
    width: "100%",
    justifyContent: "center",
  },
  textButton: {
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  textInput: {
    backgroundColor: "#f5f5f5",
    height: 45,
    borderWidth: 0.3,
    padding: 5,
    borderColor: "#fafafa",
    borderRadius: 5,
    color: "#000",
    marginTop: 10,
  },
});
