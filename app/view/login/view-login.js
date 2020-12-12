import React, { Component } from "react";
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Alert
} from "react-native";
import {
  Container,
  Content,
  Form,
  Item,
  Icon,
  Input,
} from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./style";
import UserController from "../../controllers/user/user-controller";
import { LogoComponent } from "../components/Logo/LogoComponent";

export default class ViewLogin extends Component {
  constructor() {
    super();
    this.loginController = new UserController();
    this.state = {
      email: "caupath16@gmail.com",
      password: "123456",
      isLoading: false,
    };
  }

  login = async () => {
    this.isLoading(true);
    const user = this.loginController.signInWithEmailAndPassword(this.state.email, this.state.password);
    if(user != null) {
      this.renderMenu(user)
    } else {
      Alert.alert('Ops :(', 'Erro')
    }
    //const user = await
    // this.firebaseService.signInWithEmailAndPassword(this.state.email, this.state.password).then(user => {
    //   this.renderMenu(user)
    // }).catch(error => {
    //   Alert.alert('Ops', error.message)
    // }).finally(
    //   console.log(`Passei no finaly`)
    // );
  };

  isLoading = (isLoading) => {
    this.setState({ isLoading });
  };

  renderMenu = (user) => {
    this.props.navigation.navigate("Menu", { user });
  };

  signup = () => {
    this.props.navigation.navigate("ViewSignup");
  };

  render() {
    return (
      <Container style={styles.container}>
        <SafeAreaView style={styles.primaryColor} />
        <StatusBar barStyle="light-content" backgroundColor={"#9C56DE"} />
        <Content contentContainerStyle={{ flexGrow: 1 }}>
          <View style={styles.viewBodyLogin}>
            <LogoComponent />  
            <Form>
              <Item>
                <Icon active name="person" style={{ color: "#FFF" }} />
                <Input
                  placeholder="e-mail"
                  style={{ color: "#FFF" }}
                  placeholderTextColor={"#FFF"}
                  autoCapitalize="none"
                  keyboardType="email-address"
                  onChangeText={(email) => this.setState({ email })}
                  value={this.state.email}
                />
              </Item>
              <Item>
                <Icon active name="key" style={{ color: "#FFF" }} />
                <Input
                  placeholder="senha"
                  style={{ color: "#FFF" }}
                  autoCapitalize="none"
                  secureTextEntry
                  placeholderTextColor={"#FFF"}
                  onChangeText={(password) => this.setState({ password })}
                  value={this.state.password}
                />
              </Item>
            </Form>
            <View style={styles.viewLoginButton}>
              <TouchableOpacity onPress={() => this.login()}>
                <Icon
                  active
                  name="md-arrow-forward"
                  style={{ color: "#000" }}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.viewButtons}>
            <View style={styles.viewButtonSignup}>
              <Text style={styles.labelSignup}>Não possui uma conta? </Text>
              <TouchableOpacity onPress={() => this.signup()}>
                <Text style={styles.labelButtonSignup}>Cadastre-se</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}
