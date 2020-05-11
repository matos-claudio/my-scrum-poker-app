import React, { Component } from 'react'
import { Container, Content, H3, View, Text, Input, H1 } from 'native-base'
import { TouchableOpacity, ActivityIndicator, TextInput, Image } from 'react-native'
import globalStyle from '../../style/app'
import style from './style'
import { authUser } from '../../store/actions/user'
import { connect } from 'react-redux'

const img = require('../../../assets/image.png')

class Login extends Component {
    constructor(props) {
        super(props)
    }

    signup = () => {
        this.props.navigation.navigate('Signup')
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
                            <TextInput style={style.textInput} placeholder="e-mail" autoCapitalize={"none"} />
                            <TextInput style={[style.textInput, { marginTop: 10 }]} autoCapitalize={"none"} placeholder="senha" />
                        </View>
                        <View style={style.viewButtons}>
                            <TouchableOpacity style={style.buttonLogin}>
                                {/* <ActivityIndicator color={"#fff"} size="small" /> */}
                                <Text style={style.labelButtonLogin}>LOGIN</Text>
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

const mapStateToProps = ({userLogged}) => {
    console.log(`USERMAPS... ${JSON.stringify(userLogged)}`)
    return { isLoading: userLogged.isLoading }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogin: user => dispatch(authUser(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)