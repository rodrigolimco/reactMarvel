import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(245,245,245)',
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
        borderColor: 'rgb(247,247,247)',
        borderWidth: 1, 
        borderRadius: 6
    },

    textButton: {
        color: 'rgb(247,247,247)',
        fontWeight: '600',
    },

    inputContainer: {
        margin: 20,
    },

    buttonContainer: {
        margin: 20,
    },
})