import React, { Component } from 'react'
import { SafeAreaView, View, Text, TouchableOpacity, Button } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import style from '../../style/app'
import AvatarComponent from './AvatarComponent'

Ionicons.loadFont()

export default class HeaderComponent extends Component {
    render() {
        return (
            <SafeAreaView>
                <View style={[style.headerComponent, this.props.margin && { marginHorizontal: 10 }]}>
                    {/* <TouchableOpacity style={style.buttonHeaderComponent}> */}
                    <Text style={style.labelTitleHeaderComponent}>Olá, Cláudio</Text>
                    <AvatarComponent avatar={"CM"} />
                    {/* </TouchableOpacity> */}

                </View>
            </SafeAreaView>
        )
    }
}