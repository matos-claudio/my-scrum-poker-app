import React, { Component } from 'react'
import globalStyle from '../../style/app'
import { View, Container, Content } from 'native-base'
import { TouchableOpacity, Text, FlatList, StyleSheet } from 'react-native'
import CardFlip from 'react-native-card-flip';
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://192.168.100.75:3000";


const cards = [0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 200, 300, 400]

export default class Poker extends Component {
    constructor(props) {
        super(props)

        this.state = {
            date: ''
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
    }

    componentWillMount() {

    }

    renderItem = ({ item, index }) => {
        return (
            <View style={styles.container}>
                <CardFlip style={styles.cardContainer} ref={(card) => this['card' + index] = card} >
                    <TouchableOpacity style={styles.card} onPress={() => this['card' + index].flip()} >
                        <Text style={styles.label}>{item}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.card1} onPress={() => this['card' + index].flip()} >
                        <Text style={styles.label}>{item}</Text>
                    </TouchableOpacity>
                </CardFlip>
            </View>
        )
    }

    render() {
        return (
            <View style={globalStyle.container}>
                <Container style={{ backgroundColor: '#64b5f6' }}>
                    <Content transparent contentContainerStyle={{ flexGrow: 1, marginHorizontal: 20, backgroundColor: '#64b5f6' }}>
                        <View style={{ height: 645, minHeight: 400, backgroundColor: '#64b5f6' }}>
                            <FlatList
                                data={cards}
                                numColumns={3}
                                renderItem={this.renderItem}
                            />
                        </View>
                        <View style={{ flex: 2, backgroundColor: '#fff' }}>
                            <Text>Socket.:: {this.state.date}</Text>
                        </View>
                    </Content>
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
        backgroundColor: '#F5FCFF',
    },
    cardContainer: {
        width: 120,
        height: 150,
        margin: 5,
    },
    card: {
        width: 120,
        height: 150,
        backgroundColor: '#FFDA1A',
        borderRadius: 5,
        shadowColor: 'rgba(0,0,0,0.5)',
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowOpacity: 0.5,
        borderWidth: 5,
        borderColor: 'grey',
        borderRadius: 5,
        // marginBottom: 5,
        justifyContent: "center",
        alignItems: "center"
    },
    card1: {
        width: 120,
        height: 150,
        backgroundColor: '#FE474C',
        borderRadius: 5,
        shadowColor: 'rgba(0,0,0,0.5)',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.5,
        borderWidth: 5,
        borderColor: 'grey',
        borderRadius: 5,
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