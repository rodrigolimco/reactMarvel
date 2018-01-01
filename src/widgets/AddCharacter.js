import React, { Component } from 'react'
import { Text, View, Image, Button, TextInput } from 'react-native'
import ImagePicker from 'react-native-image-picker'

class AddCharacter extends Component {
    
    render(){
        return(
            <View>

                <View>
                    {//<Image style={ position: 'absolute'} />
                    }
                    <Text>{ 'Seleccionar imagen' }</Text>
                </View>

                <View>
                    <TextInput
                    />
                </View>

                <View>
                    <TextInput
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