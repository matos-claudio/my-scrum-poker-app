import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'
import { createNameAvatar } from '../../helper/helper'
import AvatarComponent from './AvatarComponent'
import styles from '../../style/app'

export default class OnlineUsersComponent extends Component {
    render() {
        return (
            <View style={styles.viewUsersOnline}>
                <Text style={styles.labelViewUsersOnline}>Participantes nessa sala</Text>
                <View style={styles.marginTop5}>
                    <FlatList
                        data={this.props.members}
                        numColumns={6}
                        renderItem={({ item }) =>
                            <AvatarComponent avatar={createNameAvatar(item.name)} />
                        }
                        ListEmptyComponent={() => {
                            return (
                                <Text style={styles.labelEmptyList}>Nenhum participante online</Text>
                            )
                        }}
                    />
                </View>
            </View>
        )
    }
}