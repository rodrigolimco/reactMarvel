import React, { Component } from 'react'
import { TouchableOpacity, Text, ActivityIndicator, StyleSheet } from 'react-native'
import ButtonStyle from 'reactMarvel/src/styles/ButtonStyle'

export default class Button extends Component{

    static defaultProps = {
        spinnerColor: 'white',
        label: '',
        isPFetching: false,
        onPress: () => {},
    }

    _onPress(){
        if(!this.props.isFetching){
            this.props.onPress()
        }
    }

    render(){
        return(
            <TouchableOpacity style={ButtonStyle.styles.container} onPress={ () => this._onPress()}>
                <Text style={ButtonStyle.styles.label}>{ this.props.label }</Text>
                { this.props.isFetching ? <ActivityIndicator animating color={this.props.spinnerColor} style={ButtonStyle.styles.spinner}/> : null }
            </TouchableOpacity>
        )
    }
}
