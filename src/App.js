import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { Actions, Scene, Router } from 'react-native-router-flux';
import CharactersList from './sections/characters/CharactersList';


export default class App extends Component{

    

    render(){
        return(
            <Router>
                <Scene key="root">
                    <Scene
                        key={'CharactersList'}
                        component={CharactersList}
                    />
                </Scene>
            </Router>
        )
    }
}