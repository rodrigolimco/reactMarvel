import React, { Component } from 'react'
import { View, TouchableOpacity, Image, Text, StyleSheet } from 'react-native'
import { CharacterCellStyle } from 'reactMarvel/src/styles'

export default class CharacterCell extends Component {

    static defaultProps = {
        item        : {},
        onSelect    : () => {},
    }

    render() {

        const { item, onSelect } = this.props 

        const name = item.name ? item.name : ''
        const image = item && item.thumbnail ? { uri: item.thumbnail.path + '/landscape_amazing.jpg' } : { uri: item.image }

        return (
            <TouchableOpacity style={CharacterCellStyle.imageContainer} onPress={ () => onSelect(item) }>

                <Image source={ image } resizeMode={'cover'} style={CharacterCellStyle.image} />
                <View style={CharacterCellStyle.textContainer}>
                    <Text style={CharacterCellStyle.name}>{ name }</Text>
                </View>

            </TouchableOpacity>
        )
    }
}
