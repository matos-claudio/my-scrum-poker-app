import React, { Component } from 'react'
import globalStyle from '../../style/app'
import { View, Container, Content, H1, H3 } from 'native-base'
import { TouchableOpacity, Text, FlatList, StyleSheet, Modal, TouchableHighlight, Alert, AppState, Platform } from 'react-native'
import CardFlip from 'react-native-card-flip';
import HeaderComponent from '../components/HeaderComponent';
import AvatarComponent from '../components/AvatarComponent';
import AvatarComponentWitchBadge from '../components/AvatarComponentWitchBadge';
import { createNameAvatar } from '../../helper/helper'
import OnlineUsersComponent from '../components/OnlineUsersComponent';
import { connect } from 'react-redux'
import RoomNameComponent from '../components/RoomNameComponent';

const cards = [0, 1, 2, 3, 5, 8, 13, 21, '?']

class Poker extends Component {
    constructor(props) {
        super(props)

        this.state = {
            date: '',
            members: [],
            votes: [],
            modalIsVisible: false,
            vote: '',
            labelWaitingVorVotes: 'aguardando os votos dos demais...',
            showButton: false
        }
    }

    componentDidMount = async () => {

    }

    renderMembers = ({ item }) => {
        return (
            <AvatarComponent avatar={createNameAvatar(item.name)} />
        )
    }

    renderVotes = ({ item }) => {
        return (
            <AvatarComponentWitchBadge avatar={item.avatar} score={item.score} />
        )
    }

    renderVote = async (item) => {
        try {
            var member = this.props.userLogged.user.data.userEmail
            var historyNumber = '00001'
            var score = item
            var roomId = this.props.roomLogged.room.data._id
            await this.roomService.insertHistoryPointValue({roomId, member, historyNumber, score})
            this.setState({ modalIsVisible: true, vote: item })
        } catch (error) {
            Alert.alert('Ops', 'Espere até que o Scrum Master inicie a votação')
        }
    }

    keyExtractor = (item, index) => item

    render() {
        return (
            <View style={globalStyle.container}>
                <HeaderComponent name={ this.props.userLogged.user != undefined ? this.props.userLogged.user.data.userName : ''} margin />
                <Container>
                    <Content transparent contentContainerStyle={{ flexGrow: 1, marginHorizontal: 20 }}>
                        <RoomNameComponent roomName={this.props.roomLogged.room.data.roomName}/>
                        <FlatList
                            data={cards}
                            numColumns={3}
                            renderItem={({ item, index }) =>
                            <View style={styles.container} key={index}>
                                <CardFlip style={styles.cardContainer} ref={(card) => this['card' + index] = card} >
                                    <TouchableOpacity style={styles.card} onPress={() => this.renderVote(item)} >
                                        <Text style={styles.label}>{item}</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.card1} onPress={() => this['card' + index].flip()} >
                                        <Text style={styles.label}>{item}</Text>
                                    </TouchableOpacity>
                                </CardFlip>
                            </View>
                            }
                            keyExtractor={this.keyExtractor}
                        />
                        <OnlineUsersComponent members={this.state.members.members}/>
                    </Content>
                    <Modal
                        animationType="slide"
                        transparent={false}
                        visible={this.state.modalIsVisible}
                        onRequestClose={() => {
                            //Alert.alert('Modal has been closed.');
                        }}>
                        <View style={{ flex: 1, marginHorizontal: 15 }}>
                            <HeaderComponent name={this.props.userLogged.user != undefined ? this.props.userLogged.user.data.userName : ''} />
                            <RoomNameComponent roomName={this.props.roomLogged.room.data.roomName}/>
                            <View style={{ flexDirection: "row", flex: 3, marginTop: 20 }}>
                                <View style={{ flex: 1, marginLeft: 10, justifyContent: "center" }}>
                                    <FlatList
                                        data={this.state.votes.length > 0 ? this.state.votes : this.state.members.members}
                                        numColumns={1}
                                        renderItem={this.state.votes.length > 0 ? this.renderVotes : this.renderMembers}
                                    />
                                </View>
                                <View style={{ flex: 3, justifyContent: "center" }}>
                                    <View style={{
                                        borderRadius: 10, backgroundColor: '#6a1b9a', width: 200, height: 250,
                                        alignItems: "center", justifyContent: "center" }}>
                                        <Text style={{ color: '#fff', fontSize: 128, fontWeight: "bold" }}>{this.state.vote}</Text>
                                        <Text style={{ color: '#fff', fontSize: 18, fontWeight: "bold" }}>seu voto</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{ flex: 1, justifyContent: "center" }}>
                                <Text style={{ color: 'grey', fontWeight: "bold" }}>{this.state.labelWaitingVorVotes}</Text>
                                {this.state.showButton && <TouchableOpacity style={styles.button} onPress={() => this.setState({modalIsVisible: false, votes: []})}>
                                    <Text style={{ textAlign: "center", color: '#fff', fontWeight: "bold" }}>Finalizar</Text>
                                </TouchableOpacity>}
                            </View>
                        </View>
                    </Modal>
                </Container>
            </View>
        )
    }
}

const mapStateToProps = ({ userLogged, roomLogged }) => {
    console.log(`POKERROOMUSER >>> ${JSON.stringify(userLogged)}`)
    console.log(`POKERROOM >>> ${JSON.stringify(roomLogged)}`)
    console.log(`USUARIOLOGADO >>> ${JSON.stringify(userLogged.user)}`)
   return { isLoading: roomLogged.isLoading, roomLogged: roomLogged.room, userLogged: userLogged.user != null ? userLogged.user : '' }
}


export default connect(mapStateToProps)(Poker)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#F5FCFF',
    },
    button: {
        backgroundColor: '#6a1b9a',
        height: 45,
        justifyContent: "center",
        borderRadius: 5,
        marginTop: 10,
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