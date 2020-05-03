import React, { Component } from 'react'
import { SafeAreaView, View, Text, TouchableOpacity, Button } from 'react-native'
import Ionicons from 'react-native-vector-icons/AntDesign';
import style from '../../style/app'
Ionicons.loadFont()

export default class HeaderComponent extends Component {
    render() {
        return (
            <SafeAreaView>
                <View style={style.headerComponent}>
                    <TouchableOpacity style={style.buttonHeaderComponent}
                        onPress={() => this.props.navigate.goBack()}>
                        {this.props.enableButton && <Ionicons name="arrowleft" size={24} color={"#212121"} />}
                        <Text style={style.labelTitleHeaderComponent}>{this.props.title}</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }
}