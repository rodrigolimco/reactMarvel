import React, { Component } from 'react'
import {Text, View, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import * as webservices from 'reactMarvel/src/webservices/webservices'
import * as constants from 'reactMarvel/src/webservices/constants'
import axios from 'axios'

export default class CharactersList extends Component {

    constructor(props){
        super(props)
        this.state = {
            list: [],
        }
    }

    componentWillMount(){
        //const fetchURL = constants.CHARACTERS + constants.API_KEY
        console.log("RODRIGO")

        axios.get('http://gateway.marvel.com/v1/public/characters?ts=1&apikey=b7bbda53f9042d5d027904cbc0a62475&hash=a99e2ab57a422448df484a43d84a9229')
        .then((response) => {
          console.log("axios get response: ", response);
          const personajes = response.data && response.data.data.results ? response.data.data.results : []
          this.setState({ list : personajes })
        })
        .catch((error) => {
            console.log("axios get error: ", error);
        });

    }

    printCharacter(item, index){
        return (
            <View style={{height: 200, backgroundColor: 'grey', marginVertical: 10}}>
                <Text>{ item.name }</Text>
            </View>
        )
    }

    render(){
        return(
            <View>
                <FlatList
                    data={ this.state.list }
                    renderItem={ ({ item, index }) => this.printCharacter(item, index)}
                    keyExtractor= {(item, index) => index}
                    //extraData     = {this.props}
                />
            </View>
        )
    }

}

