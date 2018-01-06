import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet } from 'react-native'
import { InputBoxStyle } from 'reactMarvel/src/styles'

export default class InputBox extends Component {

    static defaultProps = {
        label: '',
        value: '',
        error: '',
        placeholder: '',
        onChangeText: () => { },
    }

    render() {
        return (
            <View style={InputBoxStyle.container}>
                <Text style={InputBoxStyle.label}> {this.props.label} </Text>
                <TextInput
                    value={this.props.value}
                    onChangeText={(v) => this.props.onChangeText(v)}
                    placeholder={this.props.placeholder}
                    placeholderTextColor={'rgb(247,247,247)'}
                    style={InputBoxStyle.input}
                    underlineColorAndroid={'transparent'}
                />

                {this.props.error ? <Text style={InputBoxStyle.error}>{this.props.error}</Text> : null}
            </View>
        )
    }
}
