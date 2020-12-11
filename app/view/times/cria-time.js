import React, { Component } from "react";
import {
  Text,
  View,
  FlatList,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import {
  Input,
  Container,
  Content,
  H1,
  Footer,
  Icon,
  Form,
  Item,
  H3,
  Label,
} from "native-base";
import SvgQRCode from "react-native-qrcode-svg";
import styles from "./style";
import Header from "../components/Header";

export default class CriarTime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teamName: "",
      password: "",
    };
  }
  renderQrCode = () => <SvgQRCode size={120} value={"Testando..."} />;
  render() {
    return (
      <Container>
        <SafeAreaView style={styles.primaryColor} />
        <StatusBar barStyle="light-content" backgroundColor={"#9C56DE"} />
        <Header title={""} />
        <Content contentContainerStyle={{ flexGrow: 1 }}>
          <View style={[{ padding: 20 }]}>
            <H3 style={styles.subtitle}>
              Crie o seu time, a sala e{"\n"}compartilhe o convite{"\n"}com os
              demais membros do time através{"\n"}do QRCode.
            </H3>
          </View>
          <View style={{ flex: 1, justifyContent: "center" }}>
            <Form>
              <Item stackedLabel>
                <Label>Nome do time</Label>
                <Input
                  style={{ color: "#212121" }}
                  autoCapitalize="none"
                  keyboardType="text"
                  onChangeText={(teamName) => this.setState({ teamName })}
                  value={this.state.teamName}
                />
              </Item>
              <Item stackedLabel>
                <Label>Fale um pouco sobre o time</Label>
                <Input
                  style={{ color: "#212121", height: 150, justifyContent: "flex-start" }}
                  underlineColorAndroid="transparent"
                  numberOfLines={10}
                  multiline={true}
                  onChangeText={(teamName) => this.setState({ teamName })}
                  value={this.state.teamName}
                />
              </Item>
              <Item stackedLabel>
                <Label>Nome da sala</Label>
                <Input
                  style={{ color: "#212121" }}
                  placeholderTextColor={"#212121"}
                  autoCapitalize="none"
                  keyboardType="text"
                  onChangeText={(teamName) => this.setState({ teamName })}
                  value={this.state.teamName}
                />
              </Item>
              <Item stackedLabel>
                <Label>Senha da sala</Label>
                <Input
                  style={{ color: "#212121" }}
                  autoCapitalize="none"
                  secureTextEntry
                  placeholderTextColor={"#212121"}
                  onChangeText={(password) => this.setState({ password })}
                  value={this.state.password}
                />
              </Item>
            </Form>
          </View>
          <View style={{ flex: 1, justifyContent: "space-around", marginTop: 15 }}>
            <View style={{ alignItems: "center", justifyContent: "space-between" }}>
                {this.renderQrCode()}
                <Text style={{ color: '#212121', marginTop: 10 }}>Compartilhe o QRCode com os demais membros.{"\n"}Isso permitirá que eles entrem automaticamente na sala da{"\n"}Planning.</Text>
            </View>
            <TouchableOpacity
              style={[
                {
                  backgroundColor: "#9C56DE",
                  height: 45,
                  marginTop: 20,
                  marginHorizontal: 20,
                  justifyContent: "center",
                },
              ]}
              onPress={() => this.criarTime()}
            >
              <Text
                style={{
                  color: "#fff",
                  fontWeight: "bold",
                  alignSelf: "center",
                }}
              >
                Salvar
              </Text>
            </TouchableOpacity>
          </View>
        </Content>
      </Container>
    );
  }
}
