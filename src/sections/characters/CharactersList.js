import React, { Component } from 'react'
import {Text, View, StyleSheet, TouchableOpacity, FlatList, Dimensions, Image } from 'react-native'
import * as webservices from 'reactMarvel/src/webservices/webservices'
import * as constants from 'reactMarvel/src/webservices/constants'
import axios from 'axios'
import { Actions } from 'react-native-router-flux';

import { connect } from 'react-redux'
import * as CharactersActions from 'reactMarvel/src/redux/actions/characters'


class CharactersList extends Component {

    constructor(props){
        super(props)
        this.printCharacter = this.printCharacter.bind(this)
    }

    componentWillMount(){
        this.props.fetchCharactersList()
    }

    onSelect(item){
        this.props.updateCharacterSelected(item)
    }

    printCharacter(item, index){
        const image = item && item.thumbnail ? { uri: item.thumbnail.path + '/landscape_amazing.jpg' } : null
        return (
            <TouchableOpacity onPress={ () => this.onSelect(item) }>
                <View style={{height: 200, backgroundColor: 'grey', marginVertical: 10}}>
                    <Image source={image} style={styles.image} resizeMode={'contain'} />
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
            console.log("CHARACTER RODRIGO: ", character)
            dispatch(CharactersActions.updateCharacterSelected(character))
            Actions.CharacterView({ title: character.name })
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CharactersList)

const styles = StyleSheet.create({
    image: {
        width: Dimensions.get('window').width,
        height: 200,
    },
});