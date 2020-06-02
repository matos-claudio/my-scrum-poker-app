import React, { Component } from 'react'
import { FlatList, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import { ListItem, Container, Content, Right, Left, Body, Footer, View } from 'native-base'
import HeaderComponent from '../../components/HeaderComponent';
import AvatarListComponent from '../../components/AvatarListComponent';
import socketIOClient from "socket.io-client";
import { URL } from '../../../service/config/constants'
import OnlineUsersComponent from '../../components/OnlineUsersComponent';
import { connect } from 'react-redux'
import RoomService from '../../../service/room';

class ProductOwnerStoriesList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            active: false,
            votes: [],
            members: [],
            messageListMember: 'Aguardando a votação do time...',
            isAvailable: false,
            buttonText: ''
        }

        this.stories = []
        this.socketConnect = this.socketConnect.bind(this)
        this.socketConnect()

        this.roomService = new RoomService()
    }

    socketConnect = () => {
        // this.socket = SocketIOClient(BASE_URL, { query: { idAsapSocket: userId } })
         this.socket = socketIOClient(URL)
         
         this.socket.on('connect', () => {
            console.log('Conectado ao socket...');
         })
         this.socket.on('onlineMembers', members => {
            console.log(`membros logados... ${JSON.stringify(members.members)}`)
            this.setState({ members })
         })
         this.socket.on('votesFromMembers', votes => {
            console.log(`VOTANDO ... ${JSON.stringify(votes)}`)
            this.setState({ votes })
         })
    }


    findNameInMembers = (email) => {
        var result = this.state.members.members.find(member => member.email == email)
        return result.name
    }

    componentWillMount = () => {
        const loggedRoom = this.props.navigation.state.params.loggedRoom
        this.stories = loggedRoom.room.data.stories.length > 0 ? loggedRoom.room.data.stories : []
        this.roomId = loggedRoom.room.data._id
        this.loggedUser = this.props.navigation.state.params.loggedUser
        var result = loggedRoom.room.data.stories.find(storie => storie.isCompleted == false)
        var isAvailable = result != undefined ? result.isAvailable : false

        this.setState({isAvailable})
        console.log(`SMLOGGED>>> ${JSON.stringify(loggedRoom)}`)

        
    }

    render() {
        return (
            <Container>
                <HeaderComponent margin name={this.loggedUser.data.userName}/>
                <Content style={{ flexGrow: 3 }}>
                    <FlatList
                        data={this.state.votes}
                        renderItem={({ item }) =>
                            <ListItem thumbnail>
                                <Left>
                                    <AvatarListComponent avatar={item.score || "..."} />
                                </Left>
                                <Body>
                                    <Text style={style.title}>{this.findNameInMembers(item.member)}</Text>
                                </Body>
                            </ListItem>
                        }
                        keyExtractor={item => item._id}
                        ListEmptyComponent={() => {
                            return (
                                <View style={{ alignItems: "center", alignContent: "center" }}>
                                    <Text style={style.labelAwait}>{this.state.messageListMember}</Text>
                                </View>
                            )
                        }} />
                </Content>
                <View style={{ minHeight: 200, backgroundColor: 'grey' }}>  
                    <OnlineUsersComponent members={this.state.members.members}/>
                </View>
            </Container>
        )
    }
}

const mapStateToProps = ({ userLogged, roomLogged }) => {
    console.log(`POKERROOMUSER >>> ${JSON.stringify(userLogged)}`)
    console.log(`POKERROOM >>> ${JSON.stringify(roomLogged)}`)
   return { isLoading: roomLogged.isLoading, roomLogged: roomLogged.room, userLogged: userLogged.user }
}


export default connect(mapStateToProps)(ProductOwnerStoriesList)

const style = StyleSheet.create({
    title: {
        fontSize: 16,
        color: 'grey',
        fontWeight: 'bold'
    },
    note: {
        fontSize: 14,
        color: 'grey',
        fontWeight: 'bold',
        opacity: 0.5
    },
    labelButton: {
        color: '#6a1b9a',
        // color: 'grey',
        fontSize: 12,
        fontWeight: "bold"
    },
    footer: {
        backgroundColor: '#fff',
    },
    points: {
        color: 'grey',
        fontSize: 18,
        fontWeight: "bold"
    },
    viewFooter: {
        flex: 1,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "flex-end",
        marginHorizontal: 15
    },
    labelAwait: {
        color: 'grey', 
        fontWeight: "bold", 
        fontSize: 14
    }
})