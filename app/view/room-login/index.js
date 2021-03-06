import React, { Component } from 'react'
import { Container, Content, H3, View, Text, H1, Picker } from 'native-base'
import { TouchableOpacity, ActivityIndicator, TextInput, Image, Alert } from 'react-native'
import globalStyle from '../../style/app'
import style from './style'
import HeaderComponent from '../components/HeaderComponent'
import { createNameAvatar } from '../../helper/helper'

import { roomAuth } from '../../store/actions/room'
import { connect } from 'react-redux'

const img = require('../../../assets/image.png')

class LoginRoom extends Component {
    constructor(props) {
        super(props)
        this.state = {
            roomName: 'Sprint 01 - Maio',
            roomPassword: '1234DX',
            office: 'SM'
        }
    }

    componentDidUpdate = () => {
        var loggedRoom = this.props.roomLogged
        
        if (loggedRoom != null) {
            var loggedUser = this.props.userLogged.user
            console.log(`loggedRoom>>> ${JSON.stringify(loggedRoom)}`)
            var user = this.searchUseRole(loggedRoom, loggedUser.data.userEmail)
            if (user.office == 'SM') {
                this.props.navigation.navigate('ScrumMasterStoriesList', params = { loggedRoom, loggedUser })
            } else if (user.office == 'TD'){
                this.props.navigation.navigate('TeamDevStoriesList')
            } else {
                Alert.alert(':)', 'P.O')
            }
        }
    }

    searchUseRole = (loggedRoom, userEmail) => {
        return loggedRoom.room.data.members.find(m => m.email == userEmail)
    }

    validateFields = () => {
        if (this.state.roomName == '' || this.state.roomPassword == '') {
            Alert.alert('Ops', 'Preencha todos os campos')
        } else if (this.state.office == 'NULL') {
            Alert.alert('Ops', 'Escolha o papel no time')
        } else {
            this.login()
        }
    }

    login = () => {
        var loggedUser = this.props.userLogged.user
        var data = {
            room: { roomName: this.state.roomName, roomPassword: this.state.roomPassword, createdBy: loggedUser.data.userEmail },
            member: { email: loggedUser.data.userEmail, name: loggedUser.data.userName, avatar: createNameAvatar(loggedUser.data.userName), office: this.state.office }
        }
        this.props.onLogin({ data })
    }

    render() {
        return (
            <View style={globalStyle.container}>
                <Container>
                    <HeaderComponent margin />
                    <Content transparent contentContainerStyle={{ flexGrow: 1, marginHorizontal: 20 }}>
                        <View style={style.viewLogo}>
                            <Image source={img} resizeMode={"contain"} style={style.logo} />
                            <H1 style={style.fontTitle}>My Scrum Poker</H1>
                            <Text style={style.fontSubtitle}>Crie ou faça login em uma sala e aproveite nosso recurso de planning poker ONLINE.</Text>
                        </View>
                        <View style={style.viewFields}>
                            <TextInput value={this.state.roomName} onChangeText={(roomName) => this.setState({ roomName })} style={style.textInput} placeholder="nome da sala" autoCapitalize={"none"} />
                            <TextInput value={this.state.roomPassword} onChangeText={(roomPassword) => this.setState({ roomPassword })} style={[style.textInput, { marginTop: 10 }]} autoCapitalize={"none"} placeholder="senha da sala" secureTextEntry={true} />
                            <Picker note mode="dropdown" style={style.picker} selectedValue={this.state.office} onValueChange={(itemValue, itemPosition) =>
                                this.setState({ office: itemValue, choooseIndex: itemPosition })}>
                                <Picker.Item label="Qual o seu papel no time?" value="NULL" />
                                <Picker.Item label="Convidado" value="GU" />
                                <Picker.Item label="Product Owner" value="PO" />
                                <Picker.Item label="Scrum Master" value="SM" />
                                <Picker.Item label="Time de Desenvolvimento" value="TD" />
                            </Picker>
                        </View>
                        <View style={style.viewButtons}>
                            <TouchableOpacity style={style.buttonLogin} onPress={() => this.validateFields()}>
                                {this.props.isLoading && <ActivityIndicator color={"#fff"} size="small" />}
                                {!this.props.isLoading && <Text style={style.labelButtonLogin}>ENTRAR NA SALA</Text>}
                            </TouchableOpacity>
                        </View>
                    </Content>
                </Container>
            </View>
        )
    }
}

const mapStateToProps = ({ userLogged, roomLogged }) => {
    console.log(`USERLOGGED >>> ${JSON.stringify(userLogged)}`)
    console.log(`ROOMLOGGED >>> ${JSON.stringify(roomLogged)}`)
   return { isLoading: roomLogged.isLoading, roomLogged: roomLogged.room, userLogged: userLogged.user }
}

const mapDispatchToProps = dispatch => {
    return { onLogin: room => dispatch(roomAuth(room)) }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginRoom)