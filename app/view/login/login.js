import React, { Component } from "react";
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { Container, Content, Form, Item, Icon, Input, H2, H1 } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./style";
import FirebaseService from "../../service/firebase/firebase-service";

export default class Login extends Component {
  constructor(){
    super()
    this.firebaseService = new FirebaseService()
  }
  
  login = () => {
    this.firebaseService.createUserWithEmailAndPassword('caupath16@gmail.com', '123456')
  }

  render() {
    return (
      <Container style={styles.container}>
        <SafeAreaView style={styles.primaryColor} />
        <StatusBar barStyle="light-content" backgroundColor={"#9C56DE"} />
        <Content contentContainerStyle={{ flexGrow: 1 }}>
          <View style={styles.flex1}>
            <View style={styles.header}>
              <H1 style={[styles.h2, { padding: 15, color: "#FFF", fontSize: 28 }]}> Scrum Poker</H1>
              <Form>
                <Item>
                  <Icon active name="person" style={{ color: "#FFF" }} />
                  <Input placeholder="e-mail" placeholderTextColor={"#FFF"} />
                </Item>
                <Item>
                  <Icon active name="key" style={{ color: "#FFF" }} />
                  <Input
                    placeholder="senha"
                    secureTextEntry
                    placeholderTextColor={"#FFF"}
                  />
                </Item>
              </Form>
              <View style={styles.viewLoginButton}>
                <TouchableOpacity onPress={() => this.login()}>
                  <Icon active name="md-arrow-forward" style={{ color: "#000" }}/>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.viewFields}>

            </View>
            <View style={styles.viewButtons}>
              <View style={style.viewButtonSignup}>
                <Text style={style.labelSignup}>Não possui uma conta? </Text>
                <TouchableOpacity onPress={() => this.signup()}>
                  <Text style={style.labelButtonSignup}>Cadastre-se</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}
