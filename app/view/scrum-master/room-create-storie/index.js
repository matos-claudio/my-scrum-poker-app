import React, { Component } from 'react'
import { Text, StyleSheet, TouchableOpacity, TextInput, ActivityIndicator, Alert } from 'react-native'
import { Container, Content, View, H1 } from 'native-base'
import Header from '../../components/Header'
import { createStorieInTheRoom, loadedRoom } from '../../../store/actions/room'
import { connect } from 'react-redux'
import RoomService from '../../../service/room'

export default class CreateStorie extends Component {
    constructor(props) {
        super(props)

        this.state = {
            historyNumber: '',
            description: '',
            isLoading: false
        }

        this.roomId = props.navigation.state.params.roomId
        this.roomService = new RoomService()
        this.user = props.navigation.state.params.user

        console.log(`CREATESTORIE >>> ${JSON.stringify(props)}`)
    }


    componentDidMount = () => {
        //this.roomId = this.props.roomLogged.room.data._id
        //console.log(`DIDUPDATE>>> ${JSON.stringify(this.roomId)}`)
    }

    // componentDidUpdate = (prevProps) => {
    //     var loggedRoom = this.props.roomLogged
    //     console.log(`DIDUPDATE>>> ${JSON.stringify(prevProps)}`)
    //     console.log(`DIDUPDATE2>>> ${JSON.stringify(this.props.isLoading)}`)
    //     if (loggedRoom != null) {
    //         console.log(`componentDidUpdate>>>>>>>>>> ${JSON.stringify(loggedRoom)}`)
    //        this.props.navigation.navigate('Login', params = { loggedRoom })
    //     }
    // }

    validateFields = () => {
        if (this.state.historyNumber == '' || this.state.description == '') {
            Alert.alert('Ops', 'Preencha todos os campos')
        } else {
            this.createStorie()
        }
    }

    createStorie = async () => {
        var data = { roomId: this.roomId, historyNumber: this.state.historyNumber, description: this.state.description, createdBy: this.user.data.userEmail }
        try {
            this.setState({ isLoading: true })
            let result = await this.roomService.createStorieInTheRoom(data)
            this.props.navigation.navigate('ScrumMasterStoriesList', params = { loggedRoom: result.data })
            console.log(`RESULT >>> ${JSON.stringify(result)}`)
        } catch (error) {
            console.log(`ERROR >>> ${error}`)
        } finally{
            this.setState({ isLoading: false })
        }

    }

    render() {
        return (
            <Container>
                <Header navigate={this.props.navigation} margin title={""} />
                <Content contentContainerStyle={{ flexGrow: 1, marginHorizontal: 20 }}>
                    <View style={styles.viewWeight1}>
                        <H1 style={styles.h1}>Olá Scrum Master</H1>
                        <Text style={styles.h3}>Crie uma história para que o time possa realizar o Planning Poker.</Text>
                    </View>
                    <View style={styles.viewFields}>
                        <TextInput keyboardType={"numeric"} value={this.state.historyNumber} onChangeText={(historyNumber) => this.setState({ historyNumber })} style={styles.textInput} placeholder={"Número da história"} />
                        <TextInput value={this.state.description} onChangeText={(description) => this.setState({ description })} style={styles.textInputStorie} maxLength={100} multiline placeholder={"Descrição da história"} />
                    </View>
                    <View style={styles.viewWeight1}>
                        <TouchableOpacity style={style.buttonLogin} onPress={() => this.validateFields()}>
                            {this.state.isLoading && <ActivityIndicator color={"#fff"} size="small" />}
                            {!this.state.isLoading && <Text style={style.labelButtonLogin}>CRIAR HISTÓRIA</Text>}
                        </TouchableOpacity>
                    </View>
                </Content>
            </Container>
        )
    }
}

// const mapStateToProps = ({ userLogged, roomLogged }) => {
//     console.log(`USERLOGGED >>> ${JSON.stringify(userLogged)}`)
//     console.log(`ROOMLOGGED >>> ${JSON.stringify(roomLogged)}`)
//     return { isLoading: roomLogged.isLoading, roomLogged: roomLogged.room, userLogged: userLogged.user }
// }

// const mapDispatchToProps = dispatch => {
//     return { onCreateStorie: data => dispatch(createStorieInTheRoom(data)) }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(CreateStorie)

const styles = StyleSheet.create({
    viewWeight1: {
        flex: 1,
    },
    h1: {
        color: 'grey',
        fontWeight: 'bold'
    },
    h3: {
        color: 'grey',
        marginTop: 5,
        opacity: 0.8,
        fontSize: 16
    },
    viewFields: {
        flex: 2,
        justifyContent: "flex-start"
    },
    textInput: {
        backgroundColor: '#fff',
        height: 45,
        borderWidth: 0.3,
        padding: 5,
        borderColor: 'grey',
        borderRadius: 5,
        color: 'grey',
        marginTop: 10
    },
    textInputStorie: {
        backgroundColor: '#fff',
        height: 90,
        borderWidth: 0.3,
        padding: 5,
        borderColor: 'grey',
        borderRadius: 5,
        color: 'grey',
        marginTop: 10
    },
    buttonLogin: {
        backgroundColor: '#6a1b9a',
        height: 45,
        justifyContent: "center",
        borderRadius: 5
    },

    labelButtonLogin: {
        alignSelf: "center",
        fontWeight: "bold",
        color: '#fff'
    },
})