import React, { Component } from 'react'
import { TouchableOpacity, Text, ActivityIndicator, StyleSheet } from 'react-native'
import { ButtonStyle } from 'reactMarvel/src/styles'

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
            <TouchableOpacity style={styles.container} onPress={ () => this._onPress()}>
                <Text style={styles.label}>{ this.props.label }</Text>
                { this.props.isFetching ? <ActivityIndicator animating color={this.props.spinnerColor} style={styles.spinner}/> : null }
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({

    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'grey',
        borderRadius: 4,
        flexDirection: 'row',
    },

    label: {
        color: 'white',
        fontWeight: '600',
        fontSize: 16,
    },

    spinner: {
        marginLeft: 20,
    }
})
