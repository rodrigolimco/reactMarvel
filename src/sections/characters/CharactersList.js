import React, { Component } from 'react'
import {Text, View, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import * as webservices from 'reactMarvel/src/webservices/webservices'
import * as constants from 'reactMarvel/src/webservices/constants'
import axios from 'axios'
import { Actions } from 'react-native-router-flux';

import { connect } from 'react-redux'
import * as CharactersActions from 'reactMarvel/src/redux/actions/characters'


class CharactersList extends Component {

    componentWillMount(){
        this.props.fetchCharactersList()
    }

    onSelect(item){

    }

    printCharacter(item, index){
        return (
            <TouchableOpacity>
                <View style={{height: 200, backgroundColor: 'grey', marginVertical: 10}}>
                    <Text>{ item.name }</Text>
                </View>
            </TouchableOpacity>
        )
    }

    render(){
        return(
            <View>
                <FlatList
                    data={ this.props.list }
                    renderItem={ ({ item, index }) => this.printCharacter(item, index)}
                    keyExtractor={ (item, index) => item.id}
                    extraData={ this.state }
                />
            </View>
        )
    }
}


const mapStateToProps = (state) => {
    return{
        list        : state.characters.list,
        character   : state.characters.character
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return{

        fetchCharactersList: () => {
            dispatch(CharactersActions.fetchCharactersList())
        },

        updateCharacterSelected: (character) => {
            dispatch(CharactersActions.updateCharacterSelected(character))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CharactersList)
