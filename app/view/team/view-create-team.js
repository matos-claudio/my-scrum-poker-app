import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  TextInput,
  Alert,
  ActivityIndicator,
} from "react-native";
import { Container, Content, H1, Picker } from "native-base";
import { connect } from "react-redux";
import Header from "../components/Header";
import TeamController from "../../controllers/team/team-controller";
import { myTeamList } from "../../store/actions/team/action-team";
import styles from './style';

class ViewCreateTeam extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teamName: "",
      teamPassword: "",
      teamConfPassword: "",
      teamDescription: "",
      isLoading: false,
      office: "NULL",
    };
    this.teamController = new TeamController();
    this.user = props.navigation.getParam("user");
  }

  isLoading = (isLoading) => {
    this.setState({ isLoading });
  };

  validateFields = () => {
    if (this.state.office === "NULL") {
      Alert.alert("Ops :(", "Preencha qual o seu papel na equipe");
      return false;
    }
    if (this.state.teamName === "") {
      Alert.alert("Ops :(", "Preencha o campo nome equipe");
      return false;
    }
    if (this.state.teamPassword === "") {
      Alert.alert("Ops :(", "Preencha o campo senha equipe");
      return false;
    }
    if (this.state.teamDescription === "") {
      Alert.alert("Ops :(", "Preencha o campo descrição da equipe");
      return false;
    }
    if (this.state.teamConfPassword !== this.state.teamPassword) {
      Alert.alert("Ops :(", "As senhas digitadas não são iguais");
      return false;
    }
    return true;
  };

  saveTeam = async () => {
    if (this.validateFields()) {
      this.isLoading(true);
      const data = {
        teamName: this.state.teamName,
        teamPassword: this.state.teamPassword,
        teamDescription: this.state.teamDescription,
        userEmail: this.user.email,
        userName: this.user.name,
        userOffice: this.state.office,
      };
      const teamResponse = await this.teamController.saveTeam(data);
      console.log(`TEAM ${JSON.stringify(teamResponse)}`)
      if(!teamResponse.hasError) {
        this.props.onSaveTeam(teamResponse.data);
        this.alertShareQrCode(this.state.teamName, this.state.teamPassword);
      }
    }
  };

  alertShareQrCode = (teamName, teamPassword) => {
    Alert.alert(':)', `Equipe ${this.state.teamName} criada.\nDeseja gerar o invite via QRCode?`, [
      {
        text: "Não",
        onPress: () => console.log(`Cancelado`),
        style: 'cancel',
      },
      {
        text: "Sim",
        onPress: () => this.openShareQrCode(teamName, teamPassword),
      }
    ], { cancelable: false });
  }

  openShareQrCode = (teamName, teamPassword) => {
    this.props.navigation.navigate('ViewShareQrCode', { data: { teamName, teamPassword } });
  }

  render() {
    return (
      <Container style={styles.background}>
        <StatusBar barStyle="dark-content" backgroundColor={"#fff"} />
        <Header
          color="#000"
          navigate={this.props.navigation}
          enableButton={true}
          withParam={true}
        />
        <Content contentContainerStyle={{ flexGrow: 1 }}>
          <View style={[styles.container, { padding: 20 }]}>
            <H1 style={styles.h1}>Criar equipe</H1>
            <Text style={styles.subtitle}>
              Crie a sua equipe,{"\n"}convide seus colegas e vamos para a{"\n"}
              Planning.
            </Text>
          </View>
          <View style={styles.viewFields}>
            <Picker
              note
              mode="dropdown"
              style={styles.picker}
              selectedValue={this.state.office}
              onValueChange={(itemValue, itemPosition) =>
                this.setState({
                  office: itemValue,
                  choooseIndex: itemPosition,
                })
              }
            >
              <Picker.Item label="Qual o seu papel no time?" value="NULL" />
              <Picker.Item label="Product Owner" value="PO" />
              <Picker.Item label="Scrum Master" value="SM" />
              <Picker.Item label="Time de Desenvolvimento" value="TD" />
            </Picker>
            <TextInput
              style={styles.textInput}
              autoCapitalize="none"
              placeholder="nome equipe"
              placeholderTextColor="#757575"
              maxLength={20}
              onChangeText={(teamName) => this.setState({ teamName })}
              value={this.state.teamName}
            />
            <TextInput
              style={styles.textInput}
              autoCapitalize="none"
              secureTextEntry={true}
              placeholder="senha equipe"
              placeholderTextColor="#757575"
              maxLength={20}
              blurOnSubmit={false}
              onSubmitEditing={() => Keyboard.dismiss()}
              textContentType="username"
              onChangeText={(teamPassword) => this.setState({ teamPassword })}
              value={this.state.teamPassword}
            />
            <TextInput
              style={styles.textInput}
              autoCapitalize="none"
              secureTextEntry={true}
              placeholder="confirme a senha equipe"
              placeholderTextColor="#757575"
              maxLength={20}
              blurOnSubmit={false}
              onSubmitEditing={() => Keyboard.dismiss()}
              textContentType="username"
              onChangeText={(teamConfPassword) =>
                this.setState({ teamConfPassword })
              }
              value={this.state.teamConfPassword}
            />
            <TextInput
              style={[styles.textInput, { height: 120 }]}
              autoCapitalize="none"
              placeholder="descrição da equipe"
              placeholderTextColor="#757575"
              maxLength={100}
              textAlignVertical="top"
              multiline={true}
              numberOfLines={5}
              onChangeText={(teamDescription) =>
                this.setState({ teamDescription })
              }
              value={this.state.teamDescription}
            />
          </View>
          <View style={styles.viewButton}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.saveTeam()}
            >
              {!this.state.isLoading && (
                <Text style={styles.textButton}>CADASTRAR</Text>
              )}
              {this.state.isLoading && <ActivityIndicator color="#fff" />}
            </TouchableOpacity>
          </View>
        </Content>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return { onSaveTeam: (teams) => dispatch(myTeamList(teams)) };
};

export default connect(null, mapDispatchToProps)(ViewCreateTeam);