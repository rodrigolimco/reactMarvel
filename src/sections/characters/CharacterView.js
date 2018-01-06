import React, { Component } from 'react'
import { View, StyleSheet, Image, Text, Dimensions } from 'react-native'
import { connect } from 'react-redux'

class CharacterView extends Component{

    render(){

        const { character }  = this.props
        const image = character && character.thumbnail ? { uri: character.thumbnail.path + '/landscape_xlarge.jpg' } : { uri: character.image }
        const comics = character && character.comics.available ? character.comics.available : 'No info available'
        const series = character && character.series.available ? character.series.available : 'No info available'
        const description = character && character.description ? character.description : 'No description available'

        return(
            <View>

                <Image source={image} style={styles.image} resizeMode={'contain'} />
                <View>
                    <Text>{ 'Comics: ' + comics }</Text>

                    <Text>{ 'Series: ' + series }</Text>
                    
                </View>
                <Text>{ description }</Text>
        

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

        /*fetchCharactersList: () => {
            dispatch(CharactersActions.fetchCharactersList())
        },

        updateCharacterSelected: (character) => {
            dispatch(CharactersActions.updateCharacterSelected(character))
            Actions.CharacterView({ title: character.name })
        },*/
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterView)

const styles = StyleSheet.create({
    image: {
        width: Dimensions.get('window').width,
        height: 200,
    },
});