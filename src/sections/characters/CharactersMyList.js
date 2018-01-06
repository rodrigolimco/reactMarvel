import React, { Component } from 'react'
import {Text, View, StyleSheet, TouchableOpacity, FlatList, Dimensions, Image } from 'react-native'
import * as webservices from 'reactMarvel/src/webservices/webservices'
import * as constants from 'reactMarvel/src/webservices/constants'
import { Actions } from 'react-native-router-flux';

import CharacterCell from './CharacterCell'

import { connect } from 'react-redux'
import * as CharactersActions from 'reactMarvel/src/redux/actions/characters'


class CharactersMyList extends Component {

    constructor(props){
        super(props)
        this.printCharacter = this.printCharacter.bind(this)
    }

    componentWillMount(){
    }

    onSelect(character){
        this.props.updateCharacterSelected(character)
    }

    printCharacter(item, index){
        return <CharacterCell item={item} onSelect={ (character) => this.onSelect(character) } key={item.id}/>
    }

    render(){
        return(
            <View style={styles.container}>
                <FlatList
                    data            ={ this.props.myList }
                    renderItem      ={ ({ item, index }) => this.printCharacter(item, index)}
                    keyExtractor    ={ (item, index) => index}
                    extraData       ={ this.props }
                />
            </View>
        )
    }
}


const mapStateToProps = (state) => {
    return{
        myList      : state.characters.myList,
        character   : state.characters.character,
        isFetching  : state.characters.isFetching,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return{
        
        updateCharacterSelected: (character) => {
            dispatch(CharactersActions.updateCharacterSelected(character))
            Actions.CharacterView({ title: character.name })
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CharactersMyList)

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'rgb(222,53,46)',
    },
});