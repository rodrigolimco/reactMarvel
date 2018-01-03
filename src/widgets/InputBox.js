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
            <View style={styles.container}>
                <Text style={styles.label}> {this.props.label} </Text>
                <TextInput
                    value={this.props.value}
                    onChangeText={(v) => this.props.onChangeText(v)}
                    placeholder={this.props.placeholder}
                    placeholderTextColor={'grey'}
                    style={styles.input}
                    underlineColorAndroid={'transparent'}
                />

                {this.props.error ? <Text style={styles.error}>{this.props.error}</Text> : null}
            </View>
        )
    }
}

const styles = StyleSheet.create({

    container: {

    },

    error: {
        color: 'white',
        textAlign: 'right',
        marginTop: 4,
    },

    input: {
        borderColor: 'grey',
        borderWidth: 1,
        padding: 10,
        borderRadius: 6,
        fontSize: 16,
        color: 'white',
    },

    label: {
        color: 'white',
        fontSize: 16,
        marginBottom: 10,
        fontWeight: '600',
    },
})