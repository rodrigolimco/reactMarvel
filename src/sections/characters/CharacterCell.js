import React, { Component } from 'react'
import { View, TouchableOpacity, Image, Text, StyleSheet } from 'react-native'

export default class CharacterCell extends Component {

    static defaultProps = {
        item        : {},
        onSelect    : () => {},
    }

    render() {

        const { item, onSelect } = this.props 

        const name = item.name ? item.name : ''
        const image = item && item.thumbnail ? { uri: item.thumbnail.path + '/landscape_amazing.jpg' } : null

        return (
            <TouchableOpacity onPress={ () => onSelect(item) }>

                <Image source={ image } resizeMode={'cover'} style={styles.image} />
                <View style={styles.textContainer}>
                    <Text style={styles.name}>{ name }</Text>
                </View>

            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    
    image: {
        width: '100%',
        height: 200,
    },

    textContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: 'rgba(255,255,255,0.2)',
    },

    name: {
        flex: 1,
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
    age: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        backgroundColor: 'transparent',
    }
})