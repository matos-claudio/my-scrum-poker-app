import React, { Component } from 'react'
import globalStyle from '../../style/app'
import { View, Container, Content, H1 } from 'native-base'
import { TouchableOpacity, Text, FlatList, StyleSheet } from 'react-native'
import CardFlip from 'react-native-card-flip';
import socketIOClient from "socket.io-client";
import HeaderComponent from '../components/HeaderComponent';
import AvatarComponent from '../components/AvatarComponent';
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
                <HeaderComponent />
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
                            {/* <Text>Time Scrum</Text> */}
                            <Text style={{ color: 'grey', fontWeight: "bold", fontSize: 12 }}>Time Scrum</Text>
                            <View style={{ flexDirection: "row", marginTop: 5 }}>
                                <AvatarComponent score={5} avatar={"CM"} />
                                <AvatarComponent score={5} avatar={"JS"} />
                                <AvatarComponent score={8} avatar={"EF"} />
                                <AvatarComponent score={5} avatar={"EF"} />
                                <AvatarComponent score={3} avatar={"CM"} />
                                <AvatarComponent score={3} avatar={"JS"} />
                            </View>

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