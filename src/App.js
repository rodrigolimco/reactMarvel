import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Actions, Scene, Router } from 'react-native-router-flux'

import { AppStyle } from 'reactMarvel/src/styles'

// ----- Components ----- //
import EndpointsList from './sections/endpoints/EndpointsList'
import CharactersList from './sections/characters/CharactersList'
import CharactersMyList from './sections/characters/CharactersMyList'
import CharacterView from './sections/characters/CharacterView'
import CharacterNew from './sections/characters/CharacterNew'

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
            <TouchableOpacity style={AppStyle.addButton} onPress={() => Actions.CharacterNew()}>
                <Text style={AppStyle.addButtonText}>{'Add'}</Text>
            </TouchableOpacity>
        )
    }



    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Scene key="root">

                        <Scene
                            key={'EndpointsList'}
                            component={EndpointsList}
                            title={'ReactMarvel'}
                            titleStyle={AppStyle.titleStyle}
                            navigationBarStyle={AppStyle.navBar}

                        />

                        <Scene
                            key={'CharactersList'}
                            component={CharactersList}
                            title={'Marvel Characters'}
                            titleStyle={AppStyle.titleStyle}
                            navigationBarStyle={AppStyle.navBar}
                        />

                        <Scene
                            key={'CharactersMyList'}
                            component={CharactersMyList}
                            title={'My Characters'}
                            titleStyle={AppStyle.titleStyle}
                            navigationBarStyle={AppStyle.navBar}
                            renderRightButton={() => this.renderAddCharacterButton()}
                        />

                        <Scene
                            key={'CharacterView'}
                            component={CharacterView}
                            titleStyle={AppStyle.titleStyle}
                            navigationBarStyle={AppStyle.navBar}
                        />

                        <Scene
                            key={'CharacterNew'}
                            component={CharacterNew}
                            title={'Add new character'}
                            titleStyle={AppStyle.titleStyle}
                            backButtonTintColor={'rgb(247,247,247)'}
                            //backButtonTextStyle={AppStyle.backButtonTextColor}
                            navigationBarStyle={AppStyle.navBar}
                        />

                    </Scene>
                </Router>
            </Provider>
        )
    }
}

