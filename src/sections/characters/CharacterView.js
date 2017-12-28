import React, { Component } from 'react'
import { View, StyleSheet, Image, Text, Dimensions } from 'react-native'
import { connect } from 'react-redux'

class CharacterView extends Component{

    render(){

        const { character }  = this.props
        const image = character && character.thumbnail ? { uri: character.thumbnail.path } : null

        return(
            <View>

                <Image source={image} style={styles.image} resizeMode={'cover'} />
                <View>
                    {//<Text>{ 'Comics: ' + character.comics.available }</Text>
                    }
                    <Text>{ character.name }</Text>
                    {//<Text>{ 'Series: ' + character.series.available }</Text>
                    }
                </View>
                {//<Text>{ character.description }</Text>
                }

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