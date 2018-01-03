import React, { Component } from 'react'
import {Text, View, StyleSheet, TouchableOpacity, FlatList, Dimensions, Image } from 'react-native'
import * as webservices from 'reactMarvel/src/webservices/webservices'
import * as constants from 'reactMarvel/src/webservices/constants'
import { Actions } from 'react-native-router-flux';

import { connect } from 'react-redux'
import * as CharactersActions from 'reactMarvel/src/redux/actions/characters'


class CharactersList extends Component {

    constructor(props){
        super(props)
        this.printCharacter = this.printCharacter.bind(this)
        this.onEndReached = this.onEndReached.bind(this)
    }

    componentWillMount(){
        this.props.initCharacterList()
    }

    onSelect(item){
        this.props.updateCharacterSelected(item)
    }

    onEndReached(){
        if(this.props.list.length < this.props.total && !this.props.isFetching) {
            let newOffset = this.props.offset + 20
            this.props.fetchCharactersList(newOffset)
        }
    }

    printCharacter(item, index){
        const image = item && item.thumbnail ? { uri: item.thumbnail.path + '/landscape_amazing.jpg' } : null
        return (
            <TouchableOpacity onPress={ () => this.onSelect(item) }>
                <View style={{height: 200,  marginVertical: 10}}>
                    <Image source={image} style={styles.image} resizeMode={'contain'} />
                    <Text>{ item.name }</Text>
                </View>
            </TouchableOpacity>
        )
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
        myList      : state.characters.myList,
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
        //backgroundColor: Colors.background,
        paddingBottom: 20,
        paddingTop: 60
    },

    image: {
        width: Dimensions.get('window').width,
        height: 200,
    },
});