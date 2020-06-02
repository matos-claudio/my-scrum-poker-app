import React, { Component } from 'react'
import { Modal, View, FlatList } from 'react-native'


export default class VotingModal extends Component {
    render() {
        return (
            <Modal
                animationType="slide"
                transparent={false}
                visible={this.state.modalIsVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                }}>
                <View style={{ flex: 1, marginHorizontal: 15 }}>
                    <HeaderComponent />
                    <View style={{ marginHorizontal: 10 }}>
                        <H3 style={{ color: 'grey', fontWeight: "bold" }}>SALA DX 001</H3>
                    </View>
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
                                alignItems: "center", justifyContent: "center"
                            }}>
                                <Text style={{ color: '#fff', fontSize: 128, fontWeight: "bold" }}>{this.state.vote}</Text>
                                <Text style={{ color: '#fff', fontSize: 18, fontWeight: "bold" }}>seu voto</Text>
                            </View>

                        </View>
                    </View>
                    <View style={{ flex: 1, justifyContent: "center" }}>
                        <Text style={{ color: 'grey', fontWeight: "bold" }}>Aguardando a finalização da votação...</Text>
                        <TouchableOpacity style={{
                            backgroundColor: '#6a1b9a',
                            height: 45,
                            justifyContent: "center",
                            borderRadius: 5,
                            marginTop: 10,
                        }}>
                            <Text style={{ textAlign: "center", color: '#fff', fontWeight: "bold" }}>Finalizar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        )
    }
}