import React, { Component } from 'react'
import { SafeAreaView, View, Text, TouchableOpacity, Button } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import style from '../../style/app'

Ionicons.loadFont()

export default class HeaderComponent extends Component {
    render() {
        return (
            <SafeAreaView>
                <View style={style.headerComponent}>
                    <TouchableOpacity style={style.buttonHeaderComponent}
                        onPress={() => this.props.navigate.goBack()}>
                        {this.props.enableButton && <Ionicons name="md-arrow-back" size={24} color={"#212121"} />}
                        <Text style={style.labelTitleHeaderComponent}>{this.props.title}</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }
}