import React, { Component } from 'react'
import { SafeAreaView, View, Text, TouchableOpacity, Button } from 'react-native'
import style from '../../style/app'
import { Ionicons } from '@expo/vector-icons';

export default class Header extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <SafeAreaView>
                <View style={[style.headerComponent, this.props.margin && { marginHorizontal: 20 }]}>
                    <TouchableOpacity style={style.buttonHeaderComponent} onPress={() => this.props.navigate.goBack()}>
                        <Ionicons name={"md-arrow-back"} size={24} />
                        <Text style={style.labelTitleHeaderComponent}>{this.props.title}</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }
}