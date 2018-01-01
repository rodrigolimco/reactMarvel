import React, { Component } from 'react'
import { Text, View, Image, Button, TextInput, StyleSheet, TouchableOpacity } from 'react-native'

export default class InputBox extends Component {

    render(){
        return(
            <View>
                    <Text>{ 'Character name'}</Text>
                    <TextInput
                        value                   = { '' }
                        onChangeText            = { (v) => this.props.onChangeText(v)}
                        placeHolder             = { 'Iron Man' }
                        placeholderTextColor    = { 'grey'} 
                        style                   = { }
                        underlineColorAndroid   = { 'transparent' }
                    />
                </View>
        )
    }



}