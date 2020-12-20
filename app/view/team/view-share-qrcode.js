import React, { Component } from "react";
import { Text, View, StatusBar } from "react-native";
import { Card, Container, Content, H1, H2 } from "native-base";
import SvgQRCode from "react-native-qrcode-svg";
import Header from "../components/Header";
import styles from "./style";
import md5 from 'md5';

export default class ViewShareQrCode extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    const message = md5('1234');
    console.log(message)    
  }

  render() {
    return (
      <Container style={styles.containerViewQrCode}>
        <StatusBar barStyle="dark-content" backgroundColor={"#fff"} />
        <Header
          color="#000"
          navigate={this.props.navigation}
          enableButton={true}
        />
        <Content contentContainerStyle={{ flexGrow: 1 }}>
          <View style={{ padding: 25 }}>
            <H1 style={styles.h1}>DX</H1>
            <H2 style={styles.h2}>Equipe responsavel pela cloud BB</H2>
          </View>
          <View style={{ padding: 25 }}>
            <Card style={styles.card}>
              <SvgQRCode size={250} value={"Testando..."} />
            </Card>
          </View>
          <View style={{ padding: 25 }}>
            <H2 style={styles.h2}>Invite gerado</H2>  
            <Text style={styles.labelGrey}>Tire um printscreen dessa tela e compartilhe com os demais membros do time.</Text>
          </View>
        </Content>
      </Container>
    );
  }
}
