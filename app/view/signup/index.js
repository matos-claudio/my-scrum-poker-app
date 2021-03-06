import React, { Component } from 'react'
import { Container, Content, H3, H1, View, Text, Input } from 'native-base'
import { TouchableOpacity, ActivityIndicator, TextInput, Image, Alert } from 'react-native'
import globalStyle from '../../style/app'
import style from './style'
import HeaderComponent from '../components/HeaderComponent'
import AvatarComponent from '../components/AvatarComponent'
import { createNameAvatar } from '../../helper/helper'
import Header from '../components/Header'
import SignupService from '../../service/signup'

const img = require('../../../assets/image.png')

export default class Signup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            avatar: null,
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            isLoading: false
        }

        this.signUpService = new SignupService()
    }

    // onBlurName = (text) => {
    //     if (text.nativeEvent.text == '') {
    //         alert('Preencha o campo Nome')
    //     } else {
    //         var initials = createNameAvatar(text)
    //         this.setState({ avatar: initials })
    //     }
    // }

    validateFields = () => {
        if (this.state.name == '' || this.state.email == '' || this.state.password == '' || this.state.confirmPassword == '') {
            Alert.alert('Ops', 'Preencha todos os campos')
        } else if (this.state.password != this.state.confirmPassword) {
            Alert.alert('Ops', 'As senhas digitadas não são iguais')
        } else {
            this.signUp()
        }
    }

    signUp = async () => {
        try {
            this.setState({ isLoading: true })
            let data = { userEmail: this.state.email, userName: this.state.name, userPassword: this.state.password }
            await this.signUpService.signupServiceRequest(data)
            this.setState({ isLoading: false })
            this.navigateToLogin()
        } catch (error) {
            Alert.alert('Ops', 'Erro ao realizar cadastro')
            this.setState({ isLoading: false })
        }
    }

    navigateToLogin = () => {
        this.props.navigation.navigate('Login')
    }

    render() {
        return (
            <View style={globalStyle.container}>
                <Container>
                    <Header title={""} navigate={this.props.navigation} enableButton={true} margin={15} />
                    <Content transparent contentContainerStyle={{ flexGrow: 1, marginHorizontal: 20 }}>
                        <View style={style.viewLogo}>
                            <Image source={img} resizeMode={"contain"} style={style.logo} />
                            <H1 style={style.fontTitle}>My Scrum Poker</H1>
                            <Text style={style.fontSubtitle}>Sua planning mais ágil como tem de ser.</Text>
                        </View>
                        <View style={style.viewFields}>
                            <TextInput style={style.textInput} autoCapitalize='none' placeholder="e-mail" onChangeText={(email) => this.setState({ email })} />
                            <TextInput style={[style.textInput, { marginTop: 10 }]} placeholder="nome" onChangeText={(name) => this.setState({ name })} />
                            <TextInput style={[style.textInput, { marginTop: 10 }]} autoCapitalize='none' secureTextEntry={true} onChangeText={(password) => this.setState({ password })} placeholder="senha" />
                            <TextInput style={[style.textInput, { marginTop: 10 }]} autoCapitalize='none' secureTextEntry={true} onChangeText={(confirmPassword) => this.setState({ confirmPassword })} placeholder="confirmação de senha" />
                        </View>
                        <View style={style.viewButtons}>
                            <TouchableOpacity style={globalStyle.primaryButton} onPress={() => this.validateFields()}>
                                {this.state.isLoading && <ActivityIndicator color={"#fff"} size="small" />}
                                {!this.state.isLoading && <Text style={globalStyle.primaryButtonLabel}>CADASTRAR</Text>}
                            </TouchableOpacity>
                            <View style={style.viewButtonSignup}>
                                <Text style={style.labelSignup}>Já possui uma conta? </Text>
                                <TouchableOpacity onPress={() => this.navigateToLogin()}>
                                    <Text style={globalStyle.labelButtonLoginSignup}>Login</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Content>
                </Container>
            </View>
        )
    }
}