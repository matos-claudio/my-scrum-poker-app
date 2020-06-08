import React, { Component } from 'react'
import { Container, Content, H3, View, Text, H1 } from 'native-base'
import { TouchableOpacity, ActivityIndicator, TextInput, Image, Alert, AppState, Platform } from 'react-native'
import globalStyle from '../../style/app'
import style from './style'
import { authUser, logout } from '../../store/actions/user'
import { roomLogout } from '../../store/actions/room'
import { connect } from 'react-redux'
import RoomService from '../../service/room'

const img = require('../../../assets/image.png')

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userEmail: '',
            userPassword: ''
        }
        this.roomService = new RoomService()
    }

    componentWillMount(){
        this.props.onLogout()
        this.props.onRoonLogout()
    }

    componentDidMount() {
        AppState.addEventListener('change', this.handleAppStateChange);
    }

    componentWillUnmount(){
        AppState.removeEventListener('change', this.handleAppStateChange)
    }

    handleAppStateChange = async (nextAppState) => {
        console.log(`HANDLE >>> ${JSON.stringify(nextAppState)}`)
        var room = this.props.room
        var userLogged = this.props.user

        if (nextAppState === 'inactive') {
            this.disconnectRoomMember(room, userLogged)
            this.reloadApp()
        }  
        
        if(Platform.OS == 'android'){
            if (nextAppState === 'background') {
                this.disconnectRoomMember(room, userLogged)
                this.reloadApp()
            } 
        }
    }

    reloadApp = () => {
        this.props.navigation.navigate('Login')
    }

    disconnectRoomMember = async (roomLogged, userLogged) => {
        try {
            if(roomLogged != null){
                await this.roomService.disconnectRoomMember({roomId: roomLogged.room.data._id, email: userLogged.user.data.userEmail})
                this.props.onLogout()
            }
        } catch (error) {
            alert('erro '+error)
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
        if (loggedUser != null && loggedUser.status == 200) {
            this.props.navigation.navigate('LoginRoom')
        } else if (loggedUser != null && loggedUser.status == 500){
            this.props.onLogout()
            Alert.alert('Ops :(', 'Não foi possível realizar o login.\nVerifique as informações e tente novamente')
        }else {
            this.props.onLogout()
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

const mapStateToProps = ({ userLogged, roomLogged }) => {
    console.log(`LOGADO>>> ${JSON.stringify(roomLogged)}`)
    return { isLoading: userLogged.isLoading, user: userLogged.user, room: roomLogged.room }
}

const mapDispatchToProps = dispatch => {
    return { 
        onLogin: user => dispatch(authUser(user)),
        onLogout: () => dispatch(logout()),
        onRoonLogout: () => dispatch(roomLogout()) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)