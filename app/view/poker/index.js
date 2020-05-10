import React, { Component } from 'react'
import globalStyle from '../../style/app'
import { View, Container, Content, H1 } from 'native-base'
import { TouchableOpacity, Text, FlatList, StyleSheet, Modal, TouchableHighlight } from 'react-native'
import CardFlip from 'react-native-card-flip';
import socketIOClient from "socket.io-client";
import HeaderComponent from '../components/HeaderComponent';
import AvatarComponent from '../components/AvatarComponent';
import AvatarComponentWitchBadge from '../components/AvatarComponentWitchBadge';
const ENDPOINT = "http://192.168.100.75:3000";
import { createNameAvatar } from '../../helper/helper'



const cards = [0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 200, 300, 400]

export default class Poker extends Component {
    constructor(props) {
        super(props)

        this.state = {
            date: '',
            members: [],
            votes: [],
            modalIsVisible: false
        }

        this.socketConnect = this.socketConnect.bind(this)
        this.socketConnect()
    }

    socketConnect = () => {
        // this.socket = SocketIOClient(BASE_URL, { query: { idAsapSocket: userId } })
        this.socket = socketIOClient(ENDPOINT)
        this.socket.on('connect', () => {
            console.log('Conectado ao socket...');
        })
        this.socket.on('FromAPI', data => {
            console.log(`consultando socket... ${data}`)
            this.setState({ date: data })
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

    componentWillMount() {
        // this.socket.on('votesFromMembers', votes => {
        //     console.log(`votos ... ${JSON.stringify(votes)}`)
        //     this.setState({ votes })
        // })

        // this.socket.on('onlineMembers', members => {
        //     console.log(`membros logados... ${JSON.stringify(members.members)}`)
        //     this.setState({ members })
        // })
        this.socket.on('onlineMembers', members => {
            console.log(`membros logados... ${JSON.stringify(members.members)}`)
            this.setState({ members })
        })
    }

    renderItem = ({ item, index }) => {
        return (
            <View style={styles.container}>
                <CardFlip style={styles.cardContainer} ref={(card) => this['card' + index] = card} >
                    {/* <TouchableOpacity style={styles.card} onPress={() => this['card' + index].flip()} > */}
                    <TouchableOpacity style={styles.card} onPress={() => this.setState({modalIsVisible: true})} >
                        <Text style={styles.label}>{item}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.card1} onPress={() => this['card' + index].flip()} >
                        <Text style={styles.label}>{item}</Text>
                    </TouchableOpacity>
                </CardFlip>
            </View>
        )
    }

    renderMembers = ({ item }) => {
        console.log(`LISTA >>> ${JSON.stringify(item)}`)
        return (
            <AvatarComponent avatar={createNameAvatar(item.name)} />
        )
    }

    renderVotes = ({ item }) => {
        console.log(`ITEM >>> ${JSON.stringify(item)}`)
        return (
            <AvatarComponentWitchBadge avatar={item.avatar} score={item.score} />
        )
    }

    render() {
        return (
            <View style={globalStyle.container}>
                <HeaderComponent margin />
                <Container style={{ backgroundColor: '#fff' }}>
                    <Content transparent contentContainerStyle={{ flexGrow: 1, marginHorizontal: 20 }}>
                        <View style={{ flex: 1, marginHorizontal: 10, justifyContent: "center" }}>
                            <H1 style={{ color: 'grey', fontWeight: "bold" }}>0001</H1>
                            <Text style={{ color: 'grey' }}>Verificar uptime das aplicações</Text>
                        </View>
                        <View style={{ height: 500, minHeight: 400 }}>
                            <FlatList
                                data={cards}
                                numColumns={3}
                                renderItem={this.renderItem}
                            />
                        </View>
                        <View style={{ flex: 2, backgroundColor: '#fff', marginTop: 1, padding: 10, marginHorizontal: 10 }}>
                            <Text style={{ color: 'grey', fontWeight: "bold", fontSize: 12 }}>Time Scrum</Text>
                            <View style={{ marginTop: 5 }}>
                                <FlatList
                                    data={this.state.members.members}
                                    numColumns={6}
                                    renderItem={this.renderMembers}
                                    ListEmptyComponent={() => {
                                        return (
                                            <Text>Nenhum membro online</Text>
                                        )
                                    }}
                                />
                            </View>
                        </View>
                    </Content>
                    <View>
                        <Modal
                            animationType="slide"
                            transparent={false}
                            visible={this.state.modalIsVisible}
                            onRequestClose={() => {
                                Alert.alert('Modal has been closed.');
                            }}>
                            <View style={{ flex: 1, marginHorizontal: 20 }}>
                                <HeaderComponent />
                                <View style={{ marginHorizontal: 10 }}>
                                    <H1 style={{ color: 'grey', fontWeight: "bold" }}>0001</H1>
                                    <Text style={{ color: 'grey' }}>Verificar uptime das aplicações</Text>
                                </View>
                                <View style={{ flexDirection: "row", flex: 3, marginTop: 20 }}>
                                    <View style={{ flex: 1, marginLeft: 10, justifyContent: "center" }}>
                                        <FlatList
                                            data={this.state.votes.length > 0 ? this.state.votes : this.state.members.members}
                                            numColumns={1}
                                            renderItem={this.state.votes.length > 0 ? this.renderVotes : this.renderMembers}
                                        />
                                        {/* <FlatList
                                            data={this.state.votes}
                                            numColumns={1}
                                            renderItem={this.renderVotes}
                                        /> */}
                                    </View>
                                    <View style={{ flex: 3, justifyContent: "center" }}>
                                        <View style={{
                                            borderRadius: 10, backgroundColor: '#6a1b9a', width: 200, height: 250,
                                            alignItems: "center", justifyContent: "center"
                                        }}>
                                            <Text style={{ color: '#fff', fontSize: 128, fontWeight: "bold" }}>5</Text>
                                            <Text style={{ color: '#fff', fontSize: 18, fontWeight: "bold" }}>seu voto</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                                    {/* <Text style={{fontSize: 18, color: 'grey'}}>Aguarde a finalização da votação...</Text> */}
                                    <Text style={{ color: 'grey', fontWeight: "bold" }}>Aguardando a finalização da votação...</Text>
                                </View>
                            </View>
                        </Modal>

                    </View>
                </Container>
            </View>
        )
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#F5FCFF',
    },
    cardContainer: {
        width: 100,
        height: 130,
        margin: 5,
    },
    card: {
        width: 100,
        height: 130,
        backgroundColor: '#6a1b9a',
        shadowColor: 'rgba(0,0,0,0.5)',
        shadowOffset: {
            width: 1,
            height: 1,
        },
        borderWidth: 4,
        shadowOpacity: 0.5,
        borderColor: '#4a148c',
        borderRadius: 10,
        // marginBottom: 5,
        justifyContent: "center",
        alignItems: "center"
    },
    card1: {
        width: 100,
        height: 130,
        backgroundColor: '#e64a19',
        shadowColor: 'rgba(0,0,0,0.5)',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.5,
        borderWidth: 5,
        borderColor: '#FE474C',
        borderRadius: 10,
        marginBottom: 5,
        justifyContent: "center",
        alignItems: "center"
    },
    card2: {
        backgroundColor: '#FEB12C',
    },
    label: {
        // lineHeight: 470,
        textAlign: 'center',
        fontSize: 45,
        fontFamily: 'System',
        color: '#ffffff',
        backgroundColor: 'transparent',
        fontWeight: "bold"
    },
});