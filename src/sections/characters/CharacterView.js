import React, { Component } from 'react'
import { } from 'react-native'

export default class CharacterView extends Component{

    render(){
        return(
            <View>
                <Image source={image} resizeMode={'cover'} />
                <View>
                    <Text>Comics {item.comics.available}</Text>
                    <Text>Series {item.series.available}</Text>
                </View>
                <Text>{item.description}</Text>

            </View>
        )
    }


}