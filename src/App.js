import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Actions, Scene, Router } from 'react-native-router-flux';

// ----- Components ----- //
import CharactersList from './sections/characters/CharactersList';
import CharacterView from './sections/characters/CharacterView';

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


export default class App extends Component{

    componentWillMount(){
        webservices.configureAxios()
    }

    

    render(){
        return(
            <Provider store={store}>
                <Router>
                    <Scene key="root">
                        
                        <Scene
                            key={'CharactersList'}
                            component={CharactersList}
                            title={'ReactMarvel'}
                        />

                        <Scene
                            key={'CharacterView'}
                            component={CharacterView}
                        />

                    </Scene>
                </Router>
            </Provider>
        )
    }
}