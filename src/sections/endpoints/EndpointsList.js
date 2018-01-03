import React, { Component } from 'react'
import { TouchableOpacity, Text, Image, StyleSheet, Dimensions, View } from 'react-native'
import { Actions } from 'react-native-router-flux';
import CharactersList from 'reactMarvel/src/sections/characters/CharactersList'


export default class EndpointsList extends Component {

    render(){
        return(
            
            <View style={styles.mainContainer}>
                
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <TouchableOpacity style={styles.smallContainer} onPress={ () => Actions.CharactersList()}>
                            <Image  style={styles.image} 
                                    source={require('reactMarvel/src/images/characters.jpg')} 
                                    resizeMode={'cover'}/>
                            <Text>{ 'Characters' }</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.smallContainer}>
                            <Image  style={styles.image} 
                                    source={require('reactMarvel/src/images/mycharacters.jpg')} 
                                    resizeMode={'cover'}/>
                            <Text>{ 'My Characters' }</Text>
                    </TouchableOpacity>

                </View>

                <View style={{flex: 1, flexDirection: 'row'}}>
                    <TouchableOpacity style={styles.smallContainer}>
                            <Image  style={styles.image} 
                                    source={require('reactMarvel/src/images/creators.png')} 
                                    resizeMode={'cover'}/>
                            <Text>{ 'Creators' }</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.smallContainer}>
                    <Image  style={styles.image} 
                            source={require('reactMarvel/src/images/comics.jpg')} 
                            resizeMode={'cover'}/>
                    <Text>{ 'Comics' }</Text>
            </TouchableOpacity>
                </View>

            </View>

        )
    }
}

const styles = StyleSheet.create({
    
    smallContainer: {
        margin: 10,
        width: Dimensions.get('window').width / 2 -20,
        height: Dimensions.get('window').height / 2 -20

        /*...Platform.select({
            ios: {
              shadowColor: 'rgba(255,255,255,0.1)',
              shadowOpacity: 1,
              shadowOffset: { height: 4, width: 4 },
              shadowRadius: 2,
            },
            android: {
              elevation: 4,
            },
        })*/

    },

    mainContainer: {
        flex: 1,
        //backgroundColor: Colors.background,
        paddingBottom: 20,
        paddingTop: 60
    },

    image: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    }
})

