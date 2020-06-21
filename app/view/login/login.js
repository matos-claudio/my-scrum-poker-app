import React, { Component } from "react";
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
  TouchableHighlight
} from "react-native";
import { Container, Content, Form, Item, Icon, Input, H2, H1 } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./style";
import FirebaseService from "../../service/firebase/firebase-service";
import GoogleService from "../../service/login/google/google-service";

const image = require('../../../assets/icon_google.png')

export default class Login extends Component {
  constructor(){
    super()
    this.firebaseService = new FirebaseService()
    this.googleService = new GoogleService()
    this.state = {
      email: 'caupath16@gmail.com',
      password: '123456'
    }
  }
  
  componentWillMount = () => {
    this.firebaseService.onAuthStateChanged()
  }

  login = () => {
    //this.firebaseService.createUserWithEmailAndPassword('caupath16@gmail.com', '123456')
    this.firebaseService.signInWithEmailAndPassword(this.state.email, this.state.password)
  }

  loginWithGoogle = () => {
    this.googleService.signInWithGoogle()
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
                  <Input 
                    placeholder="e-mail"
                    style={{ color: '#FFF'}} 
                    placeholderTextColor={"#FFF"}
                    autoCapitalize='none'
                    keyboardType='email-address'
                    onChangeText={email => this.setState({ email })}
                    value={this.state.email} />
                </Item>
                <Item>
                  <Icon active name="key" style={{ color: "#FFF" }} />
                  <Input
                    placeholder="senha"
                    style={{ color: '#FFF'}}
                    autoCapitalize='none'
                    secureTextEntry
                    placeholderTextColor={"#FFF"}
                    onChangeText={password => this.setState({ password })}
                    value={this.state.password}
                  />
                </Item>
              </Form>
              <View style={styles.viewLoginButton}>
                <TouchableOpacity onPress={() => this.login()}>
                  <Icon active name="md-arrow-forward" style={{ color: "#000" }}/>
                </TouchableOpacity>
              </View>
            </View>
            <TouchableWithoutFeedback onPress={() => this.loginWithGoogle()}>
              <View style={[styles.viewFields, { alignItems: "center", justifyContent: "center" }]}>
                <Image source={image}/>
                <Text style={style.labelSignup}>Logar com o Google </Text>
              </View>
            </TouchableWithoutFeedback>
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
