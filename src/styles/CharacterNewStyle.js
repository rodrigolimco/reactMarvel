import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
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