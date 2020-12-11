import React, { Component } from "react";
import { Container, Content, H1, View, Text } from "native-base";
import {
  TouchableOpacity,
  ActivityIndicator,
  TextInput,
  Alert,
  StatusBar,
  Keyboard
} from "react-native";
import globalStyle from "../../style/app";
import styles from "./style";
import Header from "../components/Header";
import UserController from "../../controllers/user/user-controller";
import { LogoComponent } from "../components/Logo/LogoComponent";

const img = require("../../../assets/image.png");

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avatar: null,
      name: "Juca Silva",
      email: "js17@gmail.com",
      password: "123456",
      confirmPassword: "123456",
      isLoading: false,
    };
    this.userController = new UserController();
  }

  isLoading = (isLoading) => {
    this.setState({ isLoading });
  };

  validateFields = () => {
    if (
      this.state.name == "" ||
      this.state.email == "" ||
      this.state.password == "" ||
      this.state.confirmPassword == ""
    ) {
      Alert.alert("Ops", "Preencha todos os campos");
    } else if (this.state.password != this.state.confirmPassword) {
      Alert.alert("Ops", "As senhas digitadas não são iguais");
    } else {
      this.signUp();
    }
  };

  signUp = async () => {
    this.isLoading(true);
    const responseUser = await this.userController.createUserWithEmailAndPasswordService(
      this.state.email,
      this.state.password,
      this.state.name
    );

    console.log(`Error >>>> ${JSON.stringify(responseUser)}`)

    !responseUser.hasError
      ? this.props.navigation.navigate("Menu", { user: responseUser.data })
      : Alert.alert("Ops :(", responseUser.message);
    this.isLoading(false);
  };

  navigateToLogin = () => {
    this.props.navigation.navigate("Login");
  };

  render() {
    return (
      <Container style={styles.container}>
        <Header
          title={""}
          navigate={this.props.navigation}
          enableButton={true}
        />
        <StatusBar barStyle="light-content" backgroundColor={"#9C56DE"} />
        <Content
          transparent
          contentContainerStyle={{ flexGrow: 1, marginHorizontal: 20 }}
        >
          <View style={styles.viewLogo}>
            <LogoComponent />
            <Text style={styles.fontSubtitle}>
              Faça seu cadastro. É simples e rápido
            </Text>
          </View>
          <View style={styles.viewFields}>
            <TextInput
              style={styles.textInput}
              autoCapitalize="none"
              placeholder="e-mail"
              placeholderTextColor="#fff"
              maxLength={20}
              onChangeText={(email) => this.setState({ email })}
              value={this.state.email}
            />
            <TextInput
              style={[styles.textInput, { marginTop: 10 }]}
              placeholder="nome"
              placeholderTextColor="#fff"
              maxLength={20}
              onChangeText={(name) => this.setState({ name })}
              value={this.state.name}
            />
            <TextInput
              style={[styles.textInput, { marginTop: 10 }]}
              autoCapitalize="none"
              secureTextEntry={true}
              onChangeText={(password) => this.setState({ password })}
              placeholder="senha (mínimo de 6 caracteres)"
              blurOnSubmit={false}
              onSubmitEditing={()=> Keyboard.dismiss()}
              textContentType="username"
              maxLength={10}
              placeholderTextColor="#fff"
              value={this.state.password}
            />
            <TextInput
              style={[styles.textInput, { marginTop: 10 }]}
              autoCapitalize="none"
              secureTextEntry={true}
              onChangeText={(confirmPassword) =>
                this.setState({ confirmPassword })
              }
              placeholder="confirmação de senha (mínimo de 6 caracteres)"
              blurOnSubmit={false}
              onSubmitEditing={()=> Keyboard.dismiss()}
              textContentType="username"
              maxLength={10}
              placeholderTextColor="#fff"
              value={this.state.confirmPassword}
            />
          </View>
          <View style={styles.viewButtons}>
            <TouchableOpacity
              style={globalStyle.primaryButton}
              onPress={() => this.validateFields()}
            >
              {this.state.isLoading && (
                <ActivityIndicator color={"#fff"} size="small" />
              )}
              {!this.state.isLoading && (
                <Text style={globalStyle.primaryButtonLabel}>CADASTRAR</Text>
              )}
            </TouchableOpacity>
            <View style={styles.viewButtonSignup}>
              <Text style={styles.labelSignup}>Já possui uma conta? </Text>
              <TouchableOpacity onPress={() => this.navigateToLogin()}>
                <Text style={globalStyle.labelButtonLoginSignup}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}
