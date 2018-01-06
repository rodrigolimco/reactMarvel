import React, { Component } from 'react'
import { TouchableOpacity, Text, Image, StyleSheet, Dimensions, View } from 'react-native'
import { Actions } from 'react-native-router-flux';
import CharactersList from 'reactMarvel/src/sections/characters/CharactersList'
import { connect } from 'react-redux'
import * as CharactersActions from 'reactMarvel/src/redux/actions/characters'
import Spinner from 'react-native-spinkit'
import { EndpointsStyle } from 'reactMarvel/src/styles'


class EndpointsList extends Component {

    componentWillMount() {
        this.props.initCharacterList()
    }

    render() {
        return (

            <View style={EndpointsStyle.mainContainer}>


                <View style={EndpointsStyle.smallContainer}>
                    <TouchableOpacity style={EndpointsStyle.sectionContainer} onPress={() => Actions.CharactersList()}>
                        <Image style={EndpointsStyle.image}
                            source={require('reactMarvel/src/images/characters.jpg')}
                            resizeMode={'cover'} />
                        <View style={EndpointsStyle.textContainer}>
                            <Text style={EndpointsStyle.textStyle}>{'Characters'}</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={EndpointsStyle.sectionContainer} onPress={() => Actions.CharactersMyList()}>
                        <Image style={EndpointsStyle.image}
                            source={require('reactMarvel/src/images/mycharacters.jpg')}
                            resizeMode={'cover'} />
                        <View style={EndpointsStyle.textContainer}>
                            <Text style={EndpointsStyle.textStyle}>{'My Characters'}</Text>
                        </View>
                    </TouchableOpacity>
                </View>


                <View style={EndpointsStyle.smallContainer}>
                    <TouchableOpacity style={EndpointsStyle.sectionContainer}>
                        <Image style={EndpointsStyle.image}
                            source={require('reactMarvel/src/images/creators.png')}
                            resizeMode={'cover'} />
                        <View style={EndpointsStyle.textContainer}>
                            <Text style={EndpointsStyle.textStyle}>{'Creators'}</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={EndpointsStyle.sectionContainer}>
                        <Image style={EndpointsStyle.image}
                            source={require('reactMarvel/src/images/comics.jpg')}
                            resizeMode={'cover'} />
                        <View style={EndpointsStyle.textContainer}>
                            <Text style={EndpointsStyle.textStyle}>{'Comics'}</Text>
                        </View>
                    </TouchableOpacity>
                </View>


                <View style={EndpointsStyle.spinner}>
                    <Spinner  size={100} type={'Bounce'} color={'rgb(247,247,247)'} isVisible={this.props.isFetching} />
                </View>

                

            </View>

        )
    }
}

const mapStateToProps = (state) => {

    return {
        isFetching: state.characters.isFetching
    }
}

const mapDispatchToProps = (dispatch, props) => {

    return {
        initCharacterList: () => {
            dispatch(CharactersActions.initCharacterList())
        },
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(EndpointsList)


