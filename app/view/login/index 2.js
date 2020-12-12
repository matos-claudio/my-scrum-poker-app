import React, { Component } from 'react'
import { Container, Content, H3, View, Text, H1 } from 'native-base'
import { TouchableOpacity, ActivityIndicator, TextInput, Image, Alert } from 'react-native'
import globalStyle from '../../style/app'
import style from './style'
import { authUser } from '../../store/actions/user/action-user'
import { connect } from 'react-redux'

const img = require('../../../assets/image.png')

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userEmail: 'caupath16@gmail.com',
            userPassword: '123'
        }
    }

    login = () => {
        this.props.onLogin({ ...this.state })
    }

    signup = () => {
        this.props.navigation.navigate('Signup')
    }

    componentDidUpdate = () => {
        var loggedUser = this.props.user
        if (loggedUser != null) {
            if (loggedUser.loggedInSucess) {
                this.props.navigation.navigate('LoginRoom')
            } else {
                Alert.alert('Opsss', loggedUser.user.message)
            }
        }
    }

    render() {
        return (
            <View style={globalStyle.container}>
                <Container>
                    <Content transparent contentContainerStyle={{ flexGrow: 1, marginHorizontal: 20 }}>
                        <View style={style.viewLogo}>
                            <Image source={img} resizeMode={"contain"} style={style.logo} />
                            <H1 style={style.fontTitle}>My Scrum Poker</H1>
                        </View>
                        <View style={style.viewFields}>
                            <TextInput value={this.state.userEmail} onChangeText={(userEmail) => this.setState({ userEmail })} style={style.textInput} placeholder="e-mail" autoCapitalize={"none"} />
                            <TextInput value={this.state.userPassword} onChangeText={(userPassword) => this.setState({ userPassword })} style={[style.textInput, { marginTop: 10 }]} autoCapitalize={"none"} placeholder="senha" secureTextEntry={true} />
                        </View>
                        <View style={style.viewButtons}>
                            <TouchableOpacity style={style.buttonLogin} onPress={() => this.login()}>
                                {this.props.isLoading && <ActivityIndicator color={"#fff"} size="small" />}
                                {!this.props.isLoading && <Text style={style.labelButtonLogin}>LOGIN</Text>}
                            </TouchableOpacity>
                            <View style={style.viewButtonSignup}>
                                <Text style={style.labelSignup}>Não possui uma conta? </Text>
                                <TouchableOpacity onPress={() => this.signup()}>
                                    <Text style={style.labelButtonSignup}>Cadastre-se</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Content>
                </Container>
            </View>
        )
    }
}

const mapStateToProps = ({ userLogged }) => {
    return { isLoading: userLogged.isLoading, user: userLogged.user }
}

const mapDispatchToProps = dispatch => {
    return { onLogin: user => dispatch(authUser(user)) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)