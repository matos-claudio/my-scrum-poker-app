import React, { Component } from 'react'
import { FlatList, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native'
import { ListItem, Container, Content, Right, Left, Body, Footer, View } from 'native-base'
import HeaderComponent from '../../components/HeaderComponent';
import AvatarListComponent from '../../components/AvatarListComponent';

const datas = [
    {
        // img: sankhadeep,
        text: "Sankhadeep",
        note: "Its time to build a difference . ."
    },
    {
        // img: supriya,
        text: "Supriya",
        note: "One needs courage to be happy and smiling all time . . "
    },
    {
        // img: shivraj,
        text: "Shivraj",
        note: "Time changes everything . ."
    },
    {
        // img: shruti,
        text: "Shruti",
        note: "The biggest risk is a missed opportunity !!"
    },
    {
        // img: himanshu,
        text: "Himanshu",
        note: "Live a life style that matchs your vision"
    },
    {
        // img: shweta,
        text: "Shweta",
        note: "Failure is temporary, giving up makes it permanent"
    }
];

export default class TeamDevStoriesList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            active: false
        }
    }

    render() {
        return (
            <Container>
                <HeaderComponent margin />
                <Content style={{ flexGrow: 1 }}>
                    <FlatList
                        data={datas}
                        renderItem={({ item }) =>
                            <ListItem thumbnail>
                                <Left>
                                    <AvatarListComponent avatar={"8"} />
                                </Left>
                                <Body>
                                    <Text style={style.title}>{item.text}</Text>
                                    <Text numberOfLines={1} note style={style.note}>
                                        {item.note}
                                    </Text>
                                </Body>
                                <Right>
                                    <TouchableOpacity transparent>
                                        <Text style={style.labelButton}>Votar</Text>
                                    </TouchableOpacity>
                                </Right>
                            </ListItem>
                        }
                        keyExtractor={item => item.note}
                        ListEmptyComponent={() => {
                            return (
                                <View style={{ alignItems: "center", alignContent: "center" }}>
                                    <ActivityIndicator size={"small"} color={"#6a1b9a"} />
                                    <Text style={style.labelAwait}>Aguarde enquanto o Scrum Master cadastra a história.</Text>
                                </View>
                            )
                        }} />
                </Content>
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
    },
    labelAwait: {
        color: 'grey',
        marginTop: 10
    }
})