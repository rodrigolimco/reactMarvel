import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
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
            errors.name = "*Please introduce character's name*"
            valid = false
        }

        if(this.state.image == null){
            errors.image = "*Please choose an image*"
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
            <View style={CharacterNewStyle.container}>

                <View style={CharacterNewStyle.imageContainer}>
                    <Image source={imageUri} style={CharacterNewStyle.imageContainerBackground} resizeMode={'cover'}/>
                    <TouchableOpacity style={CharacterNewStyle.button} onPress={ () => this.onSelectImage() }>
                        <Text style={CharacterNewStyle.textButton}>{ imageButtonText }</Text>
                    </TouchableOpacity>
                </View>

                {this.state.imageError ? <Text style={CharacterNewStyle.error}>{this.state.imageError}</Text> : null}

                <View style={CharacterNewStyle.inputContainer}>
                    <InputBox
                        onChangeText   = { (v) => this.setState({ name : v }) }
                        value           = { this.state.name }
                        error           = { this.state.nameError }
                        label           = { 'Character name: ' }
                        placeholder     = { 'Iron Man' }
                    />
                </View>

                <View style={CharacterNewStyle.buttonContainer}>
                    <Button
                        label = { 'Save character' }
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
