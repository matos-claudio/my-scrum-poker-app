import React, { Component } from "react";
import { Text, View, StatusBar } from "react-native";
import { Card, Container, Content, H1, H2 } from "native-base";
import SvgQRCode from "react-native-qrcode-svg";
import Header from "../components/Header";
import styles from "./style";
import md5 from 'md5';
import TeamController from "../../controllers/team/team-controller";

export default class ViewShareQrCode extends Component {
  constructor(props) {
    super(props);
    const { navigation } = this.props;
    //this.data = navigation.getParam('data');
    this.data = {
      teamName: "DX1",
      teamPassword: "123",
    }
    this.teamController = new TeamController();
    this.state = {
        objQrCode: null,
    }
  }

  componentDidMount = () => {
    const password = this.teamController.convertPasswordMd5(this.data.teamPassword);
    const objQrCode = {
        teamPassword: password,
        teamName: this.data.teamName
    }
    this.setState({ objQrCode });
    console.log(JSON.stringify(objQrCode))    
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
              {this.state.objQrCode !== null && <SvgQRCode size={250} value={JSON.stringify(this.state.objQrCode)} />}
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
