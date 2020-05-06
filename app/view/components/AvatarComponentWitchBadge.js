import React, { Component } from 'react'
import { View, Text } from 'native-base'
import globalStyle from '../../style/app'

export default class AvatarComponentWitchBadge extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            // alert(this.props.avatar)
            // console.log('JUCA '+this.props.avatar)
            <View style={globalStyle.viewAvatar}>
                <Text style={globalStyle.fontMyAvatar}>{this.props.avatar}</Text>
                {this.props.score && <View style={{position: "absolute",  right: - 13, 
                    backgroundColor: '#6a1b9a', borderRadius: 5, width: 25, height: 35,
                    justifyContent: "center", alignItems: "center", shadowColor: '#000'}}>
                    <Text style={{color: '#fff', fontSize: 16, fontWeight: "bold"}}>{this.props.score}</Text>
                </View>}
            </View>
        )
    }
}