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

class ScrumMasterStoriesList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            active: false,
            votes: [],
            members: [],
            messageListMember: 'Libere a votação para o time.',
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
        return result != null ? result.name : ''
    }

    componentWillMount = () => {
        const loggedRoom = this.props.navigation.state.params.loggedRoom
        this.stories = loggedRoom.room.data.stories.length > 0 ? loggedRoom.room.data.stories : []
        this.roomId = loggedRoom.room.data._id
        this.loggedUser = this.props.navigation.state.params.loggedUser
        var result = loggedRoom.room.data.stories.find(storie => storie.isCompleted == false)
        var isAvailable = result != undefined ? result.isAvailable : false

        this.setState({isAvailable, buttonText: isAvailable ? 'Finalizar votação' : 'Liberar votação'})
        console.log(`SMLOGGED>>> ${JSON.stringify(loggedRoom)}`)
    }

    openVote = async () => {
        try {
            await this.roomService.openVotes(this.roomId)
            this.setState({isAvailable: true, buttonText: 'Finalizar votação', messageListMember: 'Aguardando a votação do time...'})
        } catch (error) {
            Alert.alert('Ops', 'Erro ao abrir votação '+error)
        }        
    }

    endVote = async () => {
        try {
            await this.roomService.endVotes(this.roomId)
            this.setState({isAvailable: false, buttonText: 'Liberar votação', messageListMember: 'Libere a votação para o time.', votes: []})
        } catch (error) {
            Alert.alert('Ops', 'Erro ao encerrar votação '+error)
        }  
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
                                    {/* <Text numberOfLines={1} note style={style.note}>
                                        {item.description}
                                    </Text> */}
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
                <View style={{ minHeight: 200 }}>  
                    <OnlineUsersComponent members={this.state.members.members}/>
                </View>
                <Footer style={style.footer}>
                    <View style={{backgroundColor: "#6a1b9a", width: 150, height: 40, borderRadius: 20, alignSelf: "center", alignItems: "center"}}>
                        <TouchableOpacity style={{flex: 1, justifyContent: "center"}} onPress={() => !this.state.isAvailable ? this.openVote() : this.endVote()}>
                        <Text style={{color:'#fff', fontWeight: "bold"}}>{this.state.buttonText}</Text>
                        </TouchableOpacity>
                    </View>  
                </Footer>
            </Container>
        )
    }
}

const mapStateToProps = ({ userLogged, roomLogged }) => {
    console.log(`POKERROOMUSER >>> ${JSON.stringify(userLogged)}`)
    console.log(`POKERROOM >>> ${JSON.stringify(roomLogged)}`)
   return { isLoading: roomLogged.isLoading, roomLogged: roomLogged.room, userLogged: userLogged.user }
}


export default connect(mapStateToProps)(ScrumMasterStoriesList)

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