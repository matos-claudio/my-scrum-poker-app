import React, { Component } from 'react'
import { View, Text } from 'native-base'
import globalStyle from '../../style/app'

export default class AvatarListComponent extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View style={globalStyle.avatarViewList}>
                <Text style={globalStyle.fontViewAvatar}>{this.props.avatar}</Text>
            </View>
        )
    }
}