import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import ImagePicker from 'react-native-image-picker'
import { Actions } from 'react-native-router-flux';

import { Button, InputBox } from 'reactMarvel/src/widgets'
import { CharacterNewStyle } from 'reactMarvel/src/styles'
import * as CharactersActions from 'reactMarvel/src/redux/actions/characters'

class CharacterNew extends Component {

    constructor(props){
        super(props)
        this.state = {
            name: '',
            nameError: '',

            image: null,
            imageError: ''
        }
    }

    validateForm(){
        let valid = true
        let errors = {}

        if(!this.state.name) {
            errors.name = "Please introduce character's name"
            valid = false
        }

        if(this.state.image == null){
            errors.image = "Please choose an image"
            valid = false
        }

        this.setState({ 
            nameError: errors.name ? errors.name : '',
            imageError: errors.image ? errors.image : ''
        })

        return valid
    }

    onSubmit(){
        if( this.validateForm() ){
            const character = {
                name: this.state.name,
                image: this.state.image ? 'data:image/jpeg;base64,' +  this.state.image.data : null,
            }

            this.props.updateMyCharactersList(character)
            console.log("CHARACTER CORIO: ", character)
        }
    }

    onSelectImage(){
        var options = {
            title: 'Select character image',
            storageOptions: {
              skipBackup: true,
              path: 'images'
            }
          };
          
          ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);
          
            if (response.didCancel) {
              console.log('User cancelled image picker');
            }
            else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
              console.log('User tapped custom button: ', response.customButton);
            }
            else {          
              this.setState({
                image: response
                
              });
            }
          });
    }
    
    render(){

        const imageUri = this.state.image ? { uri: this.state.image.uri } : null
        const imageButtonText = this.state.image ? this.state.image.fileName : 'Choose image'

        return(
            <View style={styles.container}>

                <View style={styles.imageContainer}>
                    <Image source={imageUri} style={styles.imageContainerBackground} resizeMode={'cover'}/>
                    <TouchableOpacity style={styles.button} onPress={ () => this.onSelectImage() }>
                        <Text style={styles.textButton}>{ imageButtonText }</Text>
                    </TouchableOpacity>
                </View>

                {this.state.imageError ? <Text style={styles.error}>{this.state.imageError}</Text> : null}

                <View style={styles.inputContainer}>
                    <InputBox
                        onChangeText   = { (v) => this.setState({ name : v }) }
                        value           = { this.state.name }
                        error           = { this.state.nameError }
                        label           = { 'Character name: ' }
                        placeholder     = { 'Iron Man' }
                    />
                </View>

                <View style={styles.buttonContainer}>
                    <Button
                        label = { 'Save' }
                        onPress = { () => this.onSubmit() }
                        isFetching = { this.props.isFetching }
                    />
                </View>

            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        isFetching: state.characters.isFetching,
        myList: state.characters.myList
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return{
        updateMyCharactersList: (character) => {
            dispatch(CharactersActions.updateMyCharactersList(character))
            Actions.pop()
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterNew)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(245,245,245)',
    },

    error: {
        color: 'white',
        textAlign: 'right',
        marginTop: 4,
    },

    imageContainer: {
        alignItems: 'center',
        width: '100%',
        height: 200,
        backgroundColor: 'transparent',
        justifyContent: 'center'
    },

    imageContainerBackground: {
        position: 'absolute',
        top: 0, 
        bottom: 0,
        left: 0, 
        right: 0
    },

    button: {
        padding: 10,
        borderColor: 'white',
        borderWidth: 1, 
        borderRadius: 6
    },

    textButton: {
        color: 'white',
        fontWeight: '600',
    },

    inputContainer: {
        margin: 20,
    },

    buttonContainer: {
        margin: 20,
    },
})