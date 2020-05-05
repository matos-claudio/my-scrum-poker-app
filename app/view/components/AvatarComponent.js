import React, { Component } from 'react'
import { View, Text } from 'native-base'
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
                <Text style={globalStyle.fontMyAvatar}>{this.props.avatar}</Text>
                {this.props.score && <View style={{position: "absolute", bottom: 0, right: 0, 
                    backgroundColor: '#6a1b9a', borderRadius: 60/2, width: 20, height: 20,
                    justifyContent: "center", alignItems: "center"}}>
                    <Text style={{color: '#fff', fontSize: 12, fontWeight: "bold"}}>{this.props.score}</Text>
                </View>}
            </View>
        )
    }
}