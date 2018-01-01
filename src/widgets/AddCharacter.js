import React, { Component } from 'react'
import { Text, View, Image, Button, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import ImagePicker from 'react-native-image-picker'

class AddCharacter extends Component {
    
    render(){
        return(
            <View>

                <View>
                    <Image source={imageURI} style={} resizeMode={ 'cover' }/>
                    <TouchableOpacity style={} onPress={} >
                        <Text>{ 'Select image' }</Text>
                    </TouchableOpacity>
                </View>

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

                <View>
                    <TextInput
                    />
                </View>

            </View>
        )
    }
}