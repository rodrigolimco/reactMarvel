import React, { Component } from 'react'
import { TouchableOpacity, Text, Image, StyleSheet, Dimensions, View } from 'react-native'
import { Actions } from 'react-native-router-flux';
import CharactersList from 'reactMarvel/src/sections/characters/CharactersList'
import { connect } from 'react-redux'
import * as CharactersActions from 'reactMarvel/src/redux/actions/characters'
import Spinner from 'react-native-spinkit'


class EndpointsList extends Component {

    componentWillMount() {
        this.props.initCharacterList()
    }

    render() {
        return (

            <View style={styles.mainContainer}>


                <View style={styles.spinner}>
                    <Spinner /*style={styles.spinner}*/ size={60} type={'Bounce'} color={'white'} isVisible={this.props.isFetching} />
                </View>


                <View style={styles.smallContainer}>
                    <TouchableOpacity style={styles.sectionContainer} onPress={() => Actions.CharactersList()}>
                        <Image style={styles.image}
                            source={require('reactMarvel/src/images/characters.jpg')}
                            resizeMode={'cover'} />
                        <Text style={styles.textStyle}>{'Characters'}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.sectionContainer} onPress={() => Actions.CharactersMyList()}>
                        <Image style={styles.image}
                            source={require('reactMarvel/src/images/mycharacters.jpg')}
                            resizeMode={'cover'} />
                        <Text style={styles.textStyle}>{'My Characters'}</Text>
                    </TouchableOpacity>
                </View>


                <View style={styles.smallContainer}>
                    <TouchableOpacity style={styles.sectionContainer}>
                        <Image style={styles.image}
                            source={require('reactMarvel/src/images/creators.png')}
                            resizeMode={'cover'} />
                        <Text style={styles.textStyle}>{'Creators'}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.sectionContainer}>
                        <Image style={styles.image}
                            source={require('reactMarvel/src/images/comics.jpg')}
                            resizeMode={'cover'} />
                        <Text style={styles.textStyle}>{'Comics'}</Text>
                    </TouchableOpacity>
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

const styles = StyleSheet.create({

    textStyle: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20 ,
        fontWeight: '400', 
        padding: 10,
        backgroundColor: 'rgba(94,23,20,0.5)'
    },

    sectionContainer: {
        margin: 10,
        width: Dimensions.get('window').width / 2 - 20,
        height: Dimensions.get('window').height / 2 - 20,
       
    },

    image: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        width: Dimensions.get('window').width / 2 - 20,
        height: Dimensions.get('window').height / 2 - 20,
    },

    mainContainer: {
        flex: 1,
        backgroundColor: 'rgb(222,53,46)',
        //paddingBottom: 20,
        //paddingTop: 10
    },

    smallContainer: {
        flex: 1,
        flexDirection: 'row',
        paddingBottom: 20,
        marginBottom: 10
    },

    spinner: {
        marginBottom: 50,
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    }
})

