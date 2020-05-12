import React, { Component } from 'react'
import { FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { ListItem, Container, Content, Right, Left, Body, Button, Footer, View, Fab, IconNB } from 'native-base'
import HeaderComponent from '../../components/HeaderComponent';
import AvatarComponent from '../../components/AvatarComponent';
import AvatarListComponent from '../../components/AvatarListComponent';


export default class ScrumMasterStoriesList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            active: false
        }

        this.stories = []
    }

    componentWillMount = () => {
        const loggedRoom = this.props.navigation.state.params.loggedRoom
        this.stories = loggedRoom.room.data.stories.length > 0 ? loggedRoom.room.data.stories : []
        this.roomId = loggedRoom.room.data._id
        this.loggedUser = this.props.navigation.state.params.loggedUser

        console.log(`HISTORIES >>> ${JSON.stringify(this.stories)}`)
    }

    navigateToNewStorie = () => {
        this.props.navigation.navigate('CreateStorie', params = { roomId: this.roomId, user: this.loggedUser })
    }

    render() {
        return (
            <Container>
                <HeaderComponent margin />
                <Content style={{ flexGrow: 1 }}>
                    <FlatList
                        data={this.stories}
                        renderItem={({ item }) =>
                            <ListItem thumbnail>
                                <Left>
                                    <AvatarListComponent avatar={item.points.historyPoints || "..."} />
                                </Left>
                                <Body>
                                    <Text style={style.title}>{item.historyNumber}</Text>
                                    <Text numberOfLines={1} note style={style.note}>
                                        {item.description}
                                    </Text>
                                </Body>
                                <Right>
                                    <TouchableOpacity transparent>
                                        <Text style={style.labelButton}>Visualizar</Text>
                                    </TouchableOpacity>
                                </Right>
                            </ListItem>
                        }
                        keyExtractor={item => item._id}
                        ListEmptyComponent={() => {
                            return (
                                <View style={{ alignItems: "center", alignContent: "center" }}>
                                    <ActivityIndicator size={"small"} color={"#6a1b9a"} />
                                    <Text style={style.labelAwait}>Aguarde enquanto o Scrum Master cadastra a história.</Text>
                                </View>
                            )
                        }} />
                </Content>
                <View style={{ height: 100 }}>
                    <Fab
                        active={this.state.active}
                        direction="up"
                        containerStyle={{}}
                        style={{ backgroundColor: "#6a1b9a" }}
                        position="bottomRight"
                        onPress={() => this.navigateToNewStorie()}>
                        <IconNB name="md-add" />
                    </Fab>
                </View>
                <Footer style={style.footer}>
                    <View style={style.viewFooter}>
                        <Text style={style.points}>37{" pontos"}</Text>
                    </View>
                </Footer>
            </Container>
        )
    }

}

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
        backgroundColor: '#fff'
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
    }
})