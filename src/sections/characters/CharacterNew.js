import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import ImagePicker from 'react-native-image-picker'

import { Button, InputBox } from 'reactMarvel/src/widgets'
import { CharacterNewStyle } from 'reactMarvel/src/styles'

class CharacterNew extends Component {

    constructor(props){
        super(props)
        this.state = {
            name: '',
            nameError: '',

            image: null
        }
    }

    validateForm(){
        let valid = true
        let errors = {}

        if(!this.state.name) {
            errors.name = "Please introduce character's name"
            valid = false
        }

        this.setState({ 
            nameError: errors.name ? errors.name : '',
        })

        return valid
    }

    onSubmit(){
        if( this.validateForm() ){
            const characterData = {
                nombre: this.state.name,
                image: this.state.image ? 'data:image/jpeg; base 64,' +this.state.image.data : null,
            }
            this.props.postCharacter(characterData)
        }
    }

    onSelectImage(){
        var options = {
            title: 'Select Avatar',
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
            <View style={CharacterNewStyle.styles.container}>

                <View style={CharacterNewStyle.styles.imageContainer}>
                    <Image source={imageUri} style={CharacterNewStyle.styles.imageContainerBackground} resizeMode={'cover'}/>
                    <TouchableOpacity style={CharacterNewStyle.styles.button} onPress={ () => this.onSelectImage() }>
                        <Text style={CharacterNewStyle.styles.textButton}>{ imageButtonText }</Text>
                    </TouchableOpacity>
                </View>

                <View styles={CharacterNewStyle.styles.inputContainer}>
                    <InputBox
                        onChangeText   = { (v) => this.setState({ name : v }) }
                        value           = { this.state.name }
                        error           = { this.state.nameError }
                        label           = { 'Character name: ' }
                        placeholder     = { 'Iron Man' }
                    />
                </View>

                <View style={CharacterNewStyle.styles.buttonContainer}>
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
        isFetching: state.characters.isFetching
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return{
        

    }
}

export default connect(null, null)(CharacterNew)