import React, { Component } from "react";
import { Text, View, FlatList, SafeAreaView, StatusBar, TouchableOpacity } from "react-native";
import { Input, Container, Content, H1, Footer, Icon, Form, Item } from "native-base";
import Modal from 'react-native-modalbox'
import styles from "./style";
import TransparentHeader from "../components/Header/TransparentHeader";


export default class ListaTimes extends Component {

  constructor(){
    super()
    this.state = {
      showModal: false
    }
  }
  
  componentDidMount = () => {

  }

  criaTime = () => {

  }

  onRequestClose = () => {
    this.setState({ showModal: false })
  }

  renderModal = () => {
    return (
      <Modal
        swipeArea={30}
        isOpen={this.state.showModal} 
        style={{ height: '100%' }}
        position={'bottom'}
        transparent={true}
        backdrop={true}
        onClosed={() => this.setState({ showModal: false })}
        backdropColor={"#00000000"}>
        <View style={{ backgroundColor: '#f5f5f5', flex: 1, justifyContent: "center" }}>
          <H1 style={{ padding: 20, fontWeight: "bold" }}>Crie um time</H1>
          <Form>
            <Item>
              <Icon active name="md-wallet" style={{ color: "#212121" }} />
              <Input 
                placeholder="nome do time"
                style={{ color: '#212121'}} 
                placeholderTextColor={"#212121"}
                autoCapitalize='none'
                keyboardType='email-address'
                onChangeText={email => this.setState({ email })}
                value={this.state.email} />
            </Item>
            <Item>
              <Icon active name="key" style={{ color: "#212121" }} />
              <Input
                placeholder="senha"
                style={{ color: '#212121'}}
                autoCapitalize='none'
                secureTextEntry
                placeholderTextColor={"#212121"}
                onChangeText={password => this.setState({ password })}
                value={this.state.password}
              />
            </Item>
            <TouchableOpacity style={[{ backgroundColor: '#9C56DE', height: 45, marginTop: 20, marginHorizontal: 20 }]} onPress={() => this.showModal()}>
                <View style={styles.viewFooterView}>
                    <Text style={{color:'#fff', fontWeight: "bold"}}>Salvar</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={[{ backgroundColor: '#e64a19', height: 45, marginTop: 20, marginHorizontal: 20 }]} onPress={() => this.setState({ showModal: false })}>
                <View style={styles.viewFooterView}>
                    <Text style={{color:'#fff', fontWeight: "bold"}}>Cancelar</Text>
                </View>
            </TouchableOpacity>
          </Form>
        </View>
      </Modal>
     )
  }

  showModal = () => {
    this.setState({ showModal: true })
  }

  render() {
    return (
      <Container style={styles.container}>
        <SafeAreaView style={styles.primaryColor} />
        <StatusBar barStyle="light-content" backgroundColor={"#9C56DE"} />
        <TransparentHeader backgroundColor={styles.primaryColor} />
        <Content contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.flex1}>
                <View style={[styles.flex1, { backgroundColor: '#9C56DE' }]}>
                    <H1 style={[styles.h2, { padding: 15, color: "#FFF", fontSize: 28, alignContent: 'center' }]}>Meus times</H1>
                    <View style={{backgroundColor: '#6a1b9a', paddingLeft: 5, marginHorizontal: 15, borderRadius: 25}}>
                        <Input style={{borderRadius: 10}} placeholder={"Pesquisar time..."} placeholderTextColor={"#FFF"}/>
                    </View>
                </View>
                <View style={{ flex: 3, backgroundColor: '#FFF' }}>
                  {/* {this.state.showModal && this.renderModal()} */}
                </View>
                <Footer style={{backgroundColor: '#FFF'}}>
                  <View style={styles.viewFooter}>
                        <TouchableOpacity style={styles.flex1} onPress={() => this.showModal()}>
                            <View style={styles.viewFooterView}>
                                <Icon active name="md-contacts" style={{ color: "#FFF", fontSize: 20, marginRight: 10 }} />
                                <Text style={{color:'#fff', fontWeight: "bold"}}>Novo time</Text>
                            </View>
                        </TouchableOpacity>
                    </View> 
                </Footer>
            </View>
            {this.state.showModal && this.renderModal()}
        </Content>
      </Container>
    );
  }
}
