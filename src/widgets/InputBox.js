import React, { Component } from 'react'
import { Text, View, TextInput } from 'react-native'
import InputBoxStyle from 'reactMarvel/src/styles/InputBoxStyle'

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
            <View style={InputBoxStyle.styles.container}>
                <Text style={InputBoxStyle.styles.label}> {this.props.label} </Text>
                <TextInput
                    value={this.props.value}
                    onChangeText={(v) => this.props.onChangeText(v)}
                    placeholder={this.props.placeholder}
                    placeholderTextColor={'grey'}
                    style={InputBoxStyle.styles.input}
                    underlineColorAndroid={'transparent'}
                />

                {this.props.error ? <Text style={InputBoxStyle.styles.error}>{this.props.error}</Text> : null}
            </View>
        )
    }
}