import React, { Component } from 'react'
import { TouchableOpacity, Text, ActivityIndicator, StyleSheet } from 'react-native'
import { ButtonStyle } from 'reactMarvel/src/styles'

export default class Button extends Component{

    static defaultProps = {
        spinnerColor: 'rgb(247,247,247)',
        label: '',
        isFetching: false,
        onPress: () => {},
    }

    _onPress(){
        if(!this.props.isFetching){
            this.props.onPress()
        }
    }

    render(){
        return(
            <TouchableOpacity style={ButtonStyle.container} onPress={ () => this._onPress()}>
                <Text style={ButtonStyle.label}>{ this.props.label }</Text>
                { this.props.isFetching ? <ActivityIndicator animating color={this.props.spinnerColor} style={ButtonStyle.spinner}/> : null }
            </TouchableOpacity>
        )
    }
}

