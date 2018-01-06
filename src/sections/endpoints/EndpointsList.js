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
                        <View style={styles.textContainer}>
                            <Text style={styles.textStyle}>{'Characters'}</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.sectionContainer} onPress={() => Actions.CharactersMyList()}>
                        <Image style={styles.image}
                            source={require('reactMarvel/src/images/mycharacters.jpg')}
                            resizeMode={'cover'} />
                        <View style={styles.textContainer}>
                            <Text style={styles.textStyle}>{'My Characters'}</Text>
                        </View>
                    </TouchableOpacity>
                </View>


                <View style={styles.smallContainer}>
                    <TouchableOpacity style={styles.sectionContainer}>
                        <Image style={styles.image}
                            source={require('reactMarvel/src/images/creators.png')}
                            resizeMode={'cover'} />
                        <View style={styles.textContainer}>
                            <Text style={styles.textStyle}>{'Creators'}</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.sectionContainer}>
                        <Image style={styles.image}
                            source={require('reactMarvel/src/images/comics.jpg')}
                            resizeMode={'cover'} />
                        <View style={styles.textContainer}>
                            <Text style={styles.textStyle}>{'Comics'}</Text>
                        </View>
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
        fontWeight: '500', 
        padding: 10,
        paddingHorizontal: 5
    },

    textContainer: {
        position: 'absolute',
        padding: 1,
        right: 0,
        left: 0,
        top: (Dimensions.get('window').height / 2 - 50) / 2-30,
        backgroundColor: 'rgba(128,128,128,0.8)',
    },

    image: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        width: Dimensions.get('window').width / 2 - 20,
        height: Dimensions.get('window').height / 2 - 50,
    },

    sectionContainer: {
        margin: 10,
        width: Dimensions.get('window').width / 2 - 20,
        height: Dimensions.get('window').height / 2 - 20,
    },

    mainContainer: {
        flex: 1,
        backgroundColor: 'rgb(222,53,46)',
    },

    smallContainer: {
        flex: 1,
        flexDirection: 'row',
        paddingBottom: 20,
        marginBottom: 10,
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

