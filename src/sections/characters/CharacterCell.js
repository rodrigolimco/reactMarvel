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
        const image = item && item.thumbnail ? { uri: item.thumbnail.path + '/landscape_amazing.jpg' } : { uri: item.image }

        return (
            <TouchableOpacity style={styles.imageContainer} onPress={ () => onSelect(item) }>

                <Image source={ image } resizeMode={'cover'} style={styles.image} />
                <View style={styles.textContainer}>
                    <Text style={styles.name}>{ name }</Text>
                </View>

            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({

    imageContainer: {
        margin: 10,
        borderColor: 'white',
        borderWidth: 1,
        alignContent: 'center'
    },
    
    image: {
        width: '100%',
        height: 200,
    },

    textContainer: {
        padding: 10,
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: 'rgba(128,128,128,0.8)',
    },

    name: {
        flex: 1,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
})