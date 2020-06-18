import React, { Component } from "react";
import { Container, Content, View, Text, H1, Picker } from "native-base";
import {
  TouchableOpacity,
  ActivityIndicator,
  TextInput,
  Image,
  Alert,
} from "react-native";
import globalStyle from "../../style/app";
import style from "./style";
import { createNameAvatar } from "../../helper/helper";
import { roomAuth, roomLogout } from "../../store/actions/room";
import { connect } from "react-redux";

const img = require("../../../assets/image.png");

class LoginRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roomName: "",
      roomPassword: "",
      office: "NULL",
    };
  }

  componentDidMount = () => {
    this.props.onLogout();
  };

  componentDidUpdate = () => {
    var loggedRoom = this.props.roomLogged;
    if (
      loggedRoom != null &&
      this.props.userLogged != null &&
      loggedRoom.status == 200
    ) {
      var loggedUser = this.props.userLogged.user;
      if (this.state.office == "SM") {
        this.props.navigation.navigate(
          "ScrumMasterStoriesList",
          (params = { loggedRoom, loggedUser })
        );
      } else if (this.state.office == "TD") {
        this.props.navigation.navigate(
          "Poker",
          (params = { loggedRoom, loggedUser })
        );
      } else if (this.state.office == "GU" || this.state.office == "PO") {
        this.props.navigation.navigate(
          "ProductOwnerStoriesList",
          (params = { loggedRoom, loggedUser })
        );
      }
    } else if (loggedRoom != null && loggedRoom.status == 500) {
      this.props.onLogout();
      Alert.alert(
        "Ops :(",
        "Não foi possível realizar o login na sala.\nVerifique as informações e tente novamente"
      );
    } else {
      this.props.onLogout();
    }
  };

  validateFields = () => {
    if (this.state.roomName == "" || this.state.roomPassword == "") {
      Alert.alert("Ops", "Preencha todos os campos");
    } else if (this.state.office == "NULL") {
      Alert.alert("Ops", "Escolha o papel no time");
    } else {
      this.login();
    }
  };

  login = () => {
    var loggedUser = this.props.userLogged.user;
    var data = {
      room: {
        roomName: this.state.roomName,
        roomPassword: this.state.roomPassword,
        createdBy: loggedUser.data.userEmail,
      },
      member: {
        email: loggedUser.data.userEmail,
        name: loggedUser.data.userName,
        avatar: createNameAvatar(loggedUser.data.userName),
        office: this.state.office,
      },
    };
    this.props.onLogin({ data });
  };

  render() {
    return (
      <View style={globalStyle.container}>
        <Container>
          <Content
            transparent
            contentContainerStyle={{ flexGrow: 1, marginHorizontal: 20 }}
          >
            <View style={style.viewLogo}>
              <Image source={img} resizeMode={"contain"} style={style.logo} />
              <H1 style={style.fontTitle}>My Scrum Poker</H1>
              <Text style={style.fontSubtitle}>
                Crie ou faça login em uma sala e aproveite nosso recurso de
                planning poker ONLINE.
              </Text>
            </View>
            <View style={style.viewFields}>
              <TextInput
                value={this.state.roomName}
                onChangeText={(roomName) => this.setState({ roomName })}
                style={style.textInput}
                placeholder="nome da sala"
                autoCapitalize={"none"}
              />
              <TextInput
                value={this.state.roomPassword}
                onChangeText={(roomPassword) => this.setState({ roomPassword })}
                style={[style.textInput, { marginTop: 10 }]}
                autoCapitalize={"none"}
                placeholder="senha da sala"
                secureTextEntry={true}
              />
              <Picker
                note
                mode="dropdown"
                style={style.picker}
                selectedValue={this.state.office}
                onValueChange={(itemValue, itemPosition) =>
                  this.setState({
                    office: itemValue,
                    choooseIndex: itemPosition,
                  })
                }
              >
                <Picker.Item label="Qual o seu papel no time?" value="NULL" />
                <Picker.Item label="Convidado" value="GU" />
                <Picker.Item label="Product Owner" value="PO" />
                <Picker.Item label="Scrum Master" value="SM" />
                <Picker.Item label="Time de Desenvolvimento" value="TD" />
              </Picker>
            </View>
            <View style={style.viewButtons}>
              <TouchableOpacity
                style={style.buttonLogin}
                onPress={() => this.validateFields()}
              >
                {this.props.isLoading && (
                  <ActivityIndicator color={"#fff"} size="small" />
                )}
                {!this.props.isLoading && (
                  <Text style={style.labelButtonLogin}>ENTRAR NA SALA</Text>
                )}
              </TouchableOpacity>
            </View>
          </Content>
        </Container>
      </View>
    );
  }
}

const mapStateToProps = ({ userLogged, roomLogged }) => {
  console.log(`USERLOGGED >>> ${JSON.stringify(userLogged)}`);
  console.log(`ROOMLOGGED >>> ${JSON.stringify(roomLogged)}`);
  return {
    isLoading: roomLogged.isLoading,
    roomLogged: roomLogged.room,
    userLogged: userLogged.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: (room) => dispatch(roomAuth(room)),
    onLogout: () => dispatch(roomLogout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginRoom);
