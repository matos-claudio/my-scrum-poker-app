import React, { Component } from 'react'
import { View, H3 } from 'native-base'
import globalStyle from '../../style/app'

export default class AvatarComponent extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            // alert(this.props.avatar)
            // console.log('JUCA '+this.props.avatar)
            <View style={globalStyle.viewAvatar}>
                <H3 style={globalStyle.fontMyAvatar}>{this.props.avatar}</H3>
            </View>
        )
    }
}