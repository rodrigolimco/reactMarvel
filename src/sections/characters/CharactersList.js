import React, { Component } from 'react'
import {Text, View, StyleSheet, TouchableOpacity, FlatList, Dimensions, Image } from 'react-native'
import * as webservices from 'reactMarvel/src/webservices/webservices'
import * as constants from 'reactMarvel/src/webservices/constants'
import { Actions } from 'react-native-router-flux';

import CharacterCell from './CharacterCell'

import { connect } from 'react-redux'
import * as CharactersActions from 'reactMarvel/src/redux/actions/characters'


class CharactersList extends Component {

    constructor(props){
        super(props)
        this.printCharacter = this.printCharacter.bind(this)
        this.onEndReached = this.onEndReached.bind(this)
    }

    componentWillMount(){
        //this.props.initCharacterList()
    }

    onSelect(character){
        this.props.updateCharacterSelected(character)
    }

    onEndReached(){
        if(this.props.list.length < this.props.total && !this.props.isFetching) {
            let newOffset = this.props.offset + 20
            this.props.fetchCharactersList(newOffset)
        }
    }

    printCharacter(item, index){
        return <CharacterCell item={item} onSelect={ (character) => this.onSelect(character) } />
    }

    render(){
        return(
            <View style={styles.container}>
                <FlatList
                    data            ={ this.props.list }
                    renderItem      ={ ({ item, index }) => this.printCharacter(item, index)}
                    onEndReached    ={() => this.onEndReached()}
                    keyExtractor    ={ (item, index) => item.id}
                    extraData       ={ this.props }
                />
            </View>
        )
    }
}


const mapStateToProps = (state) => {
    return{
        list        : state.characters.list,
        character   : state.characters.character,
        total       : state.characters.total,
        isFetching  : state.characters.isFetching,
        offset      : state.characters.offset
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return{

        initCharacterList: () => {
            dispatch(CharactersActions.initCharacterList())
        },

        fetchCharactersList: (offset) => {
            dispatch(CharactersActions.updateCharactersListOffset(offset))
            dispatch(CharactersActions.fetchCharactersList())
        },
        
        updateCharacterSelected: (character) => {
            dispatch(CharactersActions.updateCharacterSelected(character))
            Actions.CharacterView({ title: character.name })
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CharactersList)

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'rgb(222,53,46)',
    },
});