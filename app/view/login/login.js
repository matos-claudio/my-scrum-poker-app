import React, { Component } from "react";
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Alert
} from "react-native";
import { Container, Content, Form, Item, Icon, Input, H2, H1 } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./style";
import FirebaseService from "../../service/firebase/firebase-service";

const image = require('../../../assets/icon_google.png')

export default class Login extends Component {
  constructor(){
    super()
    this.firebaseService = new FirebaseService()
    this.state = {
      email: 'caupath16@gmail.com',
      password: '123456'
    }
  }
  
  componentWillMount = async () => {
    const user = await this.firebaseService.onAuthStateChanged()
    console.log(`USER >>> ${JSON.stringify(user)}`)
    if(user != null){
      this.renderMenu(user)
    }
  }

  login = () => {
    this.firebaseService.signInWithEmailAndPassword(this.state.email, this.state.password).then(user => {
      this.renderMenu(user)
    }).catch(error => {
      Alert.alert('Ops', error.message)
    })
  }

  renderMenu = (user) => {
    this.props.navigation.navigate('Menu', { user })
  }

  signup = () => {
    this.props.navigation.navigate('Signup')
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
