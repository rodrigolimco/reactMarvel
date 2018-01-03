import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Actions, Scene, Router } from 'react-native-router-flux';

import { AppStyle } from 'reactMarvel/src/styles'

// ----- Components ----- //
import CharactersList from './sections/characters/CharactersList';
import CharacterView from './sections/characters/CharacterView';
import CharacterNew from './sections/characters/CharacterNew';

// ----- Webservice ----- //
import * as webservices from 'reactMarvel/src/webservices/webservices'

// ----- Redux ----- //
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider, connect } from 'react-redux'
import thunk from 'redux-thunk'
import * as reducers from './redux/reducers'


const reducer = combineReducers(reducers)
const store = createStore(
    reducer,
    applyMiddleware(thunk)
)


export default class App extends Component {

    componentWillMount() {
        webservices.configureAxios()
    }

    renderAddCharacterButton() {
        return (
            <TouchableOpacity style={styles.addButton} onPress={() => Actions.CharacterNew()}>
                <Text style={styles.addButtonText}>{'Add'}</Text>
            </TouchableOpacity>
        )
    }



    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Scene key="root">

                        <Scene
                            key={'CharactersList'}
                            component={CharactersList}
                            title={'ReactMarvel'}
                            renderRightButton={() => this.renderAddCharacterButton()}
                        />

                        <Scene
                            key={'CharacterView'}
                            component={CharacterView}
                        />

                        <Scene
                            key={'CharacterNew'}
                            component={CharacterNew}
                            title={'Add new character'}
                        />

                    </Scene>
                </Router>
            </Provider>
        )
    }
}

const styles = StyleSheet.create({
    navBar: {
      backgroundColor: 'rgb(245,245,245)',
    },
  
    addButtonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: '600'
  
    },
  
    addButton: {
      padding: 10,
      alignItems: 'center',
      justifyContent: 'center'
    }
  });