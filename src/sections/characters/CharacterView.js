import React, { Component } from 'react'
import { View, StyleSheet, Image, Text, Dimensions } from 'react-native'
import { connect } from 'react-redux'

import { CharacterViewStyle } from 'reactMarvel/src/styles'

class CharacterView extends Component{

    render(){

        const { character }  = this.props
        const image = character && character.thumbnail ? { uri: character.thumbnail.path + '/landscape_xlarge.jpg' } : { uri: character.image }
        const comics = character && character.comics ? character.comics.available : 'No info available'
        const series = character && character.series ? character.series.available : 'No info available'
        const description = character && character.description ? character.description : 'No description available'

        return(
            <View style={CharacterViewStyle.container}>

                <Image source={image} style={CharacterViewStyle.image} resizeMode={'cover'} />
                
                <View style={{flexDirection:'row'}}>
                    <View style={CharacterViewStyle.textContainer}>
                        <Text style={CharacterViewStyle.textStyle}>{ 'Series: ' + series }</Text>
                    </View>

                    <View style={CharacterViewStyle.textContainer}>
                        <Text style={CharacterViewStyle.textStyle}>{ 'Comics: ' + comics }</Text>
                    </View>
                </View>

                <View>
                    <View style={CharacterViewStyle.descriptionContainer}>
                        <Text style={CharacterViewStyle.textStyle}>{ 'Description: ' }</Text>
                    </View>

                    <View style={CharacterViewStyle.description}>
                        <Text style={CharacterViewStyle.textStyle}>{ description }</Text>
                    </View>
                </View>
        

            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        character   : state.characters.character
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return{
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterView)
