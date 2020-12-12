import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  TextInput,
  Alert,
} from "react-native";
import { Container, Content, H1 } from "native-base";
import Header from "../components/Header";
import TeamController from "../../controllers/team/team-controller";

export default class ViewCreateTeam extends Component {
  constructor() {
    super();
    this.state = {
      teamName: "",
      teamPassword: "",
      teamDescription: "",
      isLoading: false,
    };
    this.teamController = new TeamController();
  }

  isLoading = (isLoading) => {
    this.setState({ isLoading });
  };

  validateFields = () => {
    if (this.state.teamName === "") {
      Alert.alert("Ops :(", "Preencha o campo nome equipe");
      return false;
    }
    if (this.state.teamPassword === "") {
      Alert.alert("Ops :(", "Preencha o campo senha equipe");
      return false;
    }
    if (this.state.teamDescription === "") {
      Alert.alert("Ops :(", "Preencha o campo descrição da equipe");
      return false;
    }
    return true;
  };

  saveTeam = async () => {
    this.isLoading(true);
    if (this.validateFields()) {
      const data = {
        teamName: this.state.teamName,
        teamPassword: this.state.teamPassword,
        teamDescription: this.state.teamDescription,
        emailUser: 'caupath16@gmail.com'
      };
      this.teamController.saveTeam(data);
    }
  };

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
              placeholderTextColor="#424242"
              maxLength={20}
              onChangeText={(teamName) => this.setState({ teamName })}
              value={this.state.teamName}
            />
            <TextInput
              style={styles.textInput}
              autoCapitalize="none"
              placeholder="senha equipe"
              placeholderTextColor="#424242"
              maxLength={20}
              blurOnSubmit={false}
              onSubmitEditing={() => Keyboard.dismiss()}
              textContentType="username"
              onChangeText={(teamPassword) => this.setState({ teamPassword })}
              value={this.state.teamPassword}
            />
            <TextInput
              style={[styles.textInput, { height: 120 }]}
              autoCapitalize="none"
              placeholder="descrição da equipe"
              placeholderTextColor="#424242"
              maxLength={100}
              textAlignVertical="top"
              multiline={true}
              numberOfLines={5}
              onChangeText={(teamDescription) =>
                this.setState({ teamDescription })
              }
              value={this.state.teamDescription}
            />
          </View>
          <View style={styles.viewButton}>
            <TouchableOpacity style={styles.button} onPress={() => this.saveTeam()}>
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
    backgroundColor: "#e64a19",
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
